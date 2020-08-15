# Seperator odśrodkowy

## Pakiet

`[PLACEHOLDER] mods.thermalexpansion.Centrifuge`

## Dodanie

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] wyjścia IItemStack, ILiquidStack płynne, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Dodanie mobów

`płyn` może być null, w którym to przypadku zostanie użyty domyślny rozkład termiczny, kwota obliczona z pola `xp` przy użyciu domyślnej `XP_TO_MB` stałej z rozmieszczenia termicznego. Gdy używasz niestandardowego płynu, pole `xp` jest ignorowane.

**Brak niestandardowego płynu**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] outputs, @Nullable ILiquidStack fluid, int Energie, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Niestandardowy płyn**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## Usuwanie

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Usuwanie mobów

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```