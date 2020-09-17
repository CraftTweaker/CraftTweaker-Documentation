# Broyeur

## Importation du paquet en cours
`grinder mods.techreborn.grinder`

## Ajout de recettes
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack, IIngredient input1, int ticktime, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.grinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```