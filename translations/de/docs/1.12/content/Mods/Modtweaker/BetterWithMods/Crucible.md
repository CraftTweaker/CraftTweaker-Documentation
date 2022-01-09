# Crucible

## Basic Recipe

* Adds a Unstoked Crucible Recipe
```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Adds a Stoked Crucible Recipe
```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```


## Removal

* Remove a Crucible recipe based on the output
```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[] outputs);
```

* Remove all Crucible recipes
```zenscript
mods.betterwithmods.Crucible.removeAll();
```


## Builder

The Crucible has a recipe builder that allows more precise control over the recipes. All previous methods are simply short cuts to using the builder.

* To create a new Crucible builder. `mods.betterwithmods.Crucible.builder()`

* Crucible methods
     * Sets up the inputs and outputs of the recipe<br /> buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
       ```zenscript
       buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
       ```
     * Sets the priority of the recipe, the lower the priority the sooner it will be crafted. Default=0.<br /> setPriority(int priority)
       ```zenscript
       setPriority(int priority)
       ```
     * Set the Heat requirements of the recipe. Heat is used to check if the recipe can be made in a stoked or unstoked Crucible. Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).<br /> setHeat(int heat)
       ```zenscript
       setHeat(int heat)
       ```
     * Set the recipe to ignore the heat value and craft anyways<br /> setIgnoreHeat(boolean ignoreHeat)
       ```zenscript
       setIgnoreHeat(boolean ignoreHeat)
       ```
     * Finalize the recipe and add it to the game<br /> build()
       ```zenscript
       build()
       ```

### Example builder usage
```zenscript
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```