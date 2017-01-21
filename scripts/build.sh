set -e

rm -rf dist
babel src/index.js --out-file dist/index.js

webpack
