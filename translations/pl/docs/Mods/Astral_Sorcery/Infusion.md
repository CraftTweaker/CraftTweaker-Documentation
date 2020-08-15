# Przepis na infuzję z gwiazdką

Możesz dodawać i usuwać infuzje wytwarzania.

## Dzwonienie

Możesz wywołać pakiet InfusionRecipe używając `mods.astralsorcery.StarlightInfusion`.

## Usuwanie

Spowoduje to usunięcie pierwszego wlewu, który odkryje, że tworzy dostarczony [IItemStack](/Vanilla/Items/IItemStack/) `wyjściowy`.  
Jeśli istnieje wiele receptur, które zwracają podaną wartość, musisz wywołać tę metodę wielokrotnie!

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(wyjście IItemStack);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Dodanie

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(wprowadzanie IItemStack, wyjście IItemStack, konsumeMultiple, float consumption Chance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```