<script lang="ts">
	import { goto } from "$app/navigation";


  let creds = { email: "", username: "", password: "" };
  let error: { kind: string, details: string } | null = null

  async function register() {
    const response = await fetch(import.meta.env.VITE_CLOUD_URL + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    });

    if (response.ok) {
      goto("/login")
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

          break;
        }
        default: {
          console.error(error)
        }
      }
    }
  }
</script>

<!-- <div class=""> -->
  <div class="card p-4 m-4 h-1/2">

    <header>
      <h2 class="h3 font-bold mb-2 text-center mx-auto"> Register </h2>
    </header>


    <form on:submit|preventDefault={register} class="relative h-full">
      <label class="label">

        {#if !error}
          <span class="ml-2">Email:</span>
          <input class="input pr-2 text-right h-10" type="email" name="email" placeholder="joe@example.com" bind:value={creds.email} />

          <span class="ml-2">Username:</span>
          <input class="input pr-2 text-right h-10" type="text" name="username" placeholder="joe@example.com" bind:value={creds.username}/>

          <span class="ml-2">Password:</span>
          <input class="input pr-2 text-right h-10" type="password" name="password" bind:value={creds.password}/>
        {:else}
          <span class="ml-2">Email:</span>
          <input class="input pr-2 text-right h-10" type="email" name="email" placeholder="joe@example.com" bind:value={creds.email} />

          <span class="ml-2">Username:</span>
          <input class="input pr-2 text-right h-10" type="text" name="username" placeholder="joe@example.com" bind:value={creds.username}/>

          <span class="ml-2">Password:</span>
          <input class="input pr-2 text-right h-10" type="password" name="password" placeholder="really bad passwords" bind:value={creds.password}/>
          <p>{error.kind}</p>
        {/if}

        <button type="submit" class="btn btn-sm w-full absolute bottom-10 left-0 variant-filled-primary">Register</button>
      </label>
    </form>
  </div>
<!-- </div> -->
