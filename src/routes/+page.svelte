<script lang="ts">
    //import {PublicClientApplication} from "@azure/msal-browser";
    import { msalConfig } from "../msalConfig";
    import { onMount } from "svelte";

    let msalClient;
    let tokenEncoded = "";
    let tokenDecoded = "";

    // onMount(async () => {
    //     msalClient = await new PublicClientApplication(msalConfig);

    // });

  
  

</script>

<h1>Token</h1>

<p>Encoded: {tokenEncoded}</p>
<p>Decoded: {tokenDecoded}</p>