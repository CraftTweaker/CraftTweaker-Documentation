# Zentrifuge

ModTweaker erlaubt dir das Hinzufügen oder Entfernen von forstwirtschaftlichen Zentrifuge-Rezepten

## Anruf

You can call the package using `mods.forestry.Centrifuge`

## Rezept entfernen

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Reipe-Zusatz

```zenscript
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] Ausgabe, IItemStack Inhaltsstoffe, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```