<script>
  import { navigating } from "$app/stores";
  import Navbar from "./Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import { toggle } from "$lib/store/store.js";

  $: $navigating != null ? toggle.hide("sidebar") : null;
</script>

<Navbar />
<Sidebar />

<slot />
