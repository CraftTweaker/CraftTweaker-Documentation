# Фейбер

## Модератор действий

### Импортирование пакета
`mods.nuclearcraft.FissionModerator`

### Добавление рецептов
```zenscript
mods.nuclearcraft.Модератора.add(IIngredient block, int fluxFactor, двойная эффективность);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.Модератор.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();
```

## Рефлектор Действия

### Импортирование пакета
`mods.nuclearcraft.Рефлектор работы`

### Добавление рецептов
```zenscript
mods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();
```

## Излучатель Fission

### Импортирование пакета
`mods.nuclearcraft.Излучатель`

### Добавление рецептов
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxed, double heatPerFlux, double efficiency, double radiation);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.Ручной радиатор.removeRecipeWithInput(Ingredient itemput);
mods.nuclearcraft.Радиометр FissionIrradiator.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Убрать рецепты();
```

## Одежда кровати из Пузыря

### Импортирование пакета
`mods.nuclearcraft.Мужчины`

### Добавление рецептов
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, двойная эффективность, int criticality, boolean selfing, double radiation);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();
```

## Твердое топливо

### Импортирование пакета
`mods.nuclearcraft.Солидарность`

### Добавление рецептов
```zenscript
mods.nuclearcraft.Солидарность Fission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### Удаление рецептов
```zenscript
mods.nuclearcraft.Солидарность.removeRecipeInput(Ingredient Input);
mods.nuclearcraft.Солидарность Fission.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.солидарная деятельность.removeAllRecipes();
```

## Отопление Fission

### Импортирование пакета
`mods.nuclearcraft.Отопление работы`

### Добавление рецептов
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerputMB);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();
```