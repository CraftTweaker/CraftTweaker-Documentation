# Mill


## Basic Recipe

* Adds a Mill Recipe  
```
mods.betterwithmods.Mill.addRecipe(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Removal

* Remove a Mill recipe based on the output
```mods.betterwithmods.Mill.remove(IItemStack[] outputs);```

* Remove all Mill recipes
```mods.betterwithmods.Mill.removeAll();```


## Builder 

The Mill has a recipe builder that allows more precise control over the recipes.
All previous methods are simply short cuts to using the builder.

* To create a new Mill builder.
`mods.betterwithmods.Mill.builder()`

* Mill builder methods
     * Sets up the inputs and outputs of the recipe    
       ```buildRecipe(IIngredient[] inputs, IItemStack[] outputs)```
     * Sets the priority of the recipe, the lower the priority the sooner it will be crafted. Default=0.    
       ```setPriority(int priority)```
     * Set the sound of a Mill Recipe.   
       ```setSound(String soundLocation)```
     * Finalize the recipe and add it to the game    
       ```build()```

### Example builder usage
```
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```
    