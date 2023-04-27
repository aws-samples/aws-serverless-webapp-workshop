+++
title = "API Resource"
weight = 4
+++

## Create a new resource and method
Create a new resource called _/ride_ within your API. Then create a _POST_ method for that resource and configure it to use a Lambda proxy integration backed by the _RequestUnicorn_ function you created in the first step of this module.

1. In the left nav, click on **Resources** under your WildRydes API.
2. From the **Actions** dropdown select **Create Resource**.
3. Enter `ride` as the **Resource Name**.
4. Ensure the **Resource Path** is set to `ride`.
5. Select **Enable API Gateway CORS** for the resource.
6. Choose **Create Resource**.

    ![Create resource screenshot](/images/create-resource.png)

7. With the newly created `/ride` resource selected, from the **Action** dropdown select **Create Method**.
8. Select `POST` from the new dropdown that appears, then **click the checkmark**.

    ![Create method screenshot](/images/create-method.png)
9. Select **Lambda Function** for the integration type.
10. Check the box for **Use Lambda Proxy integration**.
11. Select the Region you are using for **Lambda Region**.
12. Enter the name of the function you created in the previous module, `RequestUnicorn`, for **Lambda Function**.
13. Choose **Save**. Please note, if you get an error that you function does not exist, check that the region you selected matches the one you used in the previous module.

    ![API method integration screenshot](/images/api-integration-setup.png)

14. When prompted to give Amazon API Gateway permission to invoke your function, choose **OK**.
15. Select the **Method Request** card.
16. Choose the pencil icon next to **Authorization**.
17. Select the WildRydes Cognito user pool authorizer from the drop-down list, and click the checkmark icon.

    ![API authorizer configuration screenshot](/images/api-authorizer.png)
