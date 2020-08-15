# Überlebende

## Blöcke hacken

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient Eingabe, IItemStack Ausgabe, OutputMultiplier, hitCountMultiplier);
```

##### Beispiel

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(IIngrediente Ausgabe, Ingrediente Eingabe);
```

##### Beispiel

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Trockenrausch

### InputStack, OutputStack, Zeit in Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient Eingabe, IItemStack Ausgabe, Int Zeit);
```

##### Beispiel

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngrediente Ausgabe, Ingrediente Eingabe);
```

##### Beispiel

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack kann Erzwörterbuch sein und alles, was von {} umgeben ist, ist optional