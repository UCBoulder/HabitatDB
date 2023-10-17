import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from '../index.js';

export const insertItem = async (item) => {
  const params = {
    TableName: "EspressoDrinks",
    Item: item
  };

  const command = new PutItemCommand(params);

  try {
    const response = await client.send(command);
    console.log("Item inserted successfully:", response);
    return response;
  } catch (error) {
    console.error("Error inserting item:", error);
    throw error;
  }
};
