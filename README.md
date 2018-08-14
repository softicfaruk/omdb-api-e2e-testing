### Prerequisites

- Install Node
- Install Nightwatch
- Install Selenium

### Install dependecies


npm install


### Run tests

npm run test


### NOTE

If you are Windows user in nightwatch.json you need.


    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : "",
      "webdriver.firefox.profile" : ""
    }



If you are OSX user in nightwatch.json you need.



    "cli_args" : {
      "webdriver.chrome.driver" : "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    }
