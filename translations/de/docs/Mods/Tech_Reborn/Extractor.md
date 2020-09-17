# Extraktor

## Paket wird importiert
`mods.techreborn.extractor`

## Rezepte hinzufügen
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack Output, IIngredient input1, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.extractor.removeInputRecipe(IZutat);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```