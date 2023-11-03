import { createTable } from '/Users/joelcarlson/Library/Mobile Documents/com~apple~CloudDocs/Fall-2023/Senior_Project_APP/HabitatDB/intialDB/src/DB-files/DB-Operations/createTable.mjs';
import { insertCheatUpload } from './HabitatDB/intialDB/src/DB-files/DB-Operations/insertCheatUpload.mjs';


const main = async () => {
  await createTable();

  const newCheatUpload = {
    UserID: "user-1",
    CheatUploadID: "upload-1",
    S3FileLocationStored: "path/to/file",
    timeDate: "2023-10-25T09:00:00Z",
    LocationInfo: "New York",
    Notes: "Some notes about the cheat upload",
    HasBeenVerified: false,
    Verifier: "verifier-1",
  };

  await insertCheatUpload(newCheatUpload);
};

main().catch((error) => console.error("Error:", error));
