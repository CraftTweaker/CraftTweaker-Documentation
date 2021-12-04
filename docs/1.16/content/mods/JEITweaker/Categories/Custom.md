::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Custom Category

This category implements all of `JeiCategory`'s methods.

## Package

`mods.jei.category.Custom`

## Instance methods

### addSlot
Adds a slot with the specified index at the specified position in the screen.
The boolean determines whether it is an input or output slot.

```zenscript
MyCustomCategory.addSlot(index as int, x as int, y as int, isInput as boolean) as void;
```

### addDrawable

Adds a JeiDrawable at the given coordinates.

```zenscript
MyCustomCategory.addDrawable(x as int, y as int, drawable as JeiDrawable) as void; 
```

### addTooltip

Adds a new tooltip that appears when the mouse is in a rectangle active area of defined width and height at the specified coordinates with the specified text.
The text parameter is an `MCTextComponent...` which is a vararg. That means you can chain parameters with commas as long as they are of the right type.

```zenscript
MyCustomCategory.addTooltip(x as int, y as int, width as int, height as int, text as MCTextComponent...);
```

### addText

Adds a text that appears in the specified coordinates. The text will appear in any recipe of that category and is final.

```zenscript
MyCustomCategory.addText(x as int, y as int, text as MCTextComponent);
```