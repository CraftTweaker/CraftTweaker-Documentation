# Przetrwający

## Blok kropki

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient inputt, IItemStack output, outputMultiplier, hitCountMultiplier);
```

##### Przykład

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### Stos wyjściowy, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(IIngredient output, IIngredient Input);
```

##### Przykład

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Suszarnia

### [PLACEHOLDER] InputStack, OutputStack, Time in Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient input, wyjście IItemStack, czas int);
```

##### Przykład

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### Stos wyjściowy, {InputStack}

```zenscript
gigaherz.survivalist.ryable.removeRecipe(ISkładnik wyjściowy, dane wejściowe);
```

##### Przykład

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack może być słownikiem rudy i wszystko otoczone przez {} jest opcjonalne