# Centrifuga

ModTweaker consente di aggiungere o rimuovere la silvicoltura Ricette Centrifughe

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.Centrifuge`

## Rimozione Ricetta

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Addizione Reipe

```zenscript
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack ingredienti, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```