+++
title = "Modify"
weight = 5
+++

## Modify the website
The AWS Amplify Console will rebuild and redeploy the app when it detects changes to the connected repository. Make a change to the main page to test out this process.

1. From your Cloud9 environment open the ```index.html``` file in the `/wild-rydes/public/` directory of the repository.
1. Modify the title line:
    ```
      <title>wildrydes</title>
    ```
    So that it says:
    ```
      <title>Wild Rydes - Rydes of the Future!</title>
    ```
    Save the file
1. Commit again to your git repository the changes:
    ```
    git add . 

    git commit -m "updated title"
    
    git push
   ```
    Amplify Console will begin to build the site again soon after it notices the update to the repository. This happens pretty quickly! Head back to the [Amplify Console][amplify-console] to watch the process. 

1. Once completed, re-open the Wild Rydes site and notice the title change.
    
    ![title updated](/images/title-update.png)

[amplify-console]: https://console.aws.amazon.com/amplify/home


### Recap

AWS Amplify Console makes it easy to deploy static websites with continuous integration and continuous delivery. It is capable of building more complicated JavaScript framework-based applications and shows you a preview of your application as it renders on popular mobile platforms.

In this module, you've created a static website which will be the base for our Wild Rydes business.

### Next

Proceed to the next module, [User Management][user-management], 
where you'll configure Amazon Cognito User Pool with the AWS Amplify CLI to manage our application's users.

[user-management]: /2-usermanagement