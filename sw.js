if (!self.define) {
	let e,
		s = {};
	const i = (i, r) => (
		(i = new URL(i + '.js', r).href),
		s[i] ||
			new Promise(s => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = i), (e.onload = s), document.head.appendChild(e);
				} else (e = i), importScripts(i), s();
			}).then(() => {
				let e = s[i];
				if (!e)
					throw new Error(`Module ${i} didn’t register its module`);
				return e;
			})
	);
	self.define = (r, n) => {
		const a =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href;
		if (s[a]) return;
		let l = {};
		const o = e => i(e, a),
			t = { module: { uri: a }, exports: l, require: o };
		s[a] = Promise.all(r.map(e => t[e] || o(e))).then(e => (n(...e), l));
	};
}
define(['./workbox-3e4da89b'], function (e) {
	'use strict';
	self.addEventListener('message', e => {
		e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
	}),
		e.precacheAndRoute(
			[
				{ url: 'assets/404.bac47257.js', revision: null },
				{ url: 'assets/app.3e432021.js', revision: null },
				{ url: 'assets/fa-brands-400.cda59d6e.ttf', revision: null },
				{ url: 'assets/fa-regular-400.e8711bbb.ttf', revision: null },
				{ url: 'assets/fa-solid-900.af639750.ttf', revision: null },
				{ url: 'assets/profile.8486ad65.jpg', revision: null },
				{ url: 'assets/vendor.d1a07c28.js', revision: null },
				{
					url: 'assets/virtual_pwa-register.0a08b1c3.js',
					revision: null,
				},
				{
					url: 'index.html',
					revision: '6796c513c98df8a5efaa4ccc3c1df33b',
				},
				{
					url: 'favicon-16x16.png',
					revision: '5bbe655eb05078faacd83e6bab25529e',
				},
				{
					url: 'favicon-32x32.png',
					revision: 'e409936358d5b4d9f12edd7e0c0c35a6',
				},
				{
					url: 'favicon.ico',
					revision: '240f91710d3c646f38479ddba77e8dc3',
				},
				{
					url: 'robots.txt',
					revision: 'cd9cd94aaa699e0a16e692b6bb16f672',
				},
				{
					url: 'apple-touch-icon.png',
					revision: '2ddda202e3360b4fe7b129a4b315e3a6',
				},
				{
					url: 'pwa-192x192.png',
					revision: '5dba71281213d5c947a4a870e46e7e7f',
				},
				{
					url: 'pwa-512x512.png',
					revision: '74c0a838cc786ecebdd78b0ba011daa4',
				},
				{
					url: 'manifest.webmanifest',
					revision: '523bf0d9184149251db395212b83d838',
				},
			],
			{}
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))
		);
});
