# Industrie-Elektrolyzer

## Paket wird importiert
`mods.techreborn.industrialElectrolyzer`

## Rezepte hinzufügen
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IZutat);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack Output);
mods.techreborn.industrialElectrolyzer.removeAll();
```