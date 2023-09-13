<script lang="ts">
	import '../app.postcss';
  import { Toast, AppShell, storePopup, Drawer, setInitialClassState, AppBar, LightSwitch, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { preferences, accessToken } from "$lib/stores/user"
  import { setContextClient, Client, cacheExchange, fetchExchange } from '@urql/svelte';
  import AppIcon from "$lib/assets/app-icon.png"

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


  const accorLinks = [
    { link: "",  },
    // {},
    // {},
  ]

</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<Toast/>
<Drawer/>
<!-- variant-filled-surface-500 -->
<AppShell slotHeader="sticky top-0 z-40 ease-in-out mx-auto w-full flex-none transition-opacity border-b" slotPageFooter="flex items-center mx-auto" regionPage="relative variant-filled-surface-500">
  <svelte:fragment slot="header">
    <AppBar background="w-full variant-filled-surface-500" >

      <svelte:fragment slot="lead">

        <div class="flex items-center h-12">
          <img class="mr-2 h-12" src={AppIcon} alt="SonicSync App Icon"/>
          <a href="/" class="h2 whitespace-nowrap">Sonic Sync</a>
        </div>

      </svelte:fragment>

      <div class="w-fit mx-auto flex items-center">
        <div>
<!-- -->

        </div>
      </div>

      <svelte:fragment slot="trail">

        <a href="/payments/donate" class="btn rounded-3xl variant-ghost-secondary">Donate</a>
        {#if $accessToken === ""}
          <a href="/login" class="btn rounded-3xl variant-ringed-tertiary">Login</a>
          <a href="/register" class="btn rounded-3xl variant-ringed-tertiary">Register</a>
        {:else}
          <a href="/logout" class="btn rounded-3xl variant-ringed-tertiary">Logout</a> 
        {/if}

        <LightSwitch rounded="rounded-token"/>
      </svelte:fragment>

      <!-- <svelte:fragment slot="headline"></svelte:fragment> -->
    </AppBar>
  </svelte:fragment>

    <slot />

  <svelte:fragment slot="pageFooter">
    <div class="">
      <p class="italic">This Site Is Under Construction</p>
    </div>
  </svelte:fragment>
</AppShell>
