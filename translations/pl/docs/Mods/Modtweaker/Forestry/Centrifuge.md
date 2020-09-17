# Wirówka

ModTweaker pozwala na dodanie lub usunięcie przepisów dotyczących wirówek leśnych

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Centrifuge`

## Usuwanie przepisów

```zenscript
//mods.forestry.Centrifuge.removeRecipe(Input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Dodanie podglądu

```zenscript
//mods.forestry.Centrifuge.addRecipe(WysokicjonalnaItemStack[] wyjścia, składniki IItemStack, int packingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```