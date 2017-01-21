set -e

COMMIT_MESSAGE=$(git log -1 --pretty=%B)

echo "Copying package.json"
cp package.json dist/package.json

echo "Copying Procfile"
cp Procfile.template dist/Procfile

cd dist

echo Creating git repo, with heroku origin $HEROKU_REPO
git init
git remote add heroku $HEROKU_REPO
git remote

echo "Staging files"
git add -A
git status

echo "Committing with message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo "Setting config vars"

heroku config:set GITHUB_CLIENT_ID=$GITHUB_CLIENT_ID --app $APP_NAME &> /dev/null
echo "Set GITHUB_CLIENT_ID"

heroku config:set GITHUB_CLIENT_SECRET=$GITHUB_CLIENT_SECRET --app $APP_NAME &> /dev/null
echo "Set GITHUB_CLIENT_SECRET"

heroku config:set BASE_URL=$BASE_URL --app $APP_NAME &> /dev/null
echo "Set BASE_URL"

heroku config:set SESSION_SECRET=$SESSION_SECRET --app $APP_NAME &> /dev/null
echo "Set SESSION_SECRET"

heroku config:set REDIS_URL=$REDIS_URL --app $APP_NAME &> /dev/null
echo "Set REDIS_URL"

heroku config:set MONGODB_URI=$MONGODB_URI --app $APP_NAME &> /dev/null
echo "Set MONGODB_URI"

echo "Pushing to heroku"
git push heroku master -f
