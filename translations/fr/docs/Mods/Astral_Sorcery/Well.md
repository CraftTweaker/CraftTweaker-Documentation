# Veste de foudre

Vous pouvez ajouter et supprimer des Liquefications Lightwell

## Appel en cours

Vous pouvez appeler le package WellRecipe en utilisant `mods.astralsorcery.Lightwell`.

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve qui retourne la sortie [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fournie` en utilisant l'entrée [IItemStack](/Vanilla/Items/IItemStack/) `fournie`. S'il y a plusieurs recettes qui retournent la sortie fournie, vous devez appeler cette méthode plusieurs fois !

Vous pouvez définir la sortie à `null` pour rechercher uniquement via la pile d'entrée

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Ajouter

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Paramètre                   | Type de paramètre                              | Libellé                                                                                                                                                                                                           |
| --------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input                       | [IItemStack](/Vanilla/Items/IItemStack/)       | L'élément d'entrée                                                                                                                                                                                                |
| Sortie                      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Le retour de Liquid. Seul le type de fluide compte, la quantité dépendra de choses comme jour/nuit et ainsi de suite…                                                                                             |
| outputMultiplier            | flottant                                       | Multiplicateur qui est appliqué avec la lumière étoilée collectée pour calculer le montant du fluide de sortie. Habituellement 0.3 - 1.2 (aka: n'écrivez pas comme 200 ici, si vous voulez rester raisonnable :P) |
| format@@0 shatterMultiplier | flottant                                       | Plus ce multiplicateur est élevé, plus il y a de chances que l'objet catalyseur se brise.                                                                                                                         |
| Couleur HEX                 | Indice                                         | Le code de couleur utilisé pour les particules autour de l'élément survolant.                                                                                                                                     |