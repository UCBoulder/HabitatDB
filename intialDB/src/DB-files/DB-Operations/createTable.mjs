import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { client } from "../index.js";

export const createTable = async () => {
  const command = new CreateTableCommand({
    TableName: "CheatUploads",
    AttributeDefinitions: [
      {
        AttributeName: "UserID",
        AttributeType: "S",
      },
      {
        AttributeName: "CheatUploadID",
        AttributeType: "S",
      },
      {
        AttributeName: "HasBeenVerified",
        AttributeType: "BOOL",
      },
    ],
    KeySchema: [
      {
        AttributeName: "UserID",
        KeyType: "HASH", // Partition Key
      },
      {
        AttributeName: "CheatUploadID",
        KeyType: "RANGE", // Sort Key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    GlobalSecondaryIndexes: [
      {
        IndexName: "VerificationIndex",
        KeySchema: [
          {
            AttributeName: "HasBeenVerified",
            KeyType: "HASH", // Partition Key
          },
          {
            AttributeName: "UserID",
            KeyType: "RANGE", // Sort Key
          },
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
  });

  try {
    const response = await client.send(command);
    console.log("Table created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating table:", error);
    throw error;
  }
};
