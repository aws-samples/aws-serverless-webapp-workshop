+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "API Resource"
date = 2019-09-09T17:42:10+01:00
weight = 30
+++

### 3. Create a new resource and method
Create a new resource called _/ride_ within your API. Then create a _POST_ method for that resource and configure it to use a Lambda proxy integration backed by the _RequestUnicorn_ function you created in the first step of this module.

**:white_check_mark: Step-by-step directions**

1. In the left nav, click on **Resources** under your WildRydes API.
1. From the **Actions** dropdown select **Create Resource**.
1. Enter `ride` as the **Resource Name**.
1. Ensure the **Resource Path** is set to `ride`.
1. Select **Enable API Gateway CORS** for the resource.
1. Choose **Create Resource**.

    ![Create resource screenshot](/images/create-resource.png)

1. With the newly created `/ride` resource selected, from the **Action** dropdown select **Create Method**.
1. Select `POST` from the new dropdown that appears, then **click the checkmark**.

    ![Create method screenshot](/images/create-method.png)
1. Select **Lambda Function** for the integration type.
1. Check the box for **Use Lambda Proxy integration**.
1. Select the Region you are using for **Lambda Region**.
1. Enter the name of the function you created in the previous module, `RequestUnicorn`, for **Lambda Function**.
1. Choose **Save**. Please note, if you get an error that you function does not exist, check that the region you selected matches the one you used in the previous module.

    ![API method integration screenshot](/images/api-integration-setup.png)

1. When prompted to give Amazon API Gateway permission to invoke your function, choose **OK**.
1. Select the **Method Request** card.
1. Choose the pencil icon next to **Authorization**.
1. Select the WildRydes Cognito user pool authorizer from the drop-down list, and click the checkmark icon.

    ![API authorizer configuration screenshot](/images/api-authorizer.png)
