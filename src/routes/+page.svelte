<script lang="ts">
    import {isUserAuthenticated, tokenApp} from "../stores"
    import {AuthModule} from "../authModule"
    import { onMount } from "svelte";


    let isAuthenticated = false;
    isUserAuthenticated.subscribe((value) => {
        isAuthenticated = value;
    });
    let appToken = "";
    tokenApp.subscribe((value) => {
        appToken = value;
    })    

    let authModule:AuthModule;
    let tokenEncoded = "";
    let tokenDecoded = "";

    onMount(async () => {
        authModule = new AuthModule();
        console.log(`INFO - Auth Module instantiated`);
        console.dir(authModule);
        authModule.loadAuthModule();

        if(!isAuthenticated) {
            let resp = await authModule.login("loginRedirect");
            console.dir(resp);
        }
    });

  
  

</script>

<h1>isAuthenticated: {isAuthenticated}</h1>

<h1>Token</h1>

<p>Encoded: {tokenEncoded}</p>
<p>Decoded: {tokenDecoded}</p>