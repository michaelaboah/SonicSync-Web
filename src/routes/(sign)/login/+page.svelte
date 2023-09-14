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


  <div class="card p-4 m-4 md:m-24 h-2/5 md:h-fit">

    <header>
      <h2 class="h3 font-bold mb-2 text-center mx-auto">Login</h2>
    </header>


    <form on:submit|preventDefault={login} class="relative h-full md:static">
      <label class="label">

        {#if !error} 
          <span>Email:</span>
          <input class="input pr-2 text-right h-10" type="email" name="email" bind:value={creds.email} placeholder="joe@example.com" />
          <span>Password:</span>
          <input class="input pr-2 text-right h-10" type="password" name="password" bind:value={creds.password} />
        {:else}
          <span>Email: </span>
          <input class="input input-error pr-2 text-right h-10" type="email" name="email" bind:value={creds.email} placeholder="joe@example.com" />
          <span>Password:</span>
          <input class="input input-error pr-2 text-right h-10" type="password" name="password" bind:value={creds.password} />
          <p>{JSON.stringify(error)}</p>
        {/if}

        <button type="submit" class="btn w-full absolute bottom-10 left-0 variant-filled-primary md:static !mt-4">Login</button>

      </label>
    </form>
  </div>
