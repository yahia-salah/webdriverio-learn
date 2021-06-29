npm init --yes
npm i @wdio/cli
npx wdio config
npm install chromedriver --chromedriver-force-download
npx wdio run wdio.conf.js
npx wdio run wdio.conf.js --spec ./test/specs/main.e2e.js

npm i -g allure-commandline
allure generate allure-results | allure open
