+++
title = "Cognito"
weight = 3
+++

## Create a Cognito User Pools Authorizer

### Background
Amazon API Gateway can use the JWT tokens returned by Cognito User Pools to authenticate API calls. In this step you'll configure an authorizer for your API to use the user pool you created in [User Management][user-management].

### High-Level Instructions
In the Amazon API Gateway console, create a new Cognito user pool authorizer for your API. Configure it with the details of the user pool that you created in the previous module. You can test the configuration in the console by copying and pasting the auth token presented to you after you log in via the _/signin_ route of your current website.

1. Under your newly created API, choose **Authorizers**.
2. Choose **Create New Authorizer**.
3. Enter `WildRydes` for the Authorizer name.
4. Select **Cognito** for the type.
5. In the Region drop-down under **Cognito User Pool**, select the Region where you created your Cognito user pool in the User Management module (by default the current region should be selected).
6. Enter `wildrydes` in the **Cognito User Pool** input, the name will auto-complete and allow you to select the name of the user pool that was generated when the user pool was created.
7. Enter `Authorization` for the **Token Source**.
8. Choose **Create**.

    ![Create user pool authorizer screenshot](/images/create-user-pool-authorizer.png)

### Verify your authorizer configuration

1. Open a new browser tab and visit `/ride` under your website's domain.
2. If you are redirected to the sign-in page, sign in with the user you created in the last module. You will be redirected back to `/ride`.
3. Copy the auth token from the notification on the `/ride`,
4. Go back to previous tab where you have just finished creating the Authorizer
5. Click **Test** at the bottom of the card for the authorizer.
6. Paste the auth token into the **Authorization Token** field in the popup dialog.
    ![Test Authorizer screenshot](/images/apigateway-test-authorizer.png)

7. Click **Test** button and verify that the response code is 200 and that you see the claims for your user displayed.

[user-management]: /2-usermanagement
