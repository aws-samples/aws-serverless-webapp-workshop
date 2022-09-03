+++
title = "Backend Cleanup"
weight = 30
+++

## Serverless Backend Cleanup
Delete the AWS Lambda function, IAM role and Amazon DynamoDB table you created in module 3.

#### Lambda Function

1. Go to the [AWS Lambda console][lambda-console]
2. Select the `RequestUnicorn` function you created.
3. From the **Actions** drop-down, choose **Delete**.
4. Choose **Delete** when prompted to confirm.

#### IAM Role

1. Go to the [AWS IAM Console][iam-console]
2. Select **Roles** from the navigation menu.
3. Type `WildRydesLambda` into the filter box and select the role you created.
4. On the top right, click on the **Delete** button.
5. Reenter role name and click **Delete** when prompted to confirm.

#### DynamoDB Table

1. Go to the [Amazon DynamoDB Console][dynamodb-console]
2. Choose **Tables** in the navigation menu.
3. Choose the **Rides** table.
4. Choose **Delete table** from the **Actions** drop-down.
5. Leave the checkbox to **Delete all CloudWatch alarms for this table** selected and choose **Delete**.

[dynamodb-console]: https://console.aws.amazon.com/dynamodb/home
[iam-console]: https://console.aws.amazon.com/iam/home
[lambda-console]: https://console.aws.amazon.com/lambda/home
