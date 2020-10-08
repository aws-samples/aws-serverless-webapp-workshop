+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Overview"
date = 2019-09-09T17:42:10+01:00
weight = 1
+++


In this module you'll use the [AWS Amplify CLI][aws-amplify-cli] to create an [Amazon Cognito][cognito] User Pool to manage your users' accounts. You'll deploy pages that enable customers to register as a new user, verify their email address, and sign into the site.

## Architecture Overview

When users visit your website they will first register a new user account. For the purposes of this workshop we'll only require them to provide an email address and password to register. However, you can configure Amazon Cognito to require additional attributes in your own applications.

After users submit their registration, Amazon Cognito will send a confirmation email with a verification code to the address they provided. To confirm their account, users will return to your site and enter their email address and the verification code they received. You can also confirm user accounts using the Amazon Cognito console if you want to use fake email addresses for testing.

After users have a confirmed account (either using the email verification process or a manual confirmation through the console), they will be able to sign in. When users sign in, they enter their username (or email) and password. A JavaScript function then communicates with Amazon Cognito, authenticates using the Secure Remote Password protocol (SRP), and receives back a set of JSON Web Tokens (JWT). The JWTs contain claims about the identity of the user and will be used in the next module to authenticate against the RESTful API you build with Amazon API Gateway.

![Authentication architecture](/images/authentication-architecture.png)

## Implementation Instructions

:heavy_exclamation_mark: Ensure you've completed the [Static Web Hosting][static-web-hosting] step before beginning
the workshop.

Each of the following sections provides an implementation overview and detailed, step-by-step instructions. The overview should provide enough context for you to complete the implementation if you're already familiar with the AWS Management Console or you want to explore the services yourself without following a walkthrough.

[aws-amplify-cli]: https://github.com/aws-amplify/amplify-cli
[cognito]: https://aws.amazon.com/cognito/
[static-web-hosting]: /staticwebhosting
