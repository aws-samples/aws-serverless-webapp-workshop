+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Repository"
date = 2021-01-13T15:09:39+00:00
weight = 20
+++

### 2. Create the git repository

We will use [AWS CodeCommit][codecommit] to host your site's repository. CodeCommit is included in the [AWS Free Tier][codecommit-free-tier].

#### CodeCommit helper

The AWS Cloud9 development environment comes with AWS managed temporary credentials that are associated with your IAM user. You use these credentials with the AWS [git-remote-codecommit][git-remote-codecommit] tool (A Git Remote Helper that makes it easier to interact with AWS CodeCommit). This tool is installed in Cloud9 by default. You can install it on your own machine by following the [installation instructions][codecommit-helper-installation].

#### Setting up your CodeCommit repository

1.  First, create a new CodeCommit repository:
    ```
    aws codecommit create-repository \
      --repository-name wild-rydes
    ```
1.  Clone the existing (not new) workshop repository from GitHub:
    ```
    git clone https://github.com/aws-samples/aws-serverless-webapp-workshop.git
    ```
1.  Change into the workshop repository directory:
    ```
    cd aws-serverless-webapp-workshop
    ```
1.  Split out the _WildRydesVue_ code into its own branch:
    ```
    sudo yum install git-subtree -y
    git subtree split -P resources/code/WildRydesVue -b WildRydesVue
    ```
    **Note:** You may get the error message `git: 'subtree' is not a git command` on Cloud9 and Amazon Linux 2. Run `sudo yum install git-subtree` as a workaround, as this is not installed by default with `git` in these environments.
1.  Create a new directory for your CodeCommit repo:
    ```
    mkdir ../wild-rydes && cd ../wild-rydes
    ```
1.  Initialize a new git repository:
    ```
    git init
    ```
1.  Pull the _WildRydesVue_ branch into your new repo:
    ```
    git pull ../aws-serverless-webapp-workshop WildRydesVue
    ```
1.  Add your CodeCommit repository as a remote:
    ```
    git remote add origin codecommit://wild-rydes
    ```
1.  Push the code to your new CodeCommit repository:
    ```
    git push -u origin master
    ```
1.  Remove the temporary local repository you created in step 2:
    ```
    rm -rf ../aws-serverless-webapp-workshop
    ```

[codecommit]: https://aws.amazon.com/codecommit/
[codecommit-free-tier]: https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&all-free-tier.q=CodeCommit&all-free-tier.q_operator=AND
[codecommit-helper-installation]: https://github.com/aws/git-remote-codecommit#set-up
[git-remote-codecommit]: https://github.com/aws/git-remote-codecommit
