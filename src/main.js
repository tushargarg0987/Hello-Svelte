import App from './App.svelte';
import Counter from './Counter.svelte'

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'Tushar'
// 	}
// });

const counter = new Counter({
	target: document.body,
})

// export default app;
export default counter;