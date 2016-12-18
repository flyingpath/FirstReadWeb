build:
	rm -rf production/
	mkdir production/
	mkdir production/js    	
	cp public/index-pro.html production/index.html
	cp -r public/css production/css
	jspm bundle-sfx ./public/app.js  ./production/js/app.min.js --minify --skip-source-maps
