<script lang="ts">
  import { Router, Navigate, routeIsActive } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<Navigate to="/">Home</Navigate>
<Router {routes} />
