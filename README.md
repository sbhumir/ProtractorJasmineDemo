# ProtractorJasmineDemo
Demo of Protractor Jasmine Framework
# Install protractor globally and npm install to install all the packages from package.json
```python
$ npm install -g protractor
$ npm install
```

# Usability
Run this, it creates a detailed Test Results html report under target folder
```python
$ npm run test
```
# Issues running protractor?
Incase if protractor command is not recognized after installing it globally. Check the system path and add if the following paths do not exist under system Environment Variables
```python
PATH: C:\Program Files\nodejs;
C:\Users<<user>>\AppData\Roaming\npm;

NODE_PATH: C:\Users\<<user>>\AppData\Roaming\npm\node_modules
```
