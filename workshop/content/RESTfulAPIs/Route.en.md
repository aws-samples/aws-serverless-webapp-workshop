+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Route"
date = 2019-09-09T17:42:10+01:00
weight = 50
+++

### 5. Create a Route

#### Background
Amazon API Gateway HTTP API uses [routes][routes-link] to define your different API paths and how they're directed to backend resources. 

#### High-Level Instructions
In the HTTP API console, create a new a route to be used by our client. Attach the wild-rydes-auth authorizer and the RequestUnicorn integration that were created in the previous sections.

**:white_check_mark: Step-by-step directions**

1. Under your API, choose **Routes**.
1. Choose **Create**.
1. Enter `/ride` as the route path and choose `POST` for the method and click **Create**.
1. Click **Attach Authorization**.
1. Choose `wild-rydes-auth` in the authorizers dropdown and click **Attach authorizer**.
1. Go back to the **Routes** and select the `/ride` route you created.
1. Click **Attach Integration**
1. Choose `RequestUnicron` in the integrations dropdown and click **Attach integration**.

    ![Routes](/images/route-final.png)


[routes-link]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html
