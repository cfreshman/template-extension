console.debug('[extension] run template-extension/examples/watch.js')

// watch for changes in a background tab
(async () => {
    if (/doordash.com\/orders/.test(location.href)) {
        let in_progress = false
        do {
            await new Promise(x=>setTimeout(x, 3_000))
            const tracker = document.querySelector('[data-test-id=order-status]')
            if (in_progress) {
                if (/order complete/i.test(tracker.textContent)) {
                    const message = `doordash: ${tracker.textContent.toLowerCase()} (${location.href.replace(/(https?:\/\/)?(www\.)?/, '')})`
                    open(
                        `https://raw.uh.software/render#${encodeURIComponent(message)}`, '_blank', 
                        `popup,innerWidth=700,innerHeight=100,right=50,top=50`)
                    return
                }
            } else if (!tracker || /order complete/i.test(tracker.textContent)) {
                return
            } else {
                in_progress = true
            }
        } while (1)
    }
})()
