console.debug('[extension] run template-extension/examples/storage.js')

// persist data
;(async () => {
    // update
    const key = 'examples/storage.js-count'
    const updated = (x => {
        x[key] = 1 + (x[key] ?? 0)
        browser.storage.sync.set(x)
        return x[key]
    })(await browser.storage.sync.get(key))

    // display
    document.body.append((x => {
        x.innerHTML = `<div style="
        position: fixed; top: 0; right: 0; margin: .5em;
        background: #fff; border: 1px solid #000; box-shadow: .25em .25em #000;
        font-family: monospace;
        ">
            template-extension/examples/storage.js ${updated}
        </div>`
        setTimeout(() => x.remove(), 3_000)
        return x
    })(document.createElement('div')))
})()

// more on browser.storage: https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage
