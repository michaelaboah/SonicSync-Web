<script lang="ts">
	import { onMount } from 'svelte';
  import type { PageData } from '../$types.js';

  export let data: PageData;


  let os: "Macos" | "Windows" | "Linux" | undefined 
  const urls: { url: string, name: string }[] = data.releases.assets.map((x) => { 
    return {url: x.browser_download_url, name: x.name };
  })
  let url: string | undefined = undefined 

  onMount(() => {
    if (navigator.userAgent.includes("Linux")) {
      os = "Linux"
      url = urls.find((x) => x.includes("AppImage"))
    } else if (navigator.userAgent.includes("Windows")) {
      os = "Windows"
      url = urls.find((x) => x.includes("exe"))
    } else {
      url = urls.find((x) => x.includes("dmg"))
    }
  })

</script>

<section class="w-full h-full mt-10">


  <div class="mx-4 md:mx-auto max-w-5xl md:pb-16 pb-10 text-center">

    <h1 class="h2 font-bold font-heading leading-tighter tracking-tighter mb-4 dark:text-gray-200 md:text-6xl text-5xl underline">Get It Here</h1>
    
  </div>


  <div class="mx-auto max-w-3xl">
    <p class="mx-8 text-muted text-xl dark:text-slate-300 mb-6 text-center">
      <span class="font-semibold">Sonic Sync </span>is available on all Platforms
    </p>
    <p class="italic text-sm text-center"><span class="font-semibold">Note: This product is in early access</span> </p>
  </div>

  <div class="mx-auto w-max mt-2">

      {#if os}
        <a href={url} class="btn btn-lg variant-filled-primary">Download for {os}</a>
      {:else}
        <div class="btn btn-lg variant-filled-primary">Not Available</div>
      {/if}
    
      <!-- <img class="mx-auto w-full rounded-md scale-75" src={EquipmentListImg} alt="Multiple Units of Equipment Listed on a Single Page"/> -->
  </div>


  <div class="mx-auto w-max mt-4">
    <p class="text-center font-bold">Literaly Everything Else</p>
    <dl class="dl">
      {#each urls as {name, url}} 
      <ol>
        <a href={url} class="badge variant-filled-primary">{name}</a>
      </ol>
      {/each}
    </dl>
  </div>


</section>



