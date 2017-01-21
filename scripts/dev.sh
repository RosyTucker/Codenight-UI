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

webpack -w & $(pwd)/scripts/devServer.sh
