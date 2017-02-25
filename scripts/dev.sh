set -e

onFinish() {
  echo "Cleaning Up"
  kill -- -$$
  exit 0
}

trap "onFinish" SIGINT SIGTERM

source $(pwd)/env.sh

rm -rf dist
mkdir dist
mkdir dist/client

cp -r $(pwd)/src/client/font $(pwd)/dist/client
cp -r $(pwd)/src/client/templates $(pwd)/dist/client
cp -r $(pwd)/src/client/vendorStyles $(pwd)/dist/client
webpack -w & $(pwd)/scripts/devServer.sh
