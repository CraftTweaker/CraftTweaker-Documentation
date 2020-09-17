# Transmutation de la lumière de l'étoile

Vous pouvez ajouter et supprimer les Transmutations de Starlight

## Appel en cours

Vous pouvez appeler le package LightTransmutations en utilisant `mods.astralsorcery.LightTransmutation`.

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve que les retours fournis [IItemStack](/Vanilla/Items/IItemStack/) `sortie` et utilise `matchStack` pour déterminer si elle doit également correspondre aux métadonnées.  
S'il y a plusieurs recettes qui retournent la sortie fournie, vous devez appeler cette méthode plusieurs fois !

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Ajouter

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut ,double coût);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```