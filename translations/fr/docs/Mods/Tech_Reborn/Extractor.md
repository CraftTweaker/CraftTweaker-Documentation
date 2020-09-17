# Extracteur

## Importation du paquet en cours
`mods.techreborn.extractor`

## Ajout de recettes
```zenscript
mods.techreborn.extractor.addRecipe(sortie IItemStack, IIngredient input1, int ticktime, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```