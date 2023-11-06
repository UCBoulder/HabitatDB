// The code snippet imports two functions, `createTable` and `insertCheatUpload`, and then defines a `main` function. The `main` function calls `createTable` to create a table in a database and then inserts a new cheat
console.log(process.cwd());
import { createTable, insertObservation } from './DB-files/DB-Operations';
import { Observation} from './DB-files/DB-Operations/interfaces';

const main = async () => {
  await createTable();

  const newObservation: Observation = {
    UserID: { S: 'someUserId' },
    ObservationID: { S: 'someCheatUploadID' },
    PhotoFileLocation: { S: 'someLocation' },
    Date: { S: new Date().toISOString() },
    LocationData: { S: 'someLocationInfo' },
    Notes: { S: 'someNotes' },
    VerificationRating: {N : '3' },
    Verifier: { S: 'someVerifier' },
  };
  
  await insertObservation(newObservation);
};

main().catch((error) => console.error("Error:", error));
