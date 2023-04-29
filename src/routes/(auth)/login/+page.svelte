<script>
  import { toast } from "$lib/store/store.js";
  import { enhance } from "$app/forms";
  import ButtonLoader from "$lib/components/ButtonLoader.svelte";
  import { goto } from "$app/navigation";

  let submitted = false;
</script>

<header><h1>LOGIN</h1></header>

<form
  action=""
  method="post"
  use:enhance={() => {
    submitted = true;
    toast.proses(true, "Proses login..");
    //
    return async ({ result }) => {
      submitted = false;
      toast.proses(false);
      console.log("login+page => result ", result);

      if (result.status != 200) return toast.info("error", "Gagal login!");
      toast.info("success", "Berhasil login!");
      return setTimeout(() => goto("/dashboard"), 3000);
    };
  }}
>
  <input
    type="text"
    name="username"
    id="username"
    placeholder="Username"
    required
  />
  <input
    type="password"
    name="password"
    id="password"
    placeholder="Password"
    required
  />

  <button type="submit">
    <ButtonLoader show={submitted} />
    {submitted ? "" : "Login"}
  </button>
</form>

<style>
  /* * {
    border: var(--border);
  } */

  header {
    margin-top: 4rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  form input {
    background-color: white;
  }

  button[type="submit"] {
    background-color: lightgray;
  }
</style>
