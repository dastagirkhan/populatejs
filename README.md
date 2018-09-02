# populatejs-html-form-made-easy

    A pure `javascript` library to populate html form by passing a json data;


```javascript
(function () {
    // key value pairs where keys are the names of the form element
    populatejs({
        'last_name': 'yoyo',
        'feature': 'claws,scales',
        'sex': 'male',
        'pet-select': 'cat',
        'pet-select-multiple': 'dog,macaw'
    });
})();
```



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