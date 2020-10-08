+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Lambda"
date = 2019-09-09T17:42:10+01:00
weight = 30
+++

### 3. Create a Lambda Function for Handling Requests

#### Background

AWS Lambda runs your code in response to events such as an HTTP request. In this step you build a function that processes API requests from the web application to dispatch a unicorn. In the next module you use Amazon API Gateway to create a RESTful API that exposes an HTTP endpoint that can be invoked from your users' browsers. Then you connect the Lambda function you create in this step to that API to create a fully functional backend for your web application.

#### High-Level Instructions

Use the AWS Lambda console to create a new Lambda function called `RequestUnicorn` that processes API requests. Copy and paste [this example implementation](requestUnicorn.js) into the AWS Lambda console's editor for your function code.

Configure your function to use the `WildRydesLambda` IAM role you created in the previous section.

**:white_check_mark: Step-by-step directions**

1. Go to the [AWS Lambda console][lambda-console]
1. Click **Create function**.
1. Keep the default **Author from scratch** card selected.
1. Enter `RequestUnicorn` in the **Name** field.
1. Select **Node.js 12.x** for the **Runtime**.
2. Expand *Change default execution role* under **Permissions**.
1. Ensure `Use an existing role` is selected from the **Role** dropdown.
1. Select `WildRydesLambda` from the **Existing Role** dropdown.
    ![Create Lambda function screenshot](/images/create-lambda-function.png)
1. Choose **Create function**.
1. Scroll down to the **Function code** section and replace the existing code in the **index.js** code editor with the contents of [requestUnicorn.js](requestUnicorn.js).
    ![Create Lambda function screenshot](/images/create-lambda-function-code.png)
1. Click **Deploy** in the upper right above the code editor.

#### Implementation Validation

For this module you will test the function that you built using the AWS Lambda console. In the next module you will add a REST API with API Gateway so you can invoke your function from the browser-based application that you deployed in the first module.

**:white_check_mark: Step-by-step directions**

1. From the main edit screen for your function, select **Configure test events** from the the **Select a test event...** dropdown.
    ![Configure test event](/images/configure-test-event.png)
1. Keep **Create new test event** selected.
1. Enter `TestRequestEvent` in the **Event name** field
1. Copy and paste the following test event into the editor:
    ```JSON
    {
        "path": "/ride",
        "httpMethod": "POST",
        "headers": {
            "Accept": "*/*",
            "Authorization": "eyJraWQiOiJLTzRVMWZs",
            "content-type": "application/json; charset=UTF-8"
        },
        "queryStringParameters": null,
        "pathParameters": null,
        "requestContext": {
            "authorizer": {
                "claims": {
                    "cognito:username": "the_username"
                }
            }
        },
        "body": "{\"PickupLocation\":{\"Latitude\":47.6174755835663,\"Longitude\":-122.28837066650185}}"
    }
    ```
    ![Configure test event](/images/configure-test-event-2.png)
1. Choose **Create**.
1. On the main function edit screen click **Test** with `TestRequestEvent` selected in the dropdown.   
1. Scroll to the top of the page and expand the **Details** section of the **Execution result** section.
1. Verify that the execution succeeded and that the function result looks like the following:
    ```JSON
    {
      "statusCode": 201,
      "body": "{\"RideId\":\"1h0zDZ-6KLZaEQCPyqTxeQ\",\"Unicorn\":{\"Name\":\"Shadowfax\",\"Color\":\"White\",\"Gender\":\"Male\"},\"UnicornName\":\"Shadowfax\",\"Eta\":\"30 seconds\",\"Rider\":\"the_username\"}",
      "headers": {
        "Access-Control-Allow-Origin": "*"
      }
    }
    ```

[lambda-console]: https://console.aws.amazon.com/lambda/home
