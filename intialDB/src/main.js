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
const createTable_mjs_1 = require("./HabitatDB/intialDB/src/DB-files/DB-Operations/createTable.mjs");
const insertCheatUpload_mjs_1 = require("./HabitatDB/intialDB/src/DB-files/DB-Operations/insertCheatUpload.mjs");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, createTable_mjs_1.createTable)();
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
    yield (0, insertCheatUpload_mjs_1.insertCheatUpload)(newCheatUpload);
});
main().catch((error) => console.error("Error:", error));
