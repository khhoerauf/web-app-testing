const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		viewportWidth: 1440, //macbook-15
		viewportHeight: 900,
		video: false,
		baseUrl: 'http://localhost:5173',
		specPattern: './e2e/**-test.js',
		experimentalWebKitSupport: true,
		supportFile: './support/e2e.js',
	},
})
