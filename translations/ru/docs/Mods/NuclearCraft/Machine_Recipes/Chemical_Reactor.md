# Химический Реактор

## Импортирование пакета
`ядерный реактор`

## Добавление рецептов
```zenscript
mods.nuclearcraft.chemical_reactor.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.chemical_reactor.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.chemical_reactor.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.chemical_reactor.removeAllRecipeWithOutput();
```