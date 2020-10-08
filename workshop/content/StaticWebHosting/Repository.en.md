+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Repository"
date = 2019-09-09T17:42:10+01:00
weight = 20
+++

### 2. Create the git repository

We will use [AWS CodeCommit][codecommit] to host your site's repository. CodeCommit is included in the [AWS Free Tier][codecommit-free-tier].

#### Using CodeCommit
The AWS Cloud9 development environment comes with AWS managed temporary credentials that are associated with your IAM user. You use these credentials with the AWS [git-remote-codecommit][git-remote-codecommit] tool (A Git Remote Helper that makes it easier to interact with AWS CodeCommit). This tool is installed in Cloud9 by default. You can install it on your own machine by running the following command in a terminal:

```bash
sudo pip install git-remote-codecommit
```
Next you need to create the repository and clone it to your Cloud9 environment:

```bash
aws codecommit create-repository \
  --repository-name wild-rydes
```

1.  Clone the template repository using `git clone --bare`.
    ```
    git clone --bare https://github.com/bls20AWS/wildRydesVue.git
    ```
1. `push --mirror` to your new repository.
    ```
    cd wildRydesVue.git
    git push --mirror codecommit://wild-rydes
    ```
1. Remove the temporary local repository you created in step2
    ```
    cd ..
    rm -rf wildRydesVue.git
    ```
1.  Clone the new repository to your Development environment
    ```
    git clone codecommit://wild-rydes
    ```
1.  Make sure you're on the `master` branch
    ```
    aws codecommit update-default-branch \
    --repository-name wild-rydes \
    --default-branch-name master

    cd wild-rydes
    git checkout master
    ```

[codecommit]: https://aws.amazon.com/codecommit/
[codecommit-free-tier]: https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&all-free-tier.q=CodeCommit&all-free-tier.q_operator=AND
[git-remote-codecommit]: https://github.com/aws/git-remote-codecommit
