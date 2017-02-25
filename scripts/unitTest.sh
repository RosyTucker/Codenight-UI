set -e

mocha test --recursive --compilers jsx:babel-register,js:babel-register --require ignore-styles --require babel-polyfill --colors --timeout 5000
