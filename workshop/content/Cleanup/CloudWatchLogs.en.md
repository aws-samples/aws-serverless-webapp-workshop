+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "CloudWatch Logs"
date = 2019-09-09T17:42:10+01:00
weight = 50
+++

### 5. CloudWatch Logs Cleanup
AWS Lambda automatically creates a new log group per function in Amazon CloudWatch Logs and writes logs to it when your function is invoked. You should delete the log group for the **RequestUnicorn** function.

**:white_check_mark: Step-by-step directions**

1. From the AWS Console click **Services** then select **CloudWatch** under Management Tools.
1. Choose **Log Groups** underneath **Logs** in the navigation menu.
1. Select the **/aws/lambda/RequestUnicorn** log group. If you have many log groups in your account, you can type `/aws/lambda/RequestUnicorn` into the **Filter** text box to easily locate the log group.
1. Choose **Delete log group** from the **Actions** drop-down.
1. Choose **Yes, Delete** when prompted to confirm.
1. If you launched any CloudFormation templates to complete a module, repeat steps 3-5 for any log groups which begin with `/aws/lambda/wildrydes-webapp`.
