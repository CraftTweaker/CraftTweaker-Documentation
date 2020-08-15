# Résonateur

ModTweaker vous permet d'ajouter ou de supprimer des utilitaires supplémentaires 2 Recettes de résonateur

## Appel en cours

Vous pouvez appeler le package Resonator en utilisant `mods.extrautils2.Resonator`

## Enlèvement

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack outout);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Ajouter

```zenscript
<br /><br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```