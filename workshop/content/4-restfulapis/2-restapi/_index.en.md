+++
title = "REST API"
weight = 2
+++

## Create a New REST API
Use the Amazon API Gateway console to create a new API named `WildRydes`.

1. Go to the [Amazon API Gateway Console][api-gw-console], click **Create API**
2. On the **REST API** card, choose **Build**.
3. In the section Create new API select **New API** to clear the example API definition.
4. Enter `WildRydes` for the **API Name**.
5. Select `Regional` from the **Endpoint Type** dropdown.
{{% notice note %}}
Edge optimized APIs are best for public services being accessed from the Internet. Regional endpoints are typically used for APIs that are accessed primarily from within the same AWS Region. Private APIs are for internal services inside of an Amazon VPC.
{{% /notice %}}
6. Choose **Create API**

    ![Create API screenshot](/images/create-api.png)

[api-gw-console]: https://console.aws.amazon.com/apigateway/home
