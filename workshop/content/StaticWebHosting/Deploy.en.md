+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Deploy"
date = 2019-09-09T17:42:10+01:00
weight = 30
+++

### 3. Deploy the site with the AWS Amplify Console

Next you'll use the [AWS Amplify Console][amplify-console] to deploy the website you've just commited to git. The Amplify Console takes care of the work of setting up a place to store your static web application code and provides a number of helpful capabilities to simplify both the lifecycle of that application as well as enable best practices.

**:white_check_mark: Step-by-step directions**

1. Launch the [Amplify Console][amplify-console-console]
1. Underneath **Get Started**, you'll find a section titled **Host your web app". Click the **Get started** button within that section.
{{% notice note %}}
Depending on your console and account settings, you may not see the **Get Started** prompt. In this case, click on the **AWS Amplify** title link in the top of the left side navigation.
{{% /notice %}}
1. Select *AWS CodeCommit* and choose **Continue**
1. From the dropdown select the *Repository* and *Master Branch* created today and select **Next**
1. Amplify will detect that the application has an existing Amplify backend. Select **Create New Environment** and name it `prod` (all lowercase).

Now you need to create a new service role with the permissions to deploy the application backend.  

1. Click on **Create new role**, check that **Amplify** is selected and click **Next permissions**, click **Next: Tags**, click **Next: Review**.  
1. Give the Role a new name: `wildrydes-backend-role` and click **Create role**.  Close this tab and return to the AWS Amplify Build configure console.

1. Refresh the role list by clicking on the circular arrow button, and select the role created in the step above.
    
    ![Amplify Repository configuration](/images/amplifyConsole-setup-new1.png)
1. Select **Next**
1. On the **Review** page select **Save and deploy**
    
    This initial build and deploy process may take up to five minutes for Amplify Console to create the neccesary resources and to deploy your code.
    
    ![Amplify Deployment](/images/amplify-deploy-status.png)

Once completed, click the **site image** to launch your Wild Rydes site.

![Wild Rydes homepage screenshot](/images/wildrydes-homepage.png)

{{% notice note %}}
If you follow the link for **Master** you'll see various pieces of information about your website deployment, including sample renderings on various platforms:
{{% /notice %}}

![Amplify Client Renderings](/images/amplify-renderings.png)

[amplify-console]: https://aws.amazon.com/amplify/console/
[amplify-console-console]: https://console.aws.amazon.com/amplify/home
