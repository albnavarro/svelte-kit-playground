import { writable } from 'svelte/store';

export const SM = 'SM';
export const MD = 'MD';
export const LG = 'LG';
export const XL = 'XL';
export const XXL = 'XXL';
export const XXXL = 'XXXL';

export const isDesktop = [LG, XL, XXL, XXXL];
export const isMobile = [SM, MD];

export const breakpoint = {
	SM: 320,
	MD: 768,
	LG: 1024,
	XL: 1280,
	XXL: 1440,
	XXXL: 1920
};

/** @type{import('svelte/store').Writable<string>} */
export const screenSize = writable('');

/** @type{import('svelte/store').Writable<boolean>} */
export const onDesktop = writable(false);

/** @type{import('svelte/store').Writable<boolean>} */
export const onMobile = writable(false);
