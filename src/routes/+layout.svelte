<script lang="ts">
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/skeleton.css"
	import '../app.postcss';
  import { Toast, AppShell, modeCurrent, storePopup, Drawer, setInitialClassState, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { preferences, accessToken } from "$lib/stores/user"
  import { setContextClient, Client, cacheExchange, fetchExchange } from '@urql/svelte';
  import ArrowIcon from "~icons/simple-line-icons/arrow-up"
	import type { LayoutData } from "./$types";
	import { goto } from "$app/navigation";
	// import ContextLayer from "$lib/components/layers/ContextLayer.svelte";
	// import InvokeLayer from "$lib/components/layers/InvokeLayer.svelte";
	// import CollapsedSidebar from "$lib/components/bars/CollapsedSidebar.svelte";
	// import OpenSidebar from "$lib/components/bars/OpenSidebar.svelte";



  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
  export const client = new Client({
    url: 'https://api.sonic-sync.com/graphql',
    exchanges: [cacheExchange, fetchExchange],
    // fetchOptions
  });


  setContextClient(client)

  console.log(import.meta.env.VITE_API)

</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<Toast/>
<Drawer/>

<AppShell slotHeader="w-full flex" regionPage="variant-soft-surface">
  <svelte:fragment slot="header">
    <AppBar background="bg-primary-100-800-token w-full" >

      <svelte:fragment slot="lead">
        <a href="/" class="h2">Sonic Sync</a>
      </svelte:fragment>

      <svelte:fragment slot="trail">

        {#if $accessToken === ""}
          <a href="/login" class="btn rounded-xl variant-filled-secondary">Login</a>
          <a href="/register" class="btn rounded-xl variant-filled-tertiary">Register</a>
        {:else}
          <a href="/logout" class="btn rounded-xl variant-filled-tertiary">Logout</a> 
        {/if}

        <LightSwitch rounded="rounded-token"/>
      </svelte:fragment>


      <svelte:fragment slot="headline"></svelte:fragment>
    </AppBar>
  </svelte:fragment>

    <slot />

  <!-- <svelte:fragment slot="pageFooter"></svelte:fragment> -->
</AppShell>
