set -e

NODE_ENV=production

rm -rf dist
mkdir dist
mkdir dist/client

cp -r src/client/font dist/client
cp -r src/client/templates dist/client
cp -r src/client/vendorStyles dist/client

babel src/index.js --out-file dist/index.js

webpack -p
