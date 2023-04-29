<script>
  import { toggle } from "$lib/store/store.js";
  import Modal from "$lib/components/Modal.svelte";
</script>

<button class="tambah" on:click={() => toggle.show("modalTambahUser")}
  >Tambah</button
>

<Modal>
  <div class="modal">
    <header><h2>Tambah User Baru</h2></header>
    <form action="" method="post">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        required
      />
      <select name="role" id="role">
        <option value="artis">Artis</option>
        <option value="admin">Admin</option>
      </select>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Simpan</button>
    </form>
  </div>
</Modal>

<style>
  button.tambah {
    background-color: var(--bg-white);
    height: 2rem;
    padding: 0 2rem;
    border-radius: var(--radius);
  }
  .modal header {
    padding: 1rem;
    background-color: var(--bg-dark);
    background-color: var(--bg-white);
  }
  .modal form {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    padding: 1rem;
  }

  .modal form input,
  .modal form select {
    background-color: var(--bg-white);
  }

  .modal form button {
    background-color: var(--bg-dark);
    color: var(--bg-white);
  }
</style>
