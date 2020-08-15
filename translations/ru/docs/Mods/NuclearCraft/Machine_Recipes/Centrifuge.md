# Центрифуга

## Импортирование пакета
`mods.nuclearcraft.centrifuge`

## Добавление рецептов
```zenscript
mods.nuclearcraft.centri<unk> .addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4 , @Optional double timeMultiplier, @Optional double double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.centri<unk> .removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.centri<unk> .removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.centri<unk> .removeAllRecipes();
```