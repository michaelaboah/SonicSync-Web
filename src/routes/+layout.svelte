<script lang="ts">
	import '../app.postcss';
  import { Toast, AppShell, storePopup, Drawer, setInitialClassState, AppBar, LightSwitch, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { preferences, accessToken } from "$lib/stores/user"
  import { setContextClient, Client, cacheExchange, fetchExchange } from '@urql/svelte';
  import AppIcon from "$lib/assets/app-icon.png"
  import MenuIcon from "~icons/ri/menu-line"
  import CloseIcon from "~icons/ri/close-line"
	import { navigating, page } from '$app/stores';


  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
  export const client = new Client({
    url: 'https://api.sonic-sync.com/graphql',
    exchanges: [cacheExchange, fetchExchange],
    // fetchOptions
  });

  $: if($navigating?.from?.route.id === $page.route.id) mobileMenu = false 


  setContextClient(client)

  let mobileMenu = false

  console.log(import.meta.env.VITE_API)


</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<Toast/>
<Drawer/>
<AppShell slotHeader="sticky top-0 z-40 ease-in-out mx-auto w-full flex-none transition-opacity border-b" slotPageFooter="mx-auto w-full" regionPage="relative variant-filled-surface-500">
  <svelte:fragment slot="header">
    <AppBar background="w-full variant-filled-surface-500 flex" slotLead="w-12" slotTrail="!space-x-1">

      <svelte:fragment slot="lead">

        <a href="/" class="flex items-center">
          <img class="mr-2 h-10 md:h-12 md:w-12" src={AppIcon} alt="SonicSync App Icon"/>
          <span class="h3 md:h2 whitespace-nowrap">Sonic Sync</span>
        </a>

      </svelte:fragment>

      <div class="w-fit mx-auto flex items-center">
        <div>
<!-- -->

        </div>
      </div>

      <svelte:fragment slot="trail">

        <div class="hidden md:flex items-center space-x-2">

          <a href="/payments/donate" class="btn-sm rounded-3xl variant-ghost-secondary md:btn-md">Donate</a>
          {#if $accessToken === ""}
            <a href="/login" class="btn rounded-3xl variant-ringed-tertiary md:btn btn-sm">Login</a>
            <a href="/register" class="btn rounded-3xl variant-ringed-tertiary md:btn btn-sm">Register</a>
          {:else}
            <a href="/logout" class="btn rounded-3xl variant-ringed-tertiary md:btn btn-sm">Logout</a> 
          {/if}

          <LightSwitch rounded="rounded-token"/>

        </div>

        <div class="md:hidden flex items-center space-x-2">
            
          <LightSwitch rounded="rounded-token"/>
          <button class="btn btn-icon" on:click={() => mobileMenu = !mobileMenu}>
            
            {#if !mobileMenu}
              <span class="scale-125"><MenuIcon/></span>
            {:else}
              <span class="scale-125"><CloseIcon/></span>
            {/if}

          </button>
        </div>



      </svelte:fragment>

      <!-- <svelte:fragment slot="headline"></svelte:fragment> -->
    </AppBar>
  </svelte:fragment>
  
  {#if mobileMenu}

    <div class="modal w-full h-full z-50">
      <div class="flex items-center">
        <button></button> 
        <button></button> 
      </div> 
      <nav class="p-1 list-nav">
        <ul>
          <li>
            <a href="/payments/donate" class="">
              <span></span>
              <span class="h3 font-semibold">Donate</span>
            </a>
            <hr class="w-5/6 mx-auto">
          </li>
          {#if $accessToken === ""}

            <li>
              <a href="/login" class="">
                <span></span>
                <span class="h3 font-semibold">Sign In</span>
              </a>
            <hr class="w-5/6 mx-auto">
            </li>

            <li>
              <a href="/register" class="">
                <span></span>
                <span class="h3 font-semibold">Register</span>
              </a>
            <hr class="w-5/6 mx-auto">
            </li>
          {:else}
            <li>
              <a href="/logout">
                <span class="h3 font-semibold">Sign In</span>
              </a>
            <hr class="w-5/6 mx-auto">
            </li>
          {/if}
        </ul> 
      </nav>
      

    </div>

  {:else}
    <slot />
  {/if}

  <svelte:fragment slot="pageFooter">
    <div class="w-full">
      <hr class="opacity-60 w-full">
      <p class="italic opacity-50 mx-auto">This Site Is Under Construction</p>
    </div>
  </svelte:fragment>
</AppShell>
