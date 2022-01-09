# Mill


## Basic Recipe

* Adds a Mill Recipe
```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] inputs, IItemStack[] outputs);
// Examples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Removal

* Remove a Mill recipe based on the output
```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] outputs);
```

* Remove all Mill recipes
```zenscript
mods.betterwithmods.Mill.removeAll();
```


## Builder

The Mill has a recipe builder that allows more precise control over the recipes. All previous methods are simply shortcuts to using the builder.

* To create a new Mill builder: `mods.betterwithmods.Mill.builder()`

* Mill builder methods
     * Setup the inputs and outputs of the recipe
       ```zenscript
       buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
       ```
     * Set the priority of the recipe - the lower the priority, the sooner it will be crafted. Default is 0
       ```zenscript
       setPriority(int priority)
       ```
     * Set the sound emitted by the mill during the recipe
       ```zenscript
       setGrindType(String soundLocation)
       ```
     * Set the tick duration of the recipe (how long the recipe takes to complete)
       ```zenscript
       setTicks(int ticks)
       ```
     * Finalize the recipe and add it to the game<br /> build()
       ```zenscript
       build()
       ```

### Example builder usage
```zenscript
mods.betterwithmods.Mill.builder()
  .buildRecipe([<minecraft:stone>], [<minecraft:stone>])
  .setGrindType("minecraft:entity.ghast.scream")
  .build();
```
    
