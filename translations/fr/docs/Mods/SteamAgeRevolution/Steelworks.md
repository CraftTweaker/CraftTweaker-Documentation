# Usines d'Acier

Le Steelworks est une machine qui convertit un élément d'entrée et un fluide en un élément de sortie à l'aide de vapeur.

## Appel en cours

Vous pouvez appeler le paquet Steelworks en utilisant `mods.steamagerevolution.Steelworks`.

## Enlèvement

Cette fonction supprime la première recette qu'ils trouvent avec la sortie [IItemStack](/Vanilla/Items/IItemStack/) ``:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// Exemples
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Cette fonction supprime *toutes les recettes* actuellement définies pour les aciers :

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Ajout en cours

Cette fonction est utilisée pour ajouter de nouvelles recettes pour les aciers :

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// Exemples
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
