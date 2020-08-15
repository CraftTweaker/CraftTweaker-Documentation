# format@@0 Rolling_Machine

## Importation du paquet en cours
`mods.techreborn.rollingMachine`

## Ajout de recettes
```zenscript
mods.techreborn.rollingMachine.addShaped(IItemStack, IIngredient[][] ingredients);
mods.techreborn.rollingMachine.addShapeless(IItemStack output, IIngredient[] ingredients);
```

## Suppression des recettes
```zenscript
mods.techreborn.rollingMachine.removeRecipe(IItemStack output);
mods.techreborn.rollingMachine.removeAll();
```