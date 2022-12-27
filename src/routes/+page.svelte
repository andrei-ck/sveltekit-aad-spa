<script lang="ts">
    import {isUserAuthenticated, tokenApp} from "../stores"
    import {AuthModule} from "../authModule"
    import { onMount } from "svelte";


    let isAuthenticated = false;
    isUserAuthenticated.subscribe((value) => {
        isAuthenticated = value;
    });

    let authModule:AuthModule;
    let tokenEncoded = "";
    let tokenDecoded = "";

    onMount(async () => {
        // Instantiate Public Client Application
        authModule = new AuthModule();
        console.dir(authModule);
        
        // Handle Redirect APIs - https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
        authModule.loadAuthModule();

        // If the user is unauthenticated, redirect to login
        if(!isAuthenticated) {
            let resp = await authModule.login("loginRedirect");
            
        }
    });

  
  

</script>

<h1>isAuthenticated: {isAuthenticated}</h1>

<h1>Token</h1>

<p>Encoded: {tokenEncoded}</p>
<p>Decoded: {tokenDecoded}</p> 