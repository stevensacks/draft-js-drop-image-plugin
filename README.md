# draft-js-drop-image-plugin
Drop an image from the desktop on to the draft plugins editor

## About This Library
This library is provided as a how-to guide. You may need to modify a little of this code in your project to work.

The editor must have been focused at least once for this to work. Otherwise, it will replace the webpage with the image that was dropped on the browser. I force the editor to focus on componentDidMount().

## Things To Know
For this to work, you also need a way to render Atomic images. I have included my implementation of it in this repo, but AtomicImage is not part of this plugin.

You will probably want to modify AtomicImage to your particular needs.

You also need to set the blockRendererFn of your editor to a function like this:

```
imageBlockRenderer(block) {
    if (block.getType() === 'atomic') {
        return {
            component: AtomicImage,
            editable: false
        };
    }
    return null;
}
```
