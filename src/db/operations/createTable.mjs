import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { client } from '../index.js';

export const createTable = async () => {
  const command = new CreateTableCommand({
    TableName: "EspressoDrinks",
    AttributeDefinitions: [
      {
        AttributeName: "DrinkName",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "DrinkName",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });

  const response = await client.send(command);
  console.log(response);
  return response;
};
