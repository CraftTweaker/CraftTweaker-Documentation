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
<br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(&lt;minecraft:redstone_block&gt;, &lt;minecraft:gold_block&gt;, 100);
mods.extrautils2.Resonator.add(&lt;minecraft:gold_block&gt;, &lt;minecraft:iron_block&gt;, 200, false);
```