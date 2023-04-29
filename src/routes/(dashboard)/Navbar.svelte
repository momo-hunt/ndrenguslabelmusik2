<script>
  import { toggle } from "$lib/store/store.js";
</script>

<header>
  <button class="toggle" on:click={() => toggle.show("sidebar")}>0</button>
</header>

<style>
  * {
    border: var(--border);
  }

  header {
    height: 32px;
    display: flex;
    align-items: center;
    background-color: var(--bg-white);
  }

  header .toggle {
    align-self: normal;
    padding: 0 1rem;
  }
</style>
