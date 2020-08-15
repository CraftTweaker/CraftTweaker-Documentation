# Rozszczepienie solą

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.salt_fission`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Opcjonalny podwójny proces Promieniowania]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_fission.removeAllRecipes();
```