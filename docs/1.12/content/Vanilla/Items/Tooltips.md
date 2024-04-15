# Tooltips

Adding or removing a tooltip is really easy:  
All you need is an item (or [IoreDict](/Vanilla/OreDict/IOreDict/) or similar), in other words, an [IIngredient](/Vanilla/Variable_Types/IIngredient/).

## Clearing tooltips
This removes ALL tooltips from the `item`
```zenscript
item.clearTooltip();

// item.clearTooltip(leaveName as bool);
// removes all tooltips but leaves the item name
item.clearTooltip(true);
```

## Removing specific tooltips
This function removes all tooltips that match the given regex.
One tooltip is generally one line of text (unless there are forced linebreaks due to space).
```zenscript
item.removeTooltip(regex);
```
`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is a string

Or removes a tooltip at a specific line.
```zenscript
item.removeTooltipLine(line);
```
`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`line` is an integer


## Normal Tooltips
This adds `tT` as tooltip to `item`.
```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Storage, what can I say more?");
```
`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is a string

## Shift Tooltips
This adds a tooltip, that will only be visible when you hold shift.  
You can also add an info that will be visible when you don't hold shift (usually used to create something like a message telling you about the shift tooltip.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Hold shift to know what I am");
```
`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is an [IFormattedText](/Vanilla/Utils/IFormattedText/). You can also just use a string as they are automatically converted.  
`info` is an [IFormattedText](/Vanilla/Utils/IFormattedText/). You can also just use a string as they are automatically converted.  


# Markup
The world is colorful, and so should be all of our tooltips.
You can also nest these options, should you with to (if you wanted a green text, that is strikethrough)

## Coloring a String

You can apply one of the 16 colors to your string
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
```

```zenscript
<minecraft:stick>.addTooltip(format.green("This one wasn't ripe"));
```

## Formatting a String
You can apply different formats to your String should you wish to:
```zenscript
format.obfuscated
format.bold
format.strikethrough
format.underline
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("This is a bad tooltip"));
```


## Tooltip functions
You can replace the [IFormattedText](/Vanilla/Utils/IFormattedText/) parameter with an ITooltipFunction (`import crafttweaker.item.ITooltipFunction;`).  
These functions allow you to dynamically generate a tooltip based on the given [IItemStack](/Vanilla/Items/IItemStack/).

A tooltip function is a function that takes an [IItemStack](/Vanilla/Items/IItemStack/) and returns the tooltip as string.
This means that using a `format` command _does not work_ for these functions, you will need to rely on Minecraft's formatting prefixes if you need to accomplish that.

For the shift tooltips, you can provide a 2nd function as well, which allows you to also generate the tooltip that should be shown when shift is not pressed.
For shift tooltips it's either both parameters as function or both as [IFormattedText](/Vanilla/Utils/IFormattedText/), no mix-ups!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Example
<ore:myAxeOreDictionary>.add(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>.addAdvancedTooltip(function(item) {   
    return "Damage: " ~ item.damage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>.addShiftTooltip(function(item) {    
    return "Uses left: " ~ (item.maxDamage - item.damage);
}, function(item){
    return "Hold shift for some juicy math.";
});
```
