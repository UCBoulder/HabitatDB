"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The code snippet imports two functions, `createTable` and `insertCheatUpload`, and then defines a `main` function. The `main` function calls `createTable` to create a table in a database and then inserts a new cheat
console.log(process.cwd());
const DB_Operations_1 = require("./DB-files/DB-Operations");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, DB_Operations_1.createTable)();
    const newObservation = {
        UserID: { S: 'someUserId' },
        ObservationID: { S: 'someCheatUploadID' },
        PhotoFileLocation: { S: 'someLocation' },
        Date: { S: new Date().toISOString() },
        LocationData: { S: 'someLocationInfo' },
        Notes: { S: 'someNotes' },
        VerificationRating: { N: '3' },
        Verifier: { S: 'someVerifier' },
    };
    yield (0, DB_Operations_1.insertObservation)(newObservation);
    yield (0, DB_Operations_1.viewAllObservations)();
});
main().catch((error) => console.error("Error:", error));
