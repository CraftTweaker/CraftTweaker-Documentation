# Turntable

## Basic Recipe

* Adds Turntable Recipe - inputs *MUST* have a block associated with them.
  The product state is the block that will be placed after the recipe finishes
  
```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[] output);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[] output);

//Examples
mods.betterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Removal by input

* Remove a recipe based on the input ingredient
```zenscript
mods.betterwithmods.Turntable.remove(IIngredient input);
```

## Remove all

* Remove all recipes
```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Remove by product

* Remove a recipe by the productState  
```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Builder 

The Turntable  has a recipe builder that allows more precise control over the recipes. All previous methods are simply short cuts to using the builder.

* To create a new Turntable builder.
`mods.betterwithmods.Turntable.builder()`

* Turntable methods
     * Sets up the inputs and outputs of the recipe  
       ```zenscript
       buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
       ```
     * Sets the rotations required for the recipe to finish. This defaults to 8.  
       ```zenscript
       setRotations(int rotations)
       ```
     * Set the block that is placed when the recipe is finished.  
       ```zenscript
       setProductState(IItemStack productState)
       ```
     * Finalize the recipe and add it to the game  
       ```zenscript
       build()
       ```
       
### Example builder usage
```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```
    
