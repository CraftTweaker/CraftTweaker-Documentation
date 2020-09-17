# Decay Generator

## Импортирование пакета
`mods.nuclearcraft.decay_generator`

## Добавление рецептов
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOutput, double lifetimeTicks, double energyPerSecond, @Optional double processradiation]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```