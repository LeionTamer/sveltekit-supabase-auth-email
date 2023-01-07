<script lang='ts'>
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
  import Header from '@components/layout/header.svelte'
  import Footer from '@components/layout/footer.svelte'
  import '../app.css'
  import {title} from '@stores/titleStore'

  onMount(() => {
    console.log("I was mounted")
    const { data: {subscription}} = supabaseClient.auth.onAuthStateChange(() => {
      console.info('Auth InvalidateAll')
      // https://kit.svelte.dev/docs/modules#$app-navigation
      invalidateAll() // this will monitor the changes in supabase authentication url
    })

    return () => {
      // on cleanup, unsubscribe from supabase client
      subscription.unsubscribe()
    }
  })
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<Header />
<slot/>
<Footer />

