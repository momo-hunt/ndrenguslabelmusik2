<script>
  import ListView from "./ListView.svelte";
  import TambahUser from "./TambahUser.svelte";
</script>

<h2>Admin / User</h2>

<TambahUser />

<article>
  <h3>Daftar User</h3>

  <ul>
    <ListView />
  </ul>
</article>

<style>
  article {
    margin: 0.5rem 1rem;
    background-color: var(--bg-white);
    border-radius: var(--radius);
  }
</style>
