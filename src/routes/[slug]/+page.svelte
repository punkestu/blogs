<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { marked } from 'marked';
	import { Render } from 'svelte-purify';
	import blogRegistry from '$lib/data/blogRegistry';
	import renderer from '$lib/helper/markedRenderer';

	let otherBlog = blogRegistry.filter((blog) => blog.slug !== data.slug).reverse()[0];
	let state = 'loading';
	/**
	 * @type {{ title: string; thumbnail: string; postAt: Date; body: string; }}
	 */
	let blogData;

	if (data.post) {
		state = 'success';
		blogData = data.post;
	} else {
		state = 'not found';
	}
</script>

<svelte:head>
	{#if state === 'not found'}
		<title>Punkestu | Not Found</title>
	{:else if state === 'success'}
		<title>Punkestu | {blogData.title}</title>
	{/if}
</svelte:head>

{#if state !== 'success'}
	<div class="w-full h-[80vh] flex justify-center items-center">
		{#if state === 'not found'}
			⚠️ Blog Not Found
		{:else if state === 'loading'}
			🔄 Loading
		{:else if state === 'error'}
			🤯 Error
		{/if}
	</div>
{:else}
	<div class="w-full h-64 mb-2 bg-slate-700 relative">
		<img
			src={blogData.thumbnail}
			alt="thumbnail"
			class="w-full h-full object-cover object-center absolute top-0 left-0 z-50"
		/>
		<div class="w-full h-full bg-slate-300 animate-pulse"></div>
	</div>
	<h1 class="text-4xl font-bold">{blogData.title}</h1>
	<p class="dark:text-slate-400">| {blogData.postAt.toLocaleString().split(', ')[0]}</p>
	<hr class="mt-4 mb-6" />
	<div class="text-justify w-full prose dark:prose-invert max-w-full">
		<Render
			config={{
				ADD_ATTR: ['target']
			}}
			html={marked(blogData.body, {
				renderer
			}).toString()}
		/>
	</div>

	<div class="mt-4">
		<h2 class="font-semibold">Other Article</h2>
		<a
			href="/blog/{otherBlog.slug}"
			target="_self"
			class="mt-2 flex px-4 py-2 border-2 border-black dark:border-white hover:shadow-lg hover:shadow-slate-800 dark:hover:shadow-white rounded-xl duration-300"
			>{otherBlog.title}</a
		>
	</div>
{/if}
