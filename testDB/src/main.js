import { createTable } from './db/operations/createTable.mjs';
import { insertItem } from './db/operations/insertItem.mjs';

const main = async () => {
  // Call the createTable function
  const tableCreationResult = await createTable();
  console.log("Table creation result:", tableCreationResult);

  // Once the table is created successfully, you can insert an item
  const item = {
    "DrinkName": { S: "Latte" },
  };

  const insertionResult = await insertItem(item);
  console.log("Insertion result:", insertionResult);
};

// Invoke main function
main();
