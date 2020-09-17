# Resonator

ModTweaker pozwala na dodanie lub usunięcie dodatkowych przepisów 2 Resonator

## Dzwonienie

Możesz wywołać pakiet Resonator używając `mods.extrautils2.Resonator`

## Usuwanie

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack out);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Dodanie

```zenscript
<br />//1 GP = 100 energii
//mods.extrautils2.Resonator.add(wyjście IItemStack, IItemStack input, int Energia, @Opcjonalny Boolean addOwnerTag);
mody. xtrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```