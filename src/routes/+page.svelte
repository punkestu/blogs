<script>
	import blogRegistry from '$lib/data/blogRegistry';
	import { onMount } from 'svelte';
	blogRegistry.reverse();
	onMount(() => {
		blogRegistry.reverse();
	});
</script>

<h1 class="text-4xl font-bold">Blogs</h1>
<section id="blogs" class="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 min-h-[70vh]">
	{#each blogRegistry as register}
		<a
			href="/{register.slug}"
			class="flex flex-col bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 p-4 rounded-lg flex-grow md:max-w-[calc(50%-0.25rem)]"
		>
			<div class="w-full h-48 relative">
				<img
					src={register.thumbnail}
					class="absolute w-full top-0 left-0 h-full object-cover z-50"
					alt="illustration"
					srcset=""
				/>
				<div class="w-full h-full bg-slate-300 animate-pulse"></div>
			</div>
			<h2 class="text-xl font-semibold mt-2">{register.title}</h2>
			<p class="text-sm dark:text-slate-500 mb-2">
				| {register.postAt.toLocaleString().split(', ')[0]}
			</p>
		</a>
	{/each}
</section>
