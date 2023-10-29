import { writable } from 'svelte/store';

export const SM = 'SM';
export const MD = 'MD';
export const LG = 'LG';
export const XL = 'XL';
export const XXL = 'XXL';
export const XXXL = 'XXXL';

export const breakpoint = {
	SM: 320,
	MD: 768,
	LG: 1024,
	XL: 1280,
	XXL: 1440,
	XXXL: 1920
};

/** @type{import('svelte/store').Writable<( 'SM'|'MD'|'LG'|'XL'|'XXL'|'XXXL'|'' )>} */
export const screenSize = writable('');
