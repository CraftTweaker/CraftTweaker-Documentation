# Recettes d'infusion de la lumière des étoiles

Vous pouvez ajouter et supprimer des perfusions d'artisanat.

## Appel en cours

Vous pouvez appeler le package InfusionRecipe en utilisant `mods.astralsorcery.StarlightInfusion`.

## Enlèvement

Cela supprimera la première perfusion qu'il trouve qui crée la sortie [IItemStack](/Vanilla/Items/IItemStack/) ``.  
S'il y a plusieurs recettes qui retournent la sortie fournie, vous devez appeler cette méthode plusieurs fois !

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(sortie IItemStack);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Ajouter

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(entrée IItemStack, sortie IItemStack, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```