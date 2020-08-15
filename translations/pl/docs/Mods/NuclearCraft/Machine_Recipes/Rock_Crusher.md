# Kamień Kruszący

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.rock_crusher`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.rock_crusher.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny powerMultiplier, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.rock_crusher.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3]);
mods.nuclearcraft.rock_crusher.removeAllRecipes();
```