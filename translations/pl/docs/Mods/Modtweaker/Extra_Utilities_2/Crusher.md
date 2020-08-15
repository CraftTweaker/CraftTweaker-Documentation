# Kruszący

ModTweaker pozwala na dodanie lub usunięcie dodatkowych przepisów dla użytkowników 2 Crusher

## Dzwonienie

Możesz wywołać pakiet Crusher używając `mods.extrautils2.Crusher`

## Usuwanie

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack out);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Dodanie

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```