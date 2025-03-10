import { StoreTypes } from "./store-types";

/**
 * Wrapper around the browser's local storage with type-safe access.
 */
export class LocalStorage {

	static getItem<K extends keyof StoreTypes>(key: K, parse = true): StoreTypes[K] | null {
		const item = localStorage.getItem(key);
		return item ? (parse ? JSON.parse(item) : item) as StoreTypes[K] : null;
	}

	static setItem<K extends keyof StoreTypes>(key: K, value: StoreTypes[K], parse = true): void {
		const item = (parse ? JSON.stringify(value) : value) as string;
		localStorage.setItem(key, item);
	}

}
