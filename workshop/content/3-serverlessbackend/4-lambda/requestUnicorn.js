// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { randomBytes } from 'crypto';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-east-1' }); // Update with your desired region

const fleet = [
  {
    Name: 'Bucephalus',
    Color: 'Golden',
    Gender: 'Male',
  },
  {
    Name: 'Shadowfax',
    Color: 'White',
    Gender: 'Male',
  },
  {
    Name: 'Rocinante',
    Color: 'Yellow',
    Gender: 'Female',
  },
];

export async function handler (event) {
  if (!event.requestContext.authorizer) {
    return errorResponse('Authorization not configured', event.requestContext.requestId);
  }

  const rideId = toUrlString(randomBytes(16));
  console.log('Received event (', rideId, '): ', event);

  const username = event.requestContext.authorizer.claims['cognito:username'];

  const requestBody = JSON.parse(event.body);

  const pickupLocation = requestBody.PickupLocation;

  const unicorn = findUnicorn(pickupLocation);

  try {
    await recordRide(rideId, username, unicorn);

    return {
      statusCode: 201,
      body: JSON.stringify({
        RideId: rideId,
        Unicorn: unicorn,
        UnicornName: unicorn.Name,
        Eta: '30 seconds',
        Rider: username,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (err) {
    console.error(err);

    return errorResponse(err.message, event.requestContext.requestId);
  }
};

function findUnicorn(pickupLocation) {
  console.log('Finding unicorn for ', pickupLocation.Latitude, ', ', pickupLocation.Longitude);
  return fleet[Math.floor(Math.random() * fleet.length)];
}

async function recordRide(rideId, username, unicorn) {
  const params = {
    TableName: 'Rides',
    Item: marshall({
      RideId: rideId,
      User: username,
      Unicorn: unicorn,
      UnicornName: unicorn.Name,
      RequestTime: new Date().toISOString(),
    }),
  };

  await ddbClient.send(new PutItemCommand(params));
}

function toUrlString(buffer) {
  return buffer
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function errorResponse(errorMessage, awsRequestId) {
  return {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}
