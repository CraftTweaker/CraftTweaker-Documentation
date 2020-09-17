# Superviviente

## Bloque de corte

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(entrada IIngredient, salida IItemStack, salidaMultiplier, hitCountMultiplier);
```

##### Ejemplo

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### SalidaStack, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(salida IIngredient, entrada IIngredient);
```

##### Ejemplo

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Rack de secado

### InputStack, OutputStack, Tiempo en Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(entrada IIngredient, salida ItemStack, hora int);
```

##### Ejemplo

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### SalidaStack, {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngredient output, IIngredient input);
```

##### Ejemplo

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack puede ser un diccionario de minerales y cualquier cosa rodeada por {} es opcional