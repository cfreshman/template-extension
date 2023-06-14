# template-extension
```
git clone git://freshman.dev/template-extension.git
```

**macOS / Chrome**  
[chrome://extensions](chrome://extensions) → Developer mode → Load unpacked

**enable an example**
> `manifest.json`
> ```
> {
>   ...
>   "content_scripts": [{
>     ...
>     "js": [
>       ...
>       "examples/1-alert.js"
>     ]
>   }],
>   ...
> }
> ```
