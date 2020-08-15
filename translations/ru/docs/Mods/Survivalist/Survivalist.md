# Выживание

## Обрушивающий блок

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient input, IItemStack, outputMultiplier, hitCountMultiplier);
```

##### Пример

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### ВыходStack, {InputStack}

```zenscript
Гигагерц выживания.Chopable.removeRecipe(IIngredient output, Ingredient input);
```

##### Пример

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## Стойка для сушки

### InputStack, OutputStack, Time in Ticks

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient input, IItemStack, int time);
```

##### Пример

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### ВыходStack, {InputStack}

```zenscript
Гигагерц выживания.Dryable.removeRecipe(IIngredient output, Ingredient input);
```

##### Пример

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack может быть ore словарь и все окружённые {} необязательным