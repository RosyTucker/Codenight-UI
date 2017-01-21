set -e

mocha test/client --recursive --compilers js:babel-register --require ignore-styles --timeout 5000
