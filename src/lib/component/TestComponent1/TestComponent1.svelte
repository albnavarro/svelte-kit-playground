<script>
	import { XXL, XXXL, XL, LG, MD, SM, screenSize } from '$lib/store/currentScreenWidth';
</script>

{#if $screenSize === SM}
	mobile
{/if}

{#if $screenSize === MD}
	tablet
{/if}

{#if $screenSize === LG || $screenSize === XL || $screenSize === XXL || $screenSize === XXXL}
	desktop
{/if}

<style></style>
