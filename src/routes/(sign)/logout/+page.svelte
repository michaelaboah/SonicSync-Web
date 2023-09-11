<script lang="ts">
	import { goto } from "$app/navigation";
	import { accessToken } from "$lib/stores/user";


  async function logout() {
    const response = await fetch(import.meta.env.VITE_CLOUD_URL + '/secure/logout', { credentials: "include" });
      
    if (response.ok) {
      $accessToken = ""
      goto("/")
    } else {
      const error = await response.json() 
    }
  }
</script>

<!-- <div class=""> -->
  <div class="card p-4 w-1/4">

    <header>
      <h2 class="h3 font-bold"> Register: </h2>
    </header>


    <form on:submit|preventDefault={logout}>
      <label class="label">
      
        <p>Are you sure you want to sign out?</p>
        <button type="submit" class="btn variant-filled-primary w-full">Sign Out</button>
      </label>
    </form>
  </div>
<!-- </div> -->
