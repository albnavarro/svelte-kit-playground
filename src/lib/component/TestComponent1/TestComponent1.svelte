<script>
	import { XXL, XXXL, XL, LG, MD, SM, screenSize } from '$lib/store/currentScreenWidth';

	$: console.log($screenSize);
</script>

{#if $screenSize === SM}
	{SM}
{/if}

{#if $screenSize === MD}
	{MD}
{/if}

{#if $screenSize === LG || $screenSize === XL || $screenSize === XXL || $screenSize === XXXL}
	{XL}
{/if}

<style></style>
