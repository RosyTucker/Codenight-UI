set -e

NODE_ENV=production

rm -rf dist
babel src/index.js --out-dir dist/index.js

webpack -p
