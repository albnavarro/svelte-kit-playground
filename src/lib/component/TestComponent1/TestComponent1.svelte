<script>
	import { screenSize, onDesktop, onMobile } from '$lib/store/currentScreenWidth';

	$: console.log($screenSize);
</script>

{#if $onMobile}
	mobile
{/if}

{#if $onDesktop}
	desktop
{/if}

<style></style>
