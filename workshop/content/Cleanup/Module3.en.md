+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Module 3"
date = 2019-09-09T17:42:10+01:00
weight = 20
+++

### 2. Module 3 - Serverless Backend Cleanup
Delete the AWS Lambda function, IAM role and Amazon DynamoDB table you created in module 3.

**:white_check_mark: Step-by-step directions**

#### Lambda Function

1. Go to the [AWS Lambda console][lambda-console]
1. Select the `RequestUnicorn` function you created in module 3.
1. From the **Actions** drop-down, choose **Delete function**.
1. Choose **Delete** when prompted to confirm.

#### IAM Role

1. Go to the [AWS IAM Console][iam-console]
1. Select **Roles** from the navigation menu.
1. Type `WildRydesLambda` into the filter box.
1. Select the role you created in module 3.
1. From the **Role actions** drop-down, select **Delete role**.
1. Choose **Yes, Delete** when prompted to confirm.

#### DynamoDB Table

1. Go to the [Amazon DynamoDB Console][dynamodb-console]
1. Choose **Tables** in the navigation menu.
1. Choose the **Rides** table you created in module 3.
1. Choose **Delete table** from the **Actions** drop-down.
1. Leave the checkbox to **Delete all CloudWatch alarms for this table** selected and choose **Delete**.

[dynamodb-console]: https://console.aws.amazon.com/dynamodb/home
[iam-console]: https://console.aws.amazon.com/iam/home
[lambda-console]: https://console.aws.amazon.com/lambda/home
