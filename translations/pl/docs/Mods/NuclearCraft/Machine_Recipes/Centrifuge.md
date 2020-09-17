# Wirówka

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.centrifuge`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.centrifuge.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.centrifuge.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.centrifuge.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.centrifuge.removeAllRecipes();
```