+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Recap"
date = 2019-09-09T17:42:10+01:00
weight = 99
+++

### :star: Recap

:key: [Amazon API Gateway][api-gw] is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. You can easily plug in Authorization via [Amazon Cognito][cognito] and backends such as [AWS Lambda][lambda] to create completely serverless APIs.

:wrench: In this module you've used API Gateway to provide a REST API to the Lambda function created in the previous module. From there you've updated the website to use the API endpoint so that you can request rides and the information about the ride is saved in the DynamoDB table created earlier.

:star: Congratulations, you have completed the Wild Rydes Web Application Workshop! Check out our [other workshops][workshops] covering additional serverless use cases.

### Next

:white_check_mark: See this workshop's [cleanup guide][cleanup] for instructions on how to delete the resources you've created.

[api-gw]: https://aws.amazon.com/api-gateway/
[cleanup]: /cleanup
[cognito]: https://aws.amazon.com/cognito/
[lambda]: https://aws.amazon.com/lambda/
[workshops]: https://github.com/aws-samples/aws-serverless-workshops
