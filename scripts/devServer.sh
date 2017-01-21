echo TRANSPILING DEV SERVER

babel src/index.js --out-file dist/index.js

echo STARTING

node dist/index.js

