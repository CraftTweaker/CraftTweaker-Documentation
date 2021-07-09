# Chemical Combiner

# Package
```zenscript
mods.alchemistry.CombinerCombiner
```

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] input** - The inputs of the recipe.


## Suma
```zenscript
mods.alchemistry.AtomizerCombiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Removal
```zenscript
mods.alchemistry.AtomizerCombiner.removeRecipe(IItemStack output);
mods.alchemistry.mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();Combiner.removeAllRecipes();
```


# Game Stages Integration

## New Recipes
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Existing Recipe

```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
