<script lang="ts">
	import { goto } from "$app/navigation";
	import { accessToken } from "$lib/stores/user";
	import { redirect } from "@sveltejs/kit";

  let error: { kind: string, details: string } | null = null
  let creds = { email: "", password: "" };
  async function login() {
    const response = await fetch(import.meta.env.VITE_CLOUD_URL + '/login', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    });

    if (response.ok) {
      const {token}  = await response.json()
      accessToken.set(token)
      goto("/")
    } else {

      error = await response.json() 
      switch(error!.kind) {
        case "Invalid Email Format": {
          // TODO
          break;
        } 
        case "Username Already Exists": {
          // TODO
          break;
        }
        case "Invalid Credentials": {
          // TODO
          break;
        }
        case "Malformatted JSON": {
          // TODO
          break;
        }
        default: {
          console.error(error)
        }
      }
    }
  }
</script>


  <div class="card p-4 w-1/4">

    <header>
      <h2 class="h3 font-bold mb-2 mx-auto">Login</h2>
    </header>


    <form on:submit|preventDefault={login}>
      <label class="label">

        {#if !error} 
          <span>Email:</span>
          <input class="input" type="email" name="email" bind:value={creds.email} placeholder="joe@example.com" />
          <span>Password:</span>
          <input class="input" type="password" name="password" bind:value={creds.password} />
        {:else}
          <span>Email: </span>
          <input class="input input-error" type="email" name="email" bind:value={creds.email} placeholder="joe@example.com" />
          <span>Password:</span>
          <input class="input input-error" type="password" name="password" bind:value={creds.password} />
          <p>{JSON.stringify(error)}</p>
        {/if}

        <button type="submit" class="btn btn-sm variant-filled-primary">Login</button>

      </label>
    </form>
  </div>
