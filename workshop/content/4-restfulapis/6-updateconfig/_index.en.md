+++
title = "Update Config"
weight = 6
+++

## Update the Website Config
Update the _/src/config.js_ file in your website deployment to include the invoke URL of the stage you just created. You should copy the invoke URL directly from the top of the stage editor page on the Amazon API Gateway console and paste it into the _\_config.api.invokeUrl_ key of your site's _/src/config.js_ file. Make sure when you update the config file it still contains the updates you made in the previous module for your Cognito user pool.

1. On your Cloud9 development environment open `src/config.js`
2. Update the **invokeUrl** setting under the **api** key in the config.js file. Set the value to the **Invoke URL** for the deployment stage your created in the previous section.
    An example of a complete `config.js` file is included below. **Note**: The actual URL in your file will be different.
    ```JavaScript
    module.exports = {
        api: {
            invokeUrl: 'https://rfk14x9w40.execute-api.us-east-1.amazonaws.com/prod'
        }
    }
    ```

3. Save the modified file making sure the filename is still `config.js`.
4. Commit the changes to your git repository:
    ```bash
    git add src/config.js 
    
    git commit -m "Configure API invokeURL"
    
    git push
    ```

[Amplify Console][amplify-console-console] should pick up the changes and begin building and deploying your web application. Watch it to verify the completion of the deployment.

## Implementation Validation

1. Visit `/ride` under your website domain.
2. If you are redirected to the sign in page, sign in with the user you created in the previous module.
3. After the map has loaded, click anywhere on the map to set a pickup location.
4. Choose **Request Unicorn**. You should see a notification in the right sidebar that a unicorn is on its way and then see a unicorn icon fly to your pickup location.

### Recap

[Amazon API Gateway][api-gw] is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. You can easily plug in Authorization via [Amazon Cognito][cognito] and backends such as [AWS Lambda][lambda] to create completely serverless APIs.

In this module you've used API Gateway to provide a REST API to the Lambda function created in the previous module. From there you've updated the website to use the API endpoint so that you can request rides and the information about the ride is saved in the DynamoDB table created earlier.

Congratulations, you have completed the Wild Rydes Web Application Workshop! Check out our [other workshops][workshops] covering additional serverless use cases.

### Next

See this workshop's [cleanup guide][cleanup] for instructions on how to delete the resources you've created.

[api-gw]: https://aws.amazon.com/api-gateway/
[cleanup]: /5-cleanup
[cognito]: https://aws.amazon.com/cognito/
[lambda]: https://aws.amazon.com/lambda/
[workshops]: https://github.com/aws-samples/aws-serverless-workshops
[amplify-console-console]: https://console.aws.amazon.com/amplify/home