<script lang="ts">
	import { goto } from "$app/navigation";


  let creds = { email: "", username: "", password: "" };
  let error: { kind: string, details: string } | null = null

  async function register() {
    const response = await fetch('http://localhost:8080/register', {
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
  <div class="card p-4 w-1/4">

    <header>
      <h2 class="h3 font-bold"> Register: </h2>
    </header>


    <form on:submit|preventDefault={register}>
      <label class="label">

        {#if !error}
          <span>Email</span>
          <input class="input" type="email" name="email" placeholder="joe@example.com" bind:value={creds.email} />

          <span>Username</span>
          <input class="input" type="text" name="username" placeholder="joe@example.com" bind:value={creds.username}/>

          <span>Password</span>
          <input class="input" type="password" name="password" bind:value={creds.password}/>
        {:else}
          <span>Email</span>
          <input class="input" type="email" name="email" placeholder="joe@example.com" bind:value={creds.email} />

          <span>Username</span>
          <input class="input" type="text" name="username" placeholder="joe@example.com" bind:value={creds.username}/>

          <span>Password</span>
          <input class="input" type="password" name="password" bind:value={creds.password}/>
          <p>{error.kind}</p>
        {/if}

        <button type="submit" class="btn btn-sm variant-filled-primary w-full">Register</button>
      </label>
    </form>
  </div>
<!-- </div> -->
