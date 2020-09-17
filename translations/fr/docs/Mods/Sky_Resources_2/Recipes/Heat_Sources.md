# Sources de chaleur

Le paquet *sources de chaleur* est utilisé pour ajouter ou retirer des sources de chaleur pour certains machines/processus.

**Note: Ces fonctions ne fonctionnent que pour les éléments qui ont un formulaire de bloc!**

## Appel en cours

Vous pouvez appeler le paquet *heatsources* en utilisant `mods.skyresources.heatsources`

## Ajout de source de chaleur

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Enlèvement de la source de chaleur

```zenscript
//mods.skyresources.heatsources.remove(IItemStack output);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```