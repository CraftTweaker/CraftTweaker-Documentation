# Canon

## Paquet

`Importer mods.ic2.Canner;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le produit
- **[Conteneur en ingrédients](/Vanilla/Variable_Types/IIngredient/) </a>** L'ingrédient à « remplir »
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) remplissage** L'ingrédient avec lequel est rempli dans le conteneur

## Ajouter une recette de bouteille

```zenscript
mods.ic2.Canner.addBottleRecipe(IItemStack, IIngredient container, IIngredient filler);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## Ajouter une recette enrichie

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack, entrée ILiquidStack, additif IIngredient);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```