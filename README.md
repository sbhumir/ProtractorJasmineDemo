# ProtractorJasmineDemo
Demo of Protractor Jasmine Framework
# Install the following npm packages
```python
$ npm install -g protractor
$ npm install jasmine
$ npm install protractor-jasmine2-screenshot-reporter
$ npm i protractor-html-reporter-2
```

# Usability
Go to this repository home directory and run the following. This creates an html report of the result under target folder
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
