# Tooltips
Since MineTweaker 3.0.8, you can now add tooltips to items.

Adding tooltips can be done directly on any kind of ingredient:

```zenscript
<ore:plankWood>.addTooltip("These are wood planks");
<minecraft:stick>.addTooltip("These are sticks");
```
Two kinds of tooltips are available: regular tooltips and tooltips that only appear when the shift key is being pressed:

```zenscript
<minecraft:stick>.addShiftTooltip("Only appears with shift");
```
## Markup
Tooltips can be colored and styled using the format functions:

```zenscript
<minecraft:stick>.addTooltip(format.green("This is green text"));
```
The following formatting functions are available:

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format.gray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white

format.obfuscated
format.bold
format.strikethrough
format.underline
format.italic
```
Strings (and formatted strings) can be concatenated and nested easily:

```zenscript
<minecraft:stick>.addTooltip(format.green(format.italic("This is a stick") + " with " + format.strikethrough("text")) + " in multiple styles");
```
Be careful to match the brackets properly!