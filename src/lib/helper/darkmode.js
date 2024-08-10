export function toggleDarkMode() {
	const darkMode = localStorage.getItem('darkMode') === 'true' ? 'false' : 'true';
	localStorage.setItem('darkMode', darkMode);
	beDarkMode();
}

export function beDarkMode() {
	const darkMode = localStorage.getItem('darkMode') === 'true';
	if (darkMode) {
		console.log("dark");
		document.documentElement.classList.add('dark');
	} else {
		console.log("light");
		document.documentElement.classList.remove('dark');
	}
}
