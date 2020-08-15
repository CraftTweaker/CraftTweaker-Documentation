# Mikser solny

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.salt_mixer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.salt_mixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny powerMultiplier, @Opcjonalny podwójny proces Promieniowania]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.salt_mixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.salt_mixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_mixer.removeAllRecipes();
```