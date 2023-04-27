+++
title = "IAM"
weight = 3
+++

## Create an IAM Role for Your Lambda Function

### Background

Every Lambda function has an [IAM][iam] role associated with it. This role defines what other AWS services the function is allowed to interact with. In this workshop, you create an IAM role that grants your Lambda function permission to write logs to [Amazon CloudWatch Logs][cloudwatch] and access to write items to your DynamoDB table.

### High-Level Instructions

Use the IAM console to create a new role. Name it `WildRydesLambda` and select AWS Lambda for the role type. You'll need to attach policies that grant your function permissions to write to Amazon CloudWatch Logs and put items to your DynamoDB table.

Attach the managed policy called `AWSLambdaBasicExecutionRole` to this role to grant the necessary CloudWatch Logs permissions. Also, create a custom inline policy for your role that allows the `dynamodb:PutItem` action for the table you created in the previous section.

1. Go to the [AWS IAM Console][iam-console]
2. Select **Roles** in the left navigation bar and then choose **Create role**.
3. Under Use case, Select **Lambda** from the AWS services, then click **Next**
{{% notice note %}}
Selecting a role type automatically creates a trust policy for your role that allows AWS services to assume this role on your behalf. If you were creating this role using the CLI, AWS CloudFormation or another mechanism, you would specify a trust policy directly.
{{% /notice %}}
4. Begin typing `AWSLambdaBasicExecutionRole` in the **Filter** text box and check the box next to that managed role, then Click **Next**
5. Enter `WildRydesLambda` for the **Role name**. Add any tags that you wish.
6. Choose **Create role**. 
![Create lambda role](/images/create-lambda-role.png)

Next you need to add permissions to the role so that it can access your DynamoDB table.

1. While in the IAM Console on the roles page type `WildRydesLambda` into the filter box and click the role name.
2. Under the Add Permissions tab, choose the **create inline policy**
    ![Inline policies screenshot](/images/create-inline-policy.png)
3. Select **Choose a service**.
4. Begin typing `DynamoDB` into the search box labeled **Find a service** and select **DynamoDB** when it appears.
    ![Select policy service](/images/select-policy-service.png)
5. Choose **Select actions**.
6. Begin typing `PutItem` into the search box labeled **Filter actions** and check the box next to **PutItem** when it appears.
7. Select the **Resources** section.
8. With the **Specific** option selected, choose the Add ARN link in the **table** section.
9. Paste the ARN of the table you created in the previous section in the **Specify ARN for table** field, and choose **Add**.
10. Choose **Review Policy**.
11. Enter `DynamoDBWriteAccess` for the policy name and choose **Create policy**.
    ![Review Policy](/images/review-policy.png)

[cloudwatch]: https://aws.amazon.com/cloudwatch/
[iam]: https://aws.amazon.com/iam/
[iam-console]: https://console.aws.amazon.com/iam/home
