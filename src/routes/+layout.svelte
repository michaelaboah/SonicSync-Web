<script lang="ts">
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/skeleton.css"
	import '../app.postcss';
  import { Toast, AppShell, modeCurrent, storePopup, Drawer, setInitialClassState, AppBar, LightSwitch, AppRail, AppRailTile, AppRailAnchor,  } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  // import { preferences } from "$lib/stores/user"
  import { setContextClient, Client, cacheExchange, fetchExchange } from '@urql/svelte';
  import ArrowIcon from "~icons/simple-line-icons/arrow-up"
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

  // $preferences.ui.darkMode = $modeCurrent

  setContextClient(client)


</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<Toast/>
<Drawer/>

<AppShell slotSidebarLeft="max-w-48 variant-ringed-surface rounded-sm relative" slotHeader="w-full flex" regionPage="variant-soft-surface">
  <svelte:fragment slot="header">
    <AppBar background="bg-primary-100-800-token h-16 w-full " >

      <div class="flex justify-between">
        <h1>Sonic Sync</h1>
        <LightSwitch rounded="true" />
      </div>

    </AppBar>
  </svelte:fragment>

  <svelte:fragment slot="pageFooter"></svelte:fragment>

  <div class="w-full h-full">
    <slot />
  </div>
</AppShell>
