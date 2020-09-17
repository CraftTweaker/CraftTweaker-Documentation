# Congélateur d'aspirateur

## Importation du paquet en cours
`Congélateur d'aspirateur`

## Ajout de recettes
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(sortie IItemStack, entrée IIngredient, temps int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```