<script lang="ts">
  import { Router, Navigate, routeIsActive } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<a href="/">Home</a>
<Router {routes} />
