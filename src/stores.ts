import { writable } from "svelte/store";

export const isUserAuthenticated = writable(false);
export const username = writable("");
export const tokenApp = writable("");
