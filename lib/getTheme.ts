// https://github.com/vercel/next.js/discussions/53063
// @ts-nocheck
const code = function () {
	window.__onThemeChange = function () {}

	function setTheme(newTheme) {
		window.__theme = newTheme
		preferredTheme = newTheme
		document.documentElement.dataset.theme = newTheme
		window.__onThemeChange(newTheme)
	}

	var preferredTheme

	try {
		preferredTheme = localStorage.getItem('theme')
	} catch (err) {}

	window.__setPreferredTheme = function (newTheme) {
		setTheme(newTheme)
		try {
			localStorage.setItem('theme', newTheme)
		} catch (err) {}
	}

	var darkQuery = window.matchMedia('(prefers-color-scheme: synthwave)')

	darkQuery.addEventListener('change', function (e) {
		window.__setPreferredTheme(e.matches ? 'synthwave' : 'light')
	})

	setTheme(preferredTheme || (darkQuery.matches ? 'synthwave' : 'light'))
}
export const getTheme = `(${code})();`
