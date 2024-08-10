import { marked } from 'marked';
const renderer = new marked.Renderer();
renderer.link = (
	/** @type {string} */ href,
	/** @type {string} */ _title,
	/** @type {string} */ text
) => {
	return `<a href="${href}" target="_self">${text}</a>`;
};

export default renderer;
