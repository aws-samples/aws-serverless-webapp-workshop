+++
title = "Modules"
weight = 12
+++

After completing the Initial Setup, follow the remaining modules in order:

Module # | Feature | Description
------------ | ------------- | -------------
This section | Introduction | Learn about the Serverless web application.
[Setup][setup] | Setup | Prerequisites and requirements and setting up the AWS Cloud9 IDE.
[Static Web Hosting][static-web-hosting] | Deploy the application | Deploy the static website using AWS Amplify Console by first creating a git repository (in either CodeCommit or GitHub) and then pushing the site code.
[User Management][user-management] | Configure Login access |Configure user management for the website using Amazon Cognito.
[Serverless Backend][serverless-backend] | Database | Create an AWS Lambda function that will persist data to an Amazon DynamoDB table.
[RESTful APIs][restful-apis] | Configure API | Expose the Lambda function via an Amazon API Gateway as a RESTful API that the static site can call.
[Cleanup][cleanup] | Cleanup workshop resources | How to remove all of the workshop's resources from your account.

If you run out of time in the workshop, don't panic! These instructions are public and they are available after your workshop ends.

[setup]: /0-setup
[static-web-hosting]: /1-staticwebhosting
[user-management]: /2-usermanagement
[serverless-backend]: /3-serverlessbackend
[restful-apis]: /4-restfulapis
[cleanup]: /5-cleanup