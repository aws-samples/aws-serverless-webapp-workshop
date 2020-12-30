+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "IAM"
date = 2019-09-09T17:42:10+01:00
weight = 20
+++

### 2. Create an IAM Role for Your Lambda Function

#### Background

Every Lambda function has an [IAM][iam] role associated with it. This role defines what other AWS services the function is allowed to interact with. In this workshop, you create an IAM role that grants your Lambda function permission to write logs to [Amazon CloudWatch Logs][cloudwatch] and access to write items to your DynamoDB table.

#### High-Level Instructions

Use the IAM console to create a new role. Name it `WildRydesLambda` and select AWS Lambda for the role type. You'll need to attach policies that grant your function permissions to write to Amazon CloudWatch Logs and put items to your DynamoDB table.

Attach the managed policy called `AWSLambdaBasicExecutionRole` to this role to grant the necessary CloudWatch Logs permissions. Also, create a custom inline policy for your role that allows the `dynamodb:PutItem` action for the table you created in the previous section.

**:white_check_mark: Step-by-step directions**

1. Go to the [AWS IAM Console][iam-console]
1. Select **Roles** in the left navigation bar and then choose **Create role**.
1. Select **Lambda** for the role type from the **AWS service** group, then click **Next: Permissions**
{{% notice note %}}
Selecting a role type automatically creates a trust policy for your role that allows AWS services to assume this role on your behalf. If you were creating this role using the CLI, AWS CloudFormation or another mechanism, you would specify a trust policy directly.
{{% /notice %}}
1. Begin typing `AWSLambdaBasicExecutionRole` in the **Filter** text box and check the box next to that role.
1. Click **Next: Tags**. Add any tags that you wish.
1. Click **Next: Review**.
1. Enter `WildRydesLambda` for the **Role name**.
1. Choose **Create role**. 

Next you need to add permissions to the role so that it can access your DynamoDB table.

**:white_check_mark: Step-by-step directions*

1. While in the IAM Console on the roles page type `WildRydesLambda` into the filter box on the Roles page and choose the role you just created.
1. On the Permissions tab, choose the **Add inline policy** link in the upper right corner to create a new inline policy.
    ![Inline policies screenshot](/images/inline-policies.png)
1. Select **Choose a service**.
1. Begin typing `DynamoDB` into the search box labeled **Find a service** and select **DynamoDB** when it appears.
    ![Select policy service](/images/select-policy-service.png)
1. Choose **Select actions**.
1. Begin typing `PutItem` into the search box labeled **Filter actions** and check the box next to **PutItem** when it appears.
1. Select the **Resources** section.
1. With the **Specific** option selected, choose the Add ARN link in the **table** section.
1. Paste the ARN of the table you created in the previous section in the **Specify ARN for table** field, and choose **Add**.
1. Choose **Review Policy**.
1. Enter `DynamoDBWriteAccess` for the policy name and choose **Create policy**.
    ![Review Policy](/images/review-policy.png)

[cloudwatch]: https://aws.amazon.com/cloudwatch/
[iam]: https://aws.amazon.com/iam/
[iam-console]: https://console.aws.amazon.com/iam/home
