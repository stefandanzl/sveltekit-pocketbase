// import type { AuthRecord } from 'pocketbase';
import type PocketBase, {  RecordModel } from "pocketbase";

declare global {
	namespace App {
		interface Locals {
			pb: Pocketbase;
			user: RecordModel | undefined;
		}
	}
}

export {};
