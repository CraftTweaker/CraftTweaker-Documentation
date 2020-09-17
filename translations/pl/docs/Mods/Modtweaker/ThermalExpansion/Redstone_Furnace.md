# Piec Czerwonego Kamienia

## Pakiet

`Piec Czerwonego kamienia`

## Dodanie

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(wyjście IItemStack, IItemStack, energia int);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Usuwanie

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(wejście IItemStack);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Dodanie pirolitycznego zwiększenia

***Zauważ, że energia jest pomnożona przez `1.5`. Jeśli określisz `2000` energię, przepis będzie kosztować `3000` RF. Podobnie, jeśli określisz `1500`, będzie to kosztować `2250` RF.***

Przykładowy przepis na przekształcenie węgla drzewnego w koks węglowy, wytwarzając w tym procesie 250 mb oleju kreozotowego.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(wyjście IItemStack, wejście IItemStack, energia int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Pirolityczne usunięcie

Usuwa przepis na przekształcenie węgla w koks węglowy.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```