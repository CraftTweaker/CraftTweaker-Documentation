# Kiln

The Kiln ONLY takes blocks as inputs, all IItemStack input MUST be that of a place-able block.

## Addition

``` 
mods.betterwithmods.Kiln.add(IItemStack[] output, IItemStack input);
mods.betterwithmods.Kiln.add(IItemStack[] output, IIngredient input);
 
mods.betterwithmods.Kiln.add([<minecraft:diamond>, <minecraft:coal>], <minecraft:coal_ore>);
//Only use IIngredients that contain items!
mods.betterwithmods.Kiln.add([<minecraft:diamond>, <minecraft:coal>], <ore:oreCoal>);
```

## Removal

``` 
mods.betterwithmods.Kiln.remove(IItemStack input);
 
mods.betterwithmods.Kiln.remove(<minecraft:cobblestone>);
```

## Structure Block

The Kiln is a multiblock based on the block it is made of; This allows registering a block that can be used to create the structure.

Input MUST be a _Block_

```
   mods.betterwithmods.Kiln.registerBlock(IItemStack input);
   
   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```