# Resonator

ModTweaker allows you to add or remove Extra Utilities 2 Resonator Recipes

## Calling
You can call the Resonator package using `mods.extrautils2.Resonator`

## Removing

```JAVA
//mods.extrautils2.Resonator.remove(IItemStack outout);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```


## Addition

```JAVA

//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```