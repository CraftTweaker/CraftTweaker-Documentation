# Crucible

## Basic Recipe

* Adds a Unstoked Crucible Recipe  
```
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Adds a Stoked Crucible Recipe   
```
mods.betterwithmods.Crucible.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```


## Removal

* Remove a Crucible recipe based on the output
```mods.betterwithmods.Crucible.remove(IItemStack[] outputs);```

* Remove all Crucible recipes
```mods.betterwithmods.Crucible.removeAll();```


## Builder 

The Crucible has a recipe builder that allows more precise control over the recipes.
All previous methods are simply short cuts to using the builder.

* To create a new Crucible builder.
`mods.betterwithmods.Crucible.builder()`

* Crucible methods
     * Sets up the inputs and outputs of the recipe  
       ```buildRecipe(IIngredient[] inputs, IItemStack[] outputs)```
     * Sets the priority of the recipe, the lower the priority the sooner it will be crafted. Default=0.  
       ```setPriority(int priority)```
     * Set the Heat requirements of the recipe. Heat is used to check if the recipe can be made in a stoked or unstoked Crucible.
       Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
       ```setHeat(int heat)```  
     * Set the recipe to ignore the heat value and craft anyways  
       ```setIgnoreHeat(boolean ignoreHeat)```
     * Finalize the recipe and add it to the game  
       ```build()```
       
### Example builder usage
```
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```