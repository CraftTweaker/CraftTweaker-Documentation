# Kiln

## Basic Recipe
* Adds Kiln Recipe - inputs *MUST* have a block associated with them.
  
```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[] output);
//Examples
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Removal by input

* Remove a recipe based on the input ingredient
```zenscript
mods.betterwithmods.Kiln.remove(IIngredient input);
```

## Removal by output

* Remove a recipe based on the output
```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Remove all

* Remove all recipes
```zenscript
mods.betterwithmods.Kiln.removeAll();
```


## Builder 

The Kiln has a recipe builder that allows more precise control over the recipes. All previous methods are simply short cuts to using the builder.

* To create a new Kiln builder.
`mods.betterwithmods.Kiln.builder()`

* Kiln methods
     * Sets up the input and outputs of the recipe  
       ```zenscript
       buildRecipe(IIngredient input, IItemStack[] outputs)
       ```
     * Set the Heat requirements of the recipe. Heat is used to check if the recipe can be made in a stoked or unstoked cauldron.
       Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
       ```zenscript
       setHeat(int heat)
       ```
     * Set the recipe to ignore the heat value and craft anyways  
       ```zenscript
       setIgnoreHeat(boolean ignoreHeat)
       ```
     * Finalize the recipe and add it to the game  
       ```zenscript
       build()
       ```
       
### Example builder usage
```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe(<ore:iron>, [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```
    
## Structure Block

The Kiln is a multiblock based on the block it is made of; This allows registering a block that can be used to create the structure.

Input MUST be a _Block_

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack input);
   
   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```
