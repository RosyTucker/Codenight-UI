set -e

mocha test --compilers jsx:babel-register,js:babel-register --require ignore-styles --colors --timeout 5000
