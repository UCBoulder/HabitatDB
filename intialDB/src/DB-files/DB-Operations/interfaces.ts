import { AttributeValue } from "@aws-sdk/client-dynamodb";

export interface CheatUpload {
    UserID: AttributeValue;
    CheatUploadID: AttributeValue;
    S3FileLocationStored: AttributeValue;
    timeDate: AttributeValue;
    LocationInfo: AttributeValue;
    Notes: AttributeValue;
    HasBeenVerified: AttributeValue;
    Verifier: AttributeValue;
}
