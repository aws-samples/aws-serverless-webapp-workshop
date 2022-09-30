+++
title = "Deploy"
weight = 4
+++

## Deploy the site with AWS Amplify Console

Next you'll use the [AWS Amplify Console][amplify-console] to deploy the website you've just commited to git. The Amplify Console takes care of the work of setting up a place to store your static web application code and provides a number of helpful capabilities to simplify both the lifecycle of that application as well as enable best practices.

1. Launch the [Amplify Console][amplify-console-console]
2. Underneath **Get Started**, you’ll find a section for Amplify Hosting titled **Host your web app**. Click the **Get started** button within that section. If you are starting from the All apps page, choose **New app**, then **Host web app** in the upper right corner.

{{% notice note %}}
Depending on your console and account settings, you may not see the **Get Started** prompt. In this case, click on the **AWS Amplify** title link in the top of the left side navigation.
{{% /notice %}}

3. Connect a repository: Select **AWS CodeCommit** and choose **Continue**
4. From the drop down select the *Repository* and **master** Branch created today and select **Next**
5. Amplify will detect that the application has an existing Amplify backend. Select **Create New Environment** and name it **prod**.
     ![Amplify Build configuration](/images/amplify-build-config.png)

Now you need to create a new service role with the permissions to deploy the application backend.  

1. Click on **Create new role**, check that **Amplify** is selected and click **Next permissions**, click **Next: Tags**, click **Next: Review**.  
2. Give the Role a new name: `wildrydes-backend-role` and click **Create role**.
3. Search for `wildrydes-backend-role` from the search filter, and click the role name. 
4. Click **Attach policies** under the ** Add Permissions** tab, search for `AWSCodeCommitReadOnly` policy, click on the checkbox next to the policy name, and click **Attach Policy**.
5. Close this tab and return to the AWS Amplify Build configure console.
6. Refresh the role list by clicking on the circular arrow button, and select the role created in the step above.
    ![Amplify backend role](/images/amplify-backend-role.png)
7. Select **Next**
8. On the **Review** page select **Save and deploy**
    
    This initial build and deploy process may take up to five minutes for Amplify Console to create the neccesary resources and to deploy your code.
    ![Amplify Deployment](/images/amplify-deploy-status.png)

Once completed, click the **site URL** to launch your Wild Rydes site.

![Wild Rydes homepage screenshot](/images/wildrydes-homepage.png)

[amplify-console]: https://aws.amazon.com/amplify/console/
[amplify-console-console]: https://console.aws.amazon.com/amplify/home
