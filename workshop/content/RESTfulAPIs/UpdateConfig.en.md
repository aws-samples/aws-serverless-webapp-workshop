+++
copyright = "Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved."
spdx-license-identifier = "CC-BY-SA-4.0"
title = "Update Config"
date = 2019-09-09T17:42:10+01:00
weight = 50
+++

### 5. Update the Website Config
Update the _/src/config.js_ file in your website deployment to include the invoke URL of the stage you just created. You should copy the invoke URL directly from the top of the stage editor page on the Amazon API Gateway console and paste it into the _\_config.api.invokeUrl_ key of your site's _/src/config.js_ file. Make sure when you update the config file it still contains the updates you made in the previous module for your Cognito user pool.

**:white_check_mark: Step-by-step directions**

1. On your Cloud9 development environment open `src/config.js`
1. Update the **invokeUrl** setting under the **api** key in the config.js file. Set the value to the **Invoke URL** for the deployment stage your created in the previous section.

An example of a complete `config.js` file is included below. 
    
**:warning: Note**: The actual URL in your file will be different.
```JavaScript
module.exports = {
    api: {
        invokeUrl: 'https://rfk14x9w40.execute-api.us-east-1.amazonaws.com/prod'
    }
}
```

1. Save the modified file making sure the filename is still `config.js`.
1. Commit the changes to your git repository:
    ```bash
    git add src/config.js 
    
    git commit -m "Configure API invokeURL"
    
    git push
    ```

[Amplify Console][amplify-console-console] should pick up the changes and begin building and deploying your web application. Watch it to verify the completion of the deployment.

## Implementation Validation

**:white_check_mark: Step-by-step directions**

1. Visit `/ride` under your website domain.
1. If you are redirected to the sign in page, sign in with the user you created in the previous module.
1. After the map has loaded, click anywhere on the map to set a pickup location.
1. Choose **Request Unicorn**. You should see a notification in the right sidebar that a unicorn is on its way and then see a unicorn icon fly to your pickup location.

[amplify-console-console]: https://console.aws.amazon.com/amplify/home