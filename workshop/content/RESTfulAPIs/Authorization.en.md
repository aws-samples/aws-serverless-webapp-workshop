+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Authorization"
date = 2019-09-09T17:42:10+01:00
weight = 20
+++

### 2. Create an Authorizer

#### Background
HTTP API supports IAM (built-in), JWT tokens and Lambda authorization methods, you can read about each of them [here][authorization-type]. In this step you'll configure a new JWT authorizer that uses the user pool you created in [User Management][user-management] to authenticate API calls.


#### High-Level Instructions
In the HTTP API console, create an authorizer. Configure it with the details of the user pool that you created in the previous module.

**:white_check_mark: Step-by-step directions**

1. Under your newly created API, choose **Authorization**.
1. Choose the **Manage authorizers** tab and click **Create**.
1. Choose **JWT** for Authorizer Type.
1. Enter `wild-rydes-auth` as the authorizer name.
1. Enter `$request.header.Authorization` in the Identify Source field.
1. Enter **Cognito User Pools** URL (JWT issuer) in the format `_https://{issuer_domain}/{pool_id}_` (e.g `https://cognito-idp.us-east-2.amazonaws.com/us-east-2_haEzIqyG7`) in the Issuer URL field.
1. Click **Add audience** and enter your **Cognito AppClient ID** in the Audience field. The Client Id can be found in the Cognito User Pool Console under **App Client Settings**.![App Client Settings](/images/auth-app-client-id.png)  
1. Choose **Save**.

    ![Authorizer](/images/jwt-authorizer.png)

<!-- 
#### Verify your authorizer configuration

**:white_check_mark: Step-by-step directions**

1. Open a new browser tab and visit `/ride` under your website's domain.
1. If you are redirected to the sign-in page, sign in with the user you created in the last module. You will be redirected back to `/ride`.
1. Copy the auth token from the notification on the `/ride`,
1. Go back to previous tab where you have just finished creating the Authorizer
1. Click **Test** at the bottom of the card for the authorizer.
1. Paste the auth token into the **Authorization Token** field in the popup dialog.
    ![Test Authorizer screenshot](/images/apigateway-test-authorizer.png)

1. Click **Test** button and verify that the response code is 200 and that you see the claims for your user displayed.
-->


[user-management]: /usermanagement
[authorization-type]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-access-control.html 