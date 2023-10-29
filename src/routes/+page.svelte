<script>
	import TestComponent1 from '$lib/component/TestComponent1/TestComponent1.svelte';
	import { breakpoint, screenSize } from '$lib/store/currentScreenWidth';
	import { debounce } from '$lib/utils/debounce';
	import { onMount } from 'svelte';

	/** @type{number} */
	let screenWidth;

	/** @type{[ string,number ][]} */
	const mq = Object.entries(breakpoint);

	/** @param {number} value */
	const getBreackpoint = (value) => {
		const currentBreackpoint = mq.reduce((previous, current) => {
			const [key, currentValue] = current;
			return value >= currentValue ? key : previous;
		}, '');

		screenSize.set(currentBreackpoint);
	};

	const onResize = debounce((/** @type {number} value */ value) => {
		getBreackpoint(value);
	});

	$: onResize(screenWidth);

	onMount(() => {
		getBreackpoint(window?.innerWidth);
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />
<TestComponent1 />

<style>
</style>
