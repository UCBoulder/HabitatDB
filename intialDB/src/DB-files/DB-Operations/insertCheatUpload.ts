import { PutItemCommand, PutItemCommandInput, AttributeValue } from "@aws-sdk/client-dynamodb";
import { CheatUpload } from './interfaces';
import { client } from '../index.js';

export const insertCheatUpload = async (cheatUpload: CheatUpload) => {
  const params: PutItemCommandInput = {
    TableName: "CheatUploads",
    Item: cheatUpload as unknown as Record<string, AttributeValue>,
  };

  try {
    const command = new PutItemCommand(params);
    const response = await client.send(command);
    console.log("Cheat upload inserted successfully:", response);
    return response;
  } catch (error) {
    console.error("Error inserting cheat upload:", error);
    throw error;
  }
};
