# Resonator

ModTweaker ermöglicht das Hinzufügen oder Entfernen von zusätzlichen Utilities 2 Resonatorrezepten

## Anruf

Sie können das Resonator-Paket mit `mods.extrautils2.Resonator` aufrufen

## Entfernen

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack outout);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Addition

```zenscript
<br /><br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```