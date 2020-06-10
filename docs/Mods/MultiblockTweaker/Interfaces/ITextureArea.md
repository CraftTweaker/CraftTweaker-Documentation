# ITextureArea

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.render.ITextureArea;
```
## Information
Can be used for defining a custom recipe arrow.

## ZenMethods

### Static Methods
#### ITextureArea#fullImage(string)
-> ITextureArea

Get the full image at a location.

You will most likely wish to define this in a script with `#loader preinit`, so the texture actually gets loaded.

 * **Parameters:** `imageLocation` — The full location of the image.
 * **Returns:** An [`ITextureArea`](#ITextureArea) of the given image.

#### ITextureArea#areaOfImage(string, int, int, int, int, int, int)
-> ITextureArea

Get an area of an image at a location.

You will most likely wish to define this in a script with `#loader preinit`, so the texture actually gets loaded.

 * **Parameters:** `imageLocation` — The full location of the image.
 * **Returns:** An [`ITextureArea`](#ITextureArea) of the area of the given image.

### Instance Methods
#### ITextureArea#getSubArea(double, double, double, double)
-> ITextureArea

Get an area of the current [`ITextureArea`](#ITextureArea).

 * **Parameters:**
   * `offsetX` — The offsetX relative to this image.
   * `offsetY` — The offsetY relative to this image.
   * `width` — The width of the image.
   * `height` — The height of the image.
 * **Returns:** The new [`ITextureArea`](#ITextureArea).
