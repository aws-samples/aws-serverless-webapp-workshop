+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "CORS"
date = 2019-09-09T17:42:10+01:00
weight = 40
+++

### 4. Configure CORS

#### Background
[Cross-origin resource sharing (CORS)][cors-link] is a browser security feature that restricts HTTP requests that are initiated from scripts running in the browser.
CORS is typically required to build web applications that access APIs hosted on a different domain or origin. You can enable CORS to allow requests to your API from a web application hosted on a different domain (see list of options [here][api-cors-opt]).

#### High-Level Instructions
In the HTTP API console, navigate to the CORS section. Configure the CORS field and enable it on the API.

**:white_check_mark: Step-by-step directions**

1. Under your API, choose **CORS**.
1. Choose **Configure**.
1. Enter `*` in the **Access-Control-Allow-Origin** field add click **Add**.
1. Enter `Authorization` in the **Access-Control-Allow-Headers** and click **Add**.
1. Enter `*` in the **Access-Control-Allow-Methods** and click **Add**.
1. Choose **Save**
    ![CORS](/images/cors.png)


[cors-link]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
[api-cors-opt]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html