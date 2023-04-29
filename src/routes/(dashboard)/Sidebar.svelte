<script>
  import { fly } from "svelte/transition";
  import { toggle } from "$lib/store/store.js";
</script>

{#if $toggle.sidebar}
  <aside>
    <nav in:fly={{ x: -100 }} out:fly={{ x: -100 }}>
      <header><h3>Ndrengus Label Musik</h3></header>

      <div>
        <h5>Menu</h5>
        <a href="/dashboard" class="active">Dashboard</a>
        <a href="/penarikan">Penarikan</a>
        <a href="/profile">Profile</a>
      </div>

      <div>
        <h5>Admin</h5>
        <a href="/admin/user">User</a>
      </div>

      <div class="logout"><a href="/logout">Logout</a></div>
    </nav>

    <button class="close" on:click={() => toggle.hide("sidebar")} />
  </aside>
{/if}

<style>
  /* * {
    border: var(--border);
  } */

  aside {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
  }

  aside nav {
    position: relative;
    width: 60%;
    background-color: var(--bg-white);
  }

  aside button.close {
    width: 40%;
  }

  aside nav header {
    padding: 2rem 1rem;
    border-bottom: 1px solid gray;
    text-align: center;
  }

  aside nav div h5 {
    margin: 0.5rem 0 0 0.5em;
  }

  aside nav div a {
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-weight: 600;
  }

  aside nav div a:hover,
  aside nav div a.active {
    background-color: var(--bg-light);
  }

  aside nav .logout {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 4rem;
    display: flex;
    justify-content: center;
  }

  aside nav .logout a {
    background-color: red;
    color: white;
    padding: 1rem 2rem;
    border-radius: 2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
</style>
