+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Overview"
date = 2019-09-09T17:42:10+01:00
weight = 1
+++

In this module you use API Gateway to expose the Lambda function you built in the [previous module][serverless-backend] as a RESTful API. This API will be accessible on the public Internet. It will be secured using the Amazon Cognito user pool you created in the [User Management][user-management] module. Using this configuration you will then turn your statically hosted website into a dynamic web application by adding client-side JavaScript that makes AJAX calls to the exposed APIs.

![Dynamic web app architecture](/images/restful-api-architecture.png)

The preceding diagram shows how API Gateway integrates with the existing components you built previously.

The static website you deployed in the first module already has a page configured to interact with the API you'll build in this module. The _ride_ route has a simple map-based interface for requesting a unicorn ride. After authenticating using the _/signin_ route, your users select their pickup location by clicking a point on the map and request a ride by choosing the **Request Unicorn** button in the upper right corner.

This module focuses on the steps required to build the cloud components of the API, but if you're interested in how the browser code works that calls this API, you can inspect the [ride.js](/staticwebhosting/ride.js) source. In this case the application uses jQuery's [ajax()](https://api.jquery.com/jQuery.ajax/) method to make the remote request.

## Implementation Instructions

:heavy_exclamation_mark: Ensure you've completed the [Serverless Backend][serverless-backend] step before beginning
the workshop.

Each of the following sections provides an implementation overview and detailed, step-by-step instructions. The overview should provide enough context for you to complete the implementation if you're already familiar with the AWS Management Console or if you want to explore the services yourself without following a walkthrough.

[serverless-backend]: /serverlessbackend
[static-web-hosting]: /staticwebhosting
[user-management]: /usermanagement
