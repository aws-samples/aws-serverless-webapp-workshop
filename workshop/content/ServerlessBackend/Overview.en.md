+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Overview"
date = 2019-09-09T17:42:10+01:00
weight = 1
+++

In this module you'll use [AWS Lambda][lambda] and [Amazon DynamoDB][dynamodb] to build a backend process for handling requests from your web application. The browser application that you deployed in the first module allows users to request that a unicorn be sent to a location of their choice. In order to fulfill those requests, the JavaScript running in the browser invokes a service running in the cloud.

You'll implement a Lambda function that will be invoked each time a user requests a unicorn. The function selects a unicorn from the fleet, records the request in a DynamoDB table, and responds to the front-end application with details about the dispatched unicorn.

![Serverless backend architecture](/images/serverless-backend-architecture.png)

The function is invoked from the browser using [Amazon API Gateway][api-gw]. You implement that connection in the next module. For this module, you test your function in isolation.

## Implementation Instructions

:heavy_exclamation_mark: Ensure you've completed the [User Management][user-management] step before beginning this module.

Each of the following sections provides an implementation overview and detailed, step-by-step instructions. The overview should provide enough context for you to complete the implementation if you're already familiar with the AWS Management Console or if you want to explore the services yourself without following a walkthrough.

[api-gw]: https://aws.amazon.com/api-gateway/
[dynamodb]: https://aws.amazon.com/dynamodb/
[lambda]: https://aws.amazon.com/lambda/
[user-management]: /usermanagement
