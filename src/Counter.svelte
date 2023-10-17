<script>
	let count = 0;

	function handleCounter(e){
		console.log(e);
		count++;
	}
</script>

<main>
	<button on:click={()=>{count = count + 1}}>Count {count}</button>
	<button on:click={handleCounter}>Count {count}</button>
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