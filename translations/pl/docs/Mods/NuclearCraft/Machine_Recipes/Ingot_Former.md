# Sztabka przeszła

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.ingota`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces Promieniowania]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```