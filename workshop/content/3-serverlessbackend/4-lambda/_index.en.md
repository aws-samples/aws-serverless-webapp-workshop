+++
title = "Lambda"
weight = 4
+++

## Create a Lambda Function for Handling Requests

### Background

AWS Lambda runs your code in response to events such as an HTTP request. In this step you build a function that processes API requests from the web application to dispatch a unicorn. In the next module you use Amazon API Gateway to create a RESTful API that exposes an HTTP endpoint that can be invoked from your users' browsers. Then you connect the Lambda function you create in this step to that API to create a fully functional backend for your web application.

### High-Level Instructions

Use the AWS Lambda console to create a new Lambda function called `RequestUnicorn` that processes API requests. Copy and paste [this example implementation](requestUnicorn.js) into the AWS Lambda console's editor for your function code.

Configure your function to use the `WildRydesLambda` IAM role you created in the previous section.

1. Go to the [AWS Lambda console][lambda-console]
2. Click **Create function**.
3. Keep the default **Author from scratch** card selected.
4. Enter `RequestUnicorn` in the **Name** field.
5. Select **Node.js 18.x** for the **Runtime**.
6. Expand *Change default execution role* under **Permissions**.
7. Ensure `Use an existing role` is selected from the **Role** dropdown.
8. Select `WildRydesLambda` from the **Existing Role** dropdown.
    ![Create Lambda function screenshot](/images/create-lambda-function.png)
9. Choose **Create function**.
10. Scroll down to the **Function code** section and replace the existing code in the **index.js** code editor with the contents of [requestUnicorn.js](requestUnicorn.js).
    ![Create Lambda function screenshot](/images/create-lambda-function-code.png)
11. Click **Deploy** in the upper right above the code editor.

### Implementation Validation

For this module you will test the function that you built using the AWS Lambda console. In the next module you will add a REST API with API Gateway so you can invoke your function from the browser-based application that you deployed in the first module.

1. From Test Tab, Configure test event.
    ![Configure test event](/images/configure-test-event.png)
2. Keep **Create new test event** selected.
3. Enter `TestRequestEvent` in the **Event name** field
4. Copy and paste the following test event into the editor: 
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
5. Click **Save**. Click **Test**.
6. From Test Tab, expand the **Details** section of the **Execution result** section.
7. Verify that the execution succeeded and that the function result looks like the following: 
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

### Recap

[AWS Lambda][lambda] is a serverless Functions-as-a-Service (FaaS) product that removes the burden of managing servers to run your applications. You configure a trigger and set the role that the function can use and then can interface with almost anything you want from databases, to datastores, to other services either publicly on the internet or in your own Amazon Virtual Private Cloud (VPC). [Amazon DynamoDB][dynamodb] is a non-relational serverless database that can scale automatically to handle massive amounts of traffic and data without the need to manage any servers.

In this module you created a DynamoDB table and a Lambda function to write data into it. In the next module, you create an Amazon API Gateway REST API and connect it to your application to capture ride details from your users.

### Next

After testing your new function using the Lambda console, you can move on to the next module, [RESTful APIs][restful-apis].

[dynamodb]: https://aws.amazon.com/dynamodb/
[lambda]: https://aws.amazon.com/lambda/
[restful-apis]: /4-restfulapis
