# Sopravvivente

## Blocco Di Chopping

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient input, IItemStack outputMultiplier, hitCountMultiplier);
```

##### Esempio

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(IIngredient output, IIngredient input);
```

##### Esempio

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Rack Di Essiccazione

### InputStack, OutputStack, Time in Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient input, IItemStack output, int time);
```

##### Esempio

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngredient output, IIngredient input);
```

##### Esempio

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack può essere dizionario minerario e qualsiasi cosa circondata da {} è opzionale