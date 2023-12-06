import {
	createSSRApp
} from "vue";
import App from "./App.vue";

// mockjs
import '@/mock/auth.js'

// unocss
import 'virtual:uno.css'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

export function createApp() {
	const app = createSSRApp(App);
	
	app.use(pinia)

	return {
		app,
	};
}
