<script>
	export let name;
	const greet = "Hello"
	const channel = "<b>Testing</b>"
	const id = "heading"
	const disabled = true
	const status = 'success'
</script>

<main>
	<h1>{greet} {name}!</h1>
	<p>{channel}</p>
	<p>{@html channel}</p>
	<!-- <h1 id={id}>Heading</h1> -->
	<!-- or better way -->
	<h1 {id}>Heading</h1>
	<h3 class="underline">Underlined text</h3>
	<h3 class={status}>Status</h3>
	<!-- <button disabled={disabled}>Click</button> -->
	<button {disabled}>Click</button>
</main>

<style>
	.underline{
		text-decoration: underline;
	}

	.danger{
		color: red;
	}

	.success{
		color: olivedrab;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>