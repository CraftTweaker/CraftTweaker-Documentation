# Extractor

## Importing the Package
`mods.techreborn.extractor`

## Rezepte hinzufügen
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```