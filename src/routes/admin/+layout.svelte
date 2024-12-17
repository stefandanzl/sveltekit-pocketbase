<script lang="ts">
	import type { LayoutData } from './$types';
    import { getUrl } from '$lib/utils';

	let { data }: { data: LayoutData } = $props();

    // let text = JSON.stringify(structuredClone(data.user.pb))
    let text = "TTTTTA"

    let link = getUrl(data.user)
</script>



        <h2>More posts</h2>
        {#if data.user}
        <h1>{data.user.name}</h1>
        {/if}
    
        {#if link}
        <img src="{link}" alt="avatar">
        {/if}

        {data.user?.verified}


