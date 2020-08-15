# Broyeur

ModTweaker vous permet d'ajouter ou de supprimer des Utilitaires Supplémentaires 2 Recettes Crusher

## Appel en cours

Vous pouvez appeler le paquet Crusher en utilisant `mods.extrautils2.Crusher`

## Enlèvement

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack outout);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Ajouter

```zenscript
//mods.extrautils2.Crusher.add(sortie IItemStack, entrée IItemStack, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0,1 F );
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```