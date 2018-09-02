# populatejs-html-form-made-easy

A pure `javascript` library to populate html form by passing a json data;


example: `populatejs({ 'last_name': 'yoyo', 'feature': 'claws,scales', 'sex': 'male', 'pet-select': 'cat', 'pet': 'dog,macaw' });// key value pairs where keys are the names of the form elements
`


## Getting started with developent

Clone and install deps

```
git clone git@github.com:dastagirkhan/populatejs.git
cd populatejs
npm install 
-- modify populate.js --
npm run build (this will create populatejs.min.js)
npm run serve (run example set in index.html)
```