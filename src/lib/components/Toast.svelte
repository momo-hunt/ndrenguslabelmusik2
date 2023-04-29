<script>
  import { fly } from "svelte/transition";
  import { toast } from "$lib/store/store.js";

  //   $: console.log($toast);
</script>

{#if Object.keys($toast).length > 0}
  <main
    in:fly={{ y: -100 }}
    out:fly={{ y: 25 }}
    class:success={$toast.type == "success"}
    class:error={$toast.type == "error"}
  >
    <section>
      <h4>{$toast?.title}</h4>
    </section>
  </main>
{/if}

<style>
  main {
    position: absolute;
    z-index: 999;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  main.success section {
    background-color: green;
  }

  main.error section {
    background-color: red;
  }

  main section {
    background-color: rgb(90, 90, 90);
    color: white;
    padding: 0 1rem;
    height: 2rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
  }
</style>
