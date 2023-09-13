<script lang="ts">

  let currentAmount = 0
</script>

<section class="w-full h-full mt-10">

  <div class="mx-auto max-w-5xl md:pb-16 pb-10 text-center">

    <h1 class="h2 font-bold font-heading leading-tighter tracking-tighter mb-4 dark:text-gray-200 md:text-6xl text-5xl underline">Donate</h1>
    
  </div>


  <div class="mx-auto max-w-3xl mb-2">
    <p class="text-muted text-xl dark:text-slate-300 mb-4 text-center">A lot of work is necessary to make this mission a reality.
      A donation is not only for our funding, but also our moral. It lets us know that this project is worth the effort.</p>

    <p class="italic opacity-75 text-center mb-8">Any amount is appreciated</p>
  </div>

  <div class="mx-auto items-center w-max">
    
    <div class="card variant-ghost-tertiary p-4">
      <form action="">
       


        <p class="h3 font-semibold text-center">Current Amount</p>
        <p class="h1 text-center font-bold">${currentAmount}</p>
     


        <div class="my-10 mx-auto flex justify-around">
          <button class="btn btn-lg variant-ghost-tertiary hover:scale-110" on:click={() => currentAmount = 1}><span>$1</span></button>
          <button class="btn btn-lg variant-ghost-tertiary hover:scale-110" on:click={() => currentAmount = 5}><span>$5</span></button>
          <button class="btn btn-lg variant-ghost-tertiary hover:scale-110" on:click={() => currentAmount = 10}><span>$10</span></button>
        </div>


        <p class="h5 italic text-right">Custom Amount</p>
        <div class="input-group h-10 input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim bg-surface-100 dark:bg-primary-500">$</div>
          <input class="px-1 bg-surface-100 dark:bg-primary-300" type="text" placeholder="5.00" />
          <div class="input-group-shim bg-surface-100 dark:bg-primary-500">USD</div>
          <!-- <select> -->
          <!--   <option>USD</option> -->
          <!--   <option>CAD</option> -->
          <!--   <option>EURO</option> -->
          <!-- </select> -->
        </div>

        <button class="btn btn-sm variant-filled-tertiary w-full mt-4" on:click={() => currentAmount = 0}>Reset</button>
        <button type="submit" class="btn variant-filled-primary w-full mt-4">Donate</button>
      </form> 
    </div> 

  </div>

</section>
