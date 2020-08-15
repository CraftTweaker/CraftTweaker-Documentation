# Catalyseurs de fusion alchimique

Le paquet *catalyseurs* est utilisé pour ajouter ou supprimer des catalyseurs pour la fusion alchimique.

## Appel en cours

Vous pouvez appeler le paquet *catalyseurs* en utilisant `mods.skyresources.catalysts`

## Ajout de catalyseur

```zenscript
//mods.skyresources.catalysts.add(IItemStack stack, valeur flottante);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## Destruction du catalyseur

```zenscript
//mods.skyresources.catalysts.remove(IItemStack output);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```