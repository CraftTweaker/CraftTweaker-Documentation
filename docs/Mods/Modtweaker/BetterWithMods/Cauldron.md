# Cauldron


## Basic Recipe

* Adds a Unstoked Cauldron Recipe  
```
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Adds a Stoked Cauldron Recipe   
```
mods.betterwithmods.Cauldron.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```


## Removal

* Remove a Cauldron recipe based on the output
```mods.betterwithmods.Cauldron.remove(IItemStack[] outputs);```

* Remove all Cauldron recipes
```mods.betterwithmods.Cauldron.removeAll();```


## Builder 

The Cauldron has a recipe builder that allows more precise control over the recipes.
All previous methods are simply short cuts to using the builder.

* To create a new Cauldron builder.
`mods.betterwithmods.Cauldron.builder()`

* Cauldron methods
     * Sets up the inputs and outputs of the recipe  
       ```buildRecipe(IIngredient[] inputs, IItemStack[] outputs)```
     * Sets the priority of the recipe, the lower the priority the sooner it will be crafted. Default=0.  
       ```setPriority(int priority)```
     * Set the Heat requirements of the recipe. Heat is used to check if the recipe can be made in a stoked or unstoked cauldron.
       Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](HeatRegistry.md).  
       ```setHeat(int heat)```    
     * Set the recipe to ignore the heat value and craft anyways
       ```setIgnoreHeat(boolean ignoreHeat)```
     * Finalize the recipe and add it to the game  
       ```build()```
       
### Example builder usage
```
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```
    