import App from './App.svelte';
import Form from './FormControl.svelte';
import Counter from './Counter.svelte'

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'Tushar'
// 	}
// });

// const counter = new Counter({
// 	target: document.body,
// })

const form = new Form({
	target: document.body,
})

// export default app;
export default form;