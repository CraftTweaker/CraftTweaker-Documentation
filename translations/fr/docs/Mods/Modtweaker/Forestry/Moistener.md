# Hydratant

ModTweaker vous permet d'ajouter ou de supprimer des recettes Moistener forestières

## Appel en cours

You can call the package using `mods.forestry.Moistener`

## Suppression de la recette

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Ajouter

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack, IItemStack input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Retrait de Carburant

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Ajout de carburant

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack, IItemStack produit, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Paramètre                | Type de texte                            | Libellé                                                                                                              |
| ------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Élément                  | [IItemStack](/Vanilla/Items/IItemStack/) | Objet pour devenir un carburant valide pour le Moistener                                                             |
| Produit                  | [IItemStack](/Vanilla/Items/IItemStack/) | Élément qui laissera la fente de travail de l'humidificateur (par exemple, le blé mouillé ou le paillet).            |
| format@@0 MoistenerValue | Indice                                   | Combien cet article contribue au produit final de l'humidité.                                                        |
| étape                    | Indice                                   | Quelle étape ce produit représente. Les ressources avec une valeur de phase inférieure seront consommées en premier. |