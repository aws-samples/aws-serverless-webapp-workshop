+++
title = "DynamoDB"
weight = 2
+++

## Create an Amazon DynamoDB Table

Use the [Amazon DynamoDB Console][dynamodb-console] to create a new [DynamoDB][dynamodb] table. Call your table `Rides` and give it a partition key called `RideId` with type String. The table name and partition key are case sensitive. Make sure you use the exact IDs provided. Use the defaults for all other settings.

After you've created the table, record the ARN for use in the next step.

1. Go to the [Amazon DynamoDB Console][dynamodb-console]
2. Choose **Create table**.
3. Enter `Rides` for the **Table name**. This field is case sensitive.
4. Enter `RideId` for the **Partition key** and select **String** for the key type. This field is case sensitive.
5. Choose the **Default settings** button for Table settings and choose **Create table**. 
    ![Create table screenshot](/images/ddb-create-table.png)
6. Once the table is Active, Click on “Rides” to open the table settings and under Overview > General information > Additional info section, you will find the **ARN** of the table. Record this ARN as you will use this in the next section.

[dynamodb]: https://aws.amazon.com/dynamodb
[dynamodb-console]: https://console.aws.amazon.com/dynamodb/home
