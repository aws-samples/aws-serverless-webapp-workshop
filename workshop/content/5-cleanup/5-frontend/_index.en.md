+++
title = "Web Application Cleanup"
weight = 50
+++

## Web Application Cleanup
Delete the AWS Amplify Console application and optionally the AWS CodeCommit or GitHub repository created:

#### For the Amplify Console web application:

1. Launch the [Amplify Console console page][amplify-console-console].
2. Select the application you launched today.
3. From **Actions** in the top right corner, select *Delete App*
4. Complete the application deletion process.

#### For the IAM Role:

1. Go to the [AWS IAM Console][iam-console]
2. Select **Roles** from the navigation menu.
3. Type `wildrydes-backend-role` into the filter box and select the role.
4. On the top right, click on the **Delete role** button.
5. Reenter role name and click **Delete** when prompted to confirm.

#### For the CodeCommit repository:

1. Open the [AWS CodeCommit console][codecommit-console]
2. Select the radio button next to the repository created today.
3. Select **Delete repository** from the upper right of the page.
4. Complete the repository deletion process.

[amplify-console-console]: https://console.aws.amazon.com/amplify/home
[iam-console]: https://console.aws.amazon.com/iam/home
[codecommit-console]: https://console.aws.amazon.com/codesuite/codecommit/repositories
