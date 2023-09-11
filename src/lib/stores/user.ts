import { writable, get } from 'svelte/store';
import { modeCurrent, setModeCurrent } from "@skeletonlabs/skeleton" 
import { DEFAULT, type Preferences } from '$lib/@types/user';



export const preferences = writable<Preferences>(DEFAULT);
export const accessToken = writable('');
export const currentFile = writable<string>('');
