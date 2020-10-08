+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "REST API"
date = 2019-09-09T17:42:10+01:00
weight = 10
+++

### 1. Create a New REST API
Use the Amazon API Gateway console to create a new API named `WildRydes`.

**:white_check_mark: Step-by-step directions**

1. Go to the [Amazon API Gateway Console][api-gw-console]
1. On the **REST API** card, choose **Build**.
1. In the section **Create new API** select _New API_ to clear the example API definition.
1. Enter `WildRydes` for the **API Name**.
1. Select `Regional` from the **Endpoint Type** dropdown.
{{% notice note %}}
Edge optimized APIs are best for public services being accessed from the Internet. Regional endpoints are typically used for APIs that are accessed primarily from within the same AWS Region. Private APIs are for internal services inside of an Amazon VPC.
{{% /notice %}}
1. Choose **Create API**

    ![Create API screenshot](/images/create-api.png)

[api-gw-console]: https://console.aws.amazon.com/apigateway/home
