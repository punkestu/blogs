<script>
	import '../app.css';
	import { env } from '$env/dynamic/public';
	import logo from '$lib/image/logo.svg';
	import { toggleDarkMode, beDarkMode } from '$lib/helper/darkmode';
	import { onMount } from 'svelte';

	let mail = {
		subject: "Hello, I'm interested in your work",
		body: "Hi, I'm interested in your work. Can you tell me more about it?"
	};
	let darkState = '🌛';
	onMount(() => {
		if (!localStorage.getItem('darkMode')) {
			localStorage.setItem('darkMode', 'true');
		}
		const darkMode = localStorage.getItem('darkMode') === 'true';
		if (darkMode) {
			darkState = '🌛';
		} else {
			darkState = '🌞';
		}
		beDarkMode();
	});

	function darkButtonClick() {
		const darkMode = localStorage.getItem('darkMode') === 'true';
		if (darkMode) {
			darkState = '🌞';
		} else {
			darkState = '🌛';
		}
		toggleDarkMode();
	}
</script>

<svelte:head>
	<title>Punkestu | Blogs</title>
	<link rel="shortcut icon" href={logo} type="image/x-icon" />
</svelte:head>

<header class="w-full md:w-2/3 dark:text-white py-4 flex justify-between">
	<nav>
		<ul class="flex gap-2 md:gap-8">
			<li>
				<a href="/" class="no-underline hover:underline">Blogs</a>
			</li>
			<li>
				<a href="{env.PUBLIC_HOME}" class="no-underline hover:underline">Back to punkestu</a>
			</li>
		</ul>
	</nav>
	<aside class="flex gap-2">
		<a class="px-2 py-1 bg-yellow-500 text-gray-700" href="https://saweria.co/bpangestu"
			>Beliin kopi ☕️</a
		>
		<button on:click={darkButtonClick}>{darkState}</button>
	</aside>
</header>

<hr class="w-full md:w-2/3 border border-black dark:border-slate-50" />

<section id="content" class="w-full md:w-2/3 mt-8">
	<slot />
</section>

<hr class="mt-8 w-full md:w-2/3 border border-black dark:border-slate-50" />
<footer class="flex py-4 w-full md:w-2/3 gap-8 dark:text-slate-200 justify-between">
	<ul class="flex flex-col gap-2">
		<li>
			<a href="/" class="no-underline hover:underline">Home</a>
		</li>
		<li>
			<a href="/project" class="no-underline hover:underline">Projects</a>
		</li>
		<li>
			<a href="/app" class="no-underline hover:underline">Apps</a>
		</li>
		<li>
			<a href="/blog" class="no-underline hover:underline">Blogs</a>
		</li>
	</ul>
	<ul class="flex flex-col gap-2">
		<li>
			<a href="https://www.instagram.com/b_pangestu03" class="no-underline hover:underline"
				>Instagram</a
			>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/bpangestu" class="no-underline hover:underline"
				>LinkedIn</a
			>
		</li>
		<li>
			<a href="https://github.com/punkestu" class="no-underline hover:underline">Github</a>
		</li>
		<li>
			<a
				href="mailto:pangestubima89@gmail.com?subject={mail.subject}&body={mail.body}"
				class="no-underline hover:underline">Mail me</a
			>
		</li>
	</ul>
	<div>
		<img src={logo} alt="logo" class="" />
	</div>
</footer>
