+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Integration"
date = 2019-09-09T17:42:10+01:00
weight = 30
+++

### 3. Create an Integration

#### Background
HTTP API supports various backend integrations such as, Lambda functions, HTTP Endpoints, AWS Services like AWS EventBridge and AWS Step Functions, and private resources like ALB/NLB and CloudMap, you can find the full list [here][integrations-list]. In this step you'll configure a lambda integration that uses the lambda function you created in the [Serverless Backend][serverless-backend] section.


#### High-Level Instructions
In the HTTP API console, create a new integration. Configure it with the details of the lambda function from the previous module.

**:white_check_mark: Step-by-step directions**

1. Under your API, choose **Integrations**.
1. Choose the **Manage integrations** tab and click **Create**.
1. Leave the **Attach this integration to a route** empty, we will attach the integration in the next section.
1. Choose **Lambda function** for Integration Type.
1. Choose the region of your Lambda function and the `RequestUnicorn` in the function name field.
1. Verify that the *Grant API Gateway permission to invoke your Lambda function* flag is on.
1. Click **Create**.

    ![Integration](/images/integration.png)


[serverless-backend]: /serverlessbackend
[integrations-list]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations.html
