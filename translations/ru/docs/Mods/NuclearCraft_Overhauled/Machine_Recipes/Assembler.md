# Сборщик

## Импортирование пакета
`mods.nuclearcraft.Сборщик`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Assembler.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemInput3, IIngredient itemInput4, Igredient itemOutput, @Optional Double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Assembler.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2, Igredient itemInput3, IIngredient itemInput4);
mods.nuclearcraft.Assembler.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Сборщик .removeAllRecipes();
```