console.debug('[extension] run template-extension/examples/script-load.js')

// load a script
;[
    'https://uh.software/lib/2/common.js',
].map(src => document.head.append((x => {
    x.src = src
    x.onload = () => console.debug('[extension] loaded', src)
    return x
})(document.createElement('script'))))
