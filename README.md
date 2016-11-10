## Install

`git clone git@github.com:juanfran/taiga-override-directive-example.git` in `taiga-front/dist/plugins/`

Add to you conf.json in `taiga-front/dist/conf.json`

```json
"contribPlugins": [
    "/plugins/taiga-override-directive-example/conf.json"
]
```

this example will load main.css and index.js in your taiga instance, look the conf.json