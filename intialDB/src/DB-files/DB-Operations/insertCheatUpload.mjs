import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from '../index.js';

export const insertCheatUpload = async (cheatUpload) => {
  const params = {
    TableName: "CheatUploads",
    Item: cheatUpload,
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


