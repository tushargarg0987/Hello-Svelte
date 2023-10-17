<script>
	const formValues = {
        name: '',
        summary: '',
        country: '',
        jobLocation: [],
        remoteWork: false,
        skills: []
    }
</script>

<main>
    <div>
        <pre>
            {JSON.stringify(formValues,null,2)}
        </pre>
    </div>
	<form>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={formValues.name}/>
        </div>
        <div>
            <label for="summary">Summary</label>
            <input type="text" id="summary" bind:value={formValues.summary}/>
        </div>
        <div>
            <label for="country">Name</label>
            <select id="country" bind:value={formValues.country}>
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="Indi">Indi</option>
            </select>
        </div>
        <div>
            <label for="jobLocation">Job Location</label>
            <select id="jobLocation" bind:value={formValues.jobLocation} multiple>
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="Indi">Indi</option>
            </select>
        </div>
        <div>
            <input type="checkbox" id="remoteWork" bind:checked={formValues.remoteWork} />
            <label for="remoteWork">Open to remote work ?</label>
        </div>
        <div>
            <input type="checkbox" id="html" bind:group={formValues.skills} value="html" />
            <label for="html">HTML</label>
            <input type="checkbox" id="css" bind:group={formValues.skills} value="css" />
            <label for="css">CSS</label>
            <input type="checkbox" id="js" bind:group={formValues.skills} value="js" />
            <label for="js">JS</label>
        </div>
    </form>
</main>

<style>
	

	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>