set -e

mocha test --recursive --compilers js:babel-register --require ignore-styles --timeout 5000
