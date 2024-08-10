import registry from '$lib/data/blogRegistry';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	let register = registry.find((p) => p.slug === params.slug);
	let post;
	if (register) {
		let body = await fetch(register.dir)
			.then((res) => res.text())
			.catch(() => null);
		if (body) {
			post = { ...register, dir: undefined, body };
		}
	}
	return {
		post,
		slug: params.slug
	};
};
