# Moistener

ModTweaker allows you to add or remove forestry Moistener Recipes

## Appel en cours

You can call the package using `mods.forestry.Moistener`

## Recipe Removal

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Ajouter

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack output, IItemStack input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Fuel Removal

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Fuel Addition

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Paramètre      | Type de texte                            | Libellé                                                                                      |
| -------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| Élément        | [IItemStack](/Vanilla/Items/IItemStack/) | Item to become a valid fuel for the Moistener                                                |
| product        | [IItemStack](/Vanilla/Items/IItemStack/) | Item that will leave the moistener's working slot (e.g. mouldy wheat or mulch).              |
| MoistenerValue | Indice                                   | How much this item contributes to the final product of the moistener.                        |
| stage          | Indice                                   | What stage this product represents. Resources with lower stage value will be consumed first. |