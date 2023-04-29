<script>
  import { fly, fade } from "svelte/transition";
  import { toggle } from "$lib/store/store.js";
</script>

{#if $toggle.modalTambahUser}
  <section transition:fade>
    <button class="close" on:click={() => toggle.hide("modalTambahUser")} />
    <article
      in:fly={{ y: -100, opacity: 1 }}
      out:fly={{ y: 100, opacity: 0.2 }}
    >
      <slot />
    </article>
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  section button.close {
    cursor: auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  section article {
    position: relative;
    top: 4rem;
    margin: 0 2rem;
    background-color: var(--bg-light);
    border-radius: var(--radius);
    overflow-x: hidden;
  }
</style>
