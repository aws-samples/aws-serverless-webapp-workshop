+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Amplify Cli"
date = 2019-09-09T17:42:10+01:00
weight = 10
+++

### 1. Initialize AWS Amplify CLi

#### Background


The [AWS Amplify Command Line Interface][aws-amplify-cli] (CLI) is a unified toolchain to create, integrate, and manage the AWS cloud services for your app. The Amplify CLI toolchain is designed to work with the Amplify JavaScript library as well as the AWS Mobile SDKs for iOS and Android. 


AWS Amplify Authentication module provides Authentication APIs and building blocks for developers who want to create user authentication experiences.

**:white_check_mark: Step-by-step directions**

1. Install the Amplify CLI by running the following command from within your Cloud9 terminal window:
    ```bash
    npm install -g @aws-amplify/cli
    ```

    More information can be found in the documention  [here][amplify-install-cli]

1. Configure your default AWS profile.

    ```bash
    echo '[profile default]' > ~/.aws/config
    ```

1. Go to the root `wild-rydes` directory of the repository:

   
 1. Initialize amplify CLI by executing the following command:
    ```
    amplify init
    ```

The terminal will now take a few moments to initialize your project:

{{% notice note %}}
Be sure to provide the same environment name that you provided earlier, for example, **prod**.
{{% /notice %}}

![Amplify init screenshot](/images/amplify-init.png)

Verify that the initialization has finished by entering the following command. Version 4.29.3 or greater should be installed.

```
amplify version
```

Next you will add an Amazon Cognito category to your AWS Amplify configuration, via the AWS Amplify CLI.

[amplify-install-cli]: https://github.com/aws-amplify/amplify-cli#install-the-cli
[aws-amplify-cli]: https://github.com/aws-amplify/amplify-cli
