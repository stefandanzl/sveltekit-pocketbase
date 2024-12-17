// @ts-nocheck
import { pb } from "./pocketbase/client";
import type { RecordModel } from "pocketbase";

export function getUrl(model: RecordModel | undefined){

    if (typeof model === undefined){
        return undefined
    }
    let record = model;
    let filename = model.avatar;
    return pb.files.getURL(record, filename)
}

