# ProtractorJasmineDemo
Demo of Protractor Jasmine Framework
# Install the following npm packages globally so that this project can be run from anywhere
```python
$ npm install -g protractor
$ npm install -g jasmine
$ npm install -g protractor-jasmine2-screenshot-reporter
$ npm imstall -g protractor-html-reporter-2
```

# Usability
Go to this project directory and run the following command. This creates a detailed Test Results html report under project directory target folder
```python
$ protractor .\conf\conf.js
```
# Issues running protractor?
Incase if protractor command is not recognized after installing it globally. Check the system path and add if the you do not see the following path under system environment variables
```python
PATH: C:\Program Files\nodejs;
C:\Users<<user>>\AppData\Roaming\npm;

NODE_PATH: C:\Users\<<user>>\AppData\Roaming\npm\node_modules
```
