::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Jei Drawable

Represents anything that can be drawn in a JEI recipe or category.

## Package

`mods.jei.component.JeiDrawable`

## Description

A drawable can be anything from an ingredient, to a blank image, to something with animations. 

Any `JeiIngredient` you might have can be implicitly casted or converted into a drawable.

## Static Methods

Most methods in this class allow you to create drawables with different characteristics.

### blank

Creates a blank drawable that draws nothing

```zenscript
JeiDrawable.blank(width as int, height as int) as JeiDrawable;
```

### of

Creates a drawable of the specified JeiIngredient

```zenscript
JeiDrawable.of(ingredient as JeiIngredient) as JeiDrawable;
```

### of (MCResourceLocation)

Creates a drawable of the specified resource location, where to start drawing from, its width and height.
This might sound slightly confusing, but instead of having one file for each small 16x16 image, Minecraft groups it together in larger files.
This means that within a 256x256 file, you can fit say, 16 textures, but when you use them, you need to specify where to start drawing from.

```
zenscript
JeiDrawable.of(resLoc as MCResourceLocation, topLeftX as int, topLeftY as int, width as int, height as int) as JeiDrawable;
```

Your texture x size should be `topLeftX + width`.
Your texture y size should be `topLeftY + height`.
If you are using a 256x256 file and you wish to use the file in its entirety, you should use a method that looks like this:

```zenscript
JeiDrawable.of(path, 0, 0, 256, 256);
```

In any other case, look at where the subtexture inside of your file (or a vanilla file) starts, and what's it's width and height value.

### ofAnimated

Creates an animated version of the specified drawable, that animates over a course of specified ticks.

The original drawable is left untouched, meaning that the returned instance is a fully separate drawable.

```zenscript
JeiDrawable.ofAnimated(original as JeiDrawable, ticks as int, animation as JeiDrawableAnimation) as JeiDrawable;
```

### ofAnimated (MCResourceLocation)

Creates an animated version of a texture drawable.

Using this method is the equivalent of using the `of (MCResourceLocation)` that has been showcased previously, so that you don't have to create two drawables.
The explanation on how to use this method can be found there, including how to find what your parameters are.

```zenscript
JeiDrawable.ofAnimated(resLoc as MCResourceLocation, topLeftX as int, topLeftY as int, width as int, height as int, ticks as int, animation as JeiDrawableAnimation) as JeiDrawable;
```

### ofNinePatch

Creates a JeiDrawable which is based on a nine-patch texture. Requires you to provide the texture, it's size, and the parameters at which the new drawable will be rescaled to.

```zenscript
JeiDrawable.ofNinePatch(resLoc as MCResourceLocation, topLeftX as int, topLeftY as int, texWidth as int, texHeight as int,  drawableWidth, drawableHeight) as JeiDrawable;
```


