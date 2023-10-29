import { writable } from 'svelte/store';

const SM = 320;
const MD = 768;
const LG = 1024;
const XL = 1280;
const XXL = 1440;
const XXXL = 1920;

export const breakpoint = {
	SM,
	MD,
	LG,
	XL,
	XXL,
	XXXL
};

export const screenSize = writable('');
