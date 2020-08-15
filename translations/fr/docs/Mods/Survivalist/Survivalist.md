# Survivaliste

## Bloc de coupe

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient entrée, sortie IItemStack, outputMultiplier, hitCountMultiplier);
```

##### Exemple

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### Pile de sortie, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(IIngredient sortie, entrée IIngredient);
```

##### Exemple

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Chevalet de séchage

### InputStack, OutputStack, Temps en Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient entrée, sortie IItemStack, temps d'int);
```

##### Exemple

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### Pile de sortie, {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngredient sortie, entrée Igredient);
```

##### Exemple

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack peut être un dictionnaire de minerai et tout ce qui entoure {} est facultatif