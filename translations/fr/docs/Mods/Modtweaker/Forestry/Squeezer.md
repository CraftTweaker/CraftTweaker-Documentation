# Squeezer

ModTweaker vous permet d'ajouter ou de supprimer des recettes Squeezer forestières

## Appel en cours

You can call the package using `mods.forestry.Squeezer`

## Suppression de la recette

Attention, vous ne pouvez pas enlever les recettes qui remplissent ou drainent des contenants de fluide, comme les canettes forestières!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquide, @Optional IIngredient[] ingredients);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Ajout de recette

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] ingredients, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Paramètre   | Type de texte                                                    | Libellé                                                |
| ----------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)                   | Sortie de la recette                                   |
| ingrédients | [IItemStack](/Vanilla/Items/IItemStack/)[]                       | Saisie(s) d'élément de la recette                      |
| timePerItem | Indice                                                           | Quantité de fluide sur les produits organiques requise |
| itemOutput  | [format@@0 WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | Multiplicateur de sortie                               |