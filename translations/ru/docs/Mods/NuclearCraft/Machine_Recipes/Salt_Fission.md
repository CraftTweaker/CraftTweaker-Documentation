# Солевое Fission

## Импортирование пакета
`mods.nuclearcraft.salt_fission`

## Добавление рецептов
```zenscript
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_fission.removeAllRecipes();
```