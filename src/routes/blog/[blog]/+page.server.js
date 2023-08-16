import { blogs } from '../../../stores/blogs';
import { error } from '@sveltejs/kit';



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const blog = blogs.filter((e) => e.slug === params.blog);

	return { ...blog };

	throw error(404, 'Not found');
}