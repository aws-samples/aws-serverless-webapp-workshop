+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "User Pool"
date = 2019-09-09T17:42:10+01:00
weight = 20
+++

### 2. Create an Amazon Cognito User Pool using AWS Amplify CLI

#### Background

The AWS Amplify Authentication module provides Authentication APIs and building blocks for developers who want to create user authentication experiences.

[Amazon Cognito][amazon-cognito] User Pools is a full-featured user directory service to handle user registration, authentication, and account recovery. Amazon Cognito Federated Identities on the other hand, is a way to authorize your users to use AWS services.

Amplify interfaces with User Pools to store your user information. This includes federation with other OpenID providers like Facebook & Google. Amplify also uses Federated Identities to manage user access to AWS Resources, like allowing a user to upload a file to an S3 bucket. The Amplify CLI automates the access control policies for these AWS resources and provides fine grained access controls via GraphQL for protecting data in your APIs.

In this section you use the Amplify CLI to create a new Cognito User Pool with the default settings. Then you use the Amazon Cognito Console to manage the new User Pool.

#### Amazon Cognito

**:white_check_mark: Step-by-step directions**

1. Execute the following commands to add the Amazon Cognito User Pool:
```
amplify add auth
 ```
The AWS Amplify CLI will now run through the set up for Amazon Cognito, select the following:

```none
> Do you want to use the default authentication and security configuration? "Default configuration"
> How do you want users to be able to sign in? "Username"
> Do you want to configure advanced settings? "No, I am done."
```

Once configuration completes you see the following confirmation:
![Amplify auth add screenshot](/images/amplify-auth-add.png)

{{% notice warning %}}
Do not run `amplify push` or `amplify publish` - this will create duplicate backend resources. Amplify Console creates the necessary resources when you push your code to your repository.
{{% /notice %}}

Committing your code updates to provision your Amplify backend resources in the cloud and kick off a new build.

1. Commit the changes to your git repository:
 
``` 
git add .

git commit -m "Configure Cognito"

git push

```
Amplify Console picks up the changes and begins building and deploying your web application.

[amazon-cognito]: https://aws.amazon.com/cognito/
