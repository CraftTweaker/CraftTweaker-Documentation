# Niszczenie

## Importowanie pakietu
`mods.nuclearcraft.infuser`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny power Multiplier, @Opcjonalny podwójny proces Promieniowania]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```