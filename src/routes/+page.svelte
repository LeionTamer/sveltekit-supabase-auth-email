<script lang='ts'>
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
  import type { PageData } from './$types'

  export let data: PageData

	const submitLogout: SubmitFunction = async ({cancel}) => {
		const {error} = await supabaseClient.auth.signOut()

		if (error) {
			console.error(error)
		}

		// This will cancel the form submission
		cancel()
	}
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
	<p> Welcome, {data.session.user.email}</p>
	<!-- use:enhance -> perform form actions without javascript -->
	<form action="/logout" method="POST" use:enhance={submitLogout}> 
	<button type='submit' class='btn btn-primary'>Log out</button>
	</form>
	{:else}
	<p>Let's learn how to register and login users!</p>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>
	</div>
	{/if}
</main>