// The code snippet imports two functions, `createTable` and `insertCheatUpload`, and then defines a `main` function. The `main` function calls `createTable` to create a table in a database and then inserts a new cheat
console.log(process.cwd());
import { createTable, insertCheatUpload } from './DB-files/DB-Operations';
import { CheatUpload } from './DB-files/DB-Operations/interfaces';

const main = async () => {
  await createTable();

  const newCheatUpload: CheatUpload = {
    UserID: { S: 'someUserId' },
    CheatUploadID: { S: 'someCheatUploadID' },
    S3FileLocationStored: { S: 'someLocation' },
    timeDate: { S: new Date().toISOString() },
    LocationInfo: { S: 'someLocationInfo' },  // Replace with actual value
    Notes: { S: 'someNotes' },
    HasBeenVerified: { BOOL: true },
    Verifier: { S: 'someVerifier' },
  };
  await insertCheatUpload(newCheatUpload);
};

main().catch((error) => console.error("Error:", error));
