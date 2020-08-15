# Sieving

## Paquet

Pour accéder à `Sieve` sans préciser le chemin complet, vous pouvez importer le paquet en haut de votre script avec les éléments suivants :

```zenscript
mods.exnihilocreatio.Sieve
```

## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) bloc** Le bloc qui lâche la sortie.
- **[IItemStack](/Vanilla/Items/IItemStack/) affiche** L'élément qui tombe du bloc..
- **Chance flottante** La chance doit être entre 0 et 1.

## Maillage de chaîne

```zenscript
addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Maillage de silex

```zenscript
addIronMeshRecipe(IIngredient, IItemStack, Float chance);
addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Maillage de fer

```zenscript
addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Maillage en Diamant

```zenscript
addStringMeshRecipe(IIngredient, IItemStack, Float chance);
addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Retirer

```zenscript
Sieve.removeAll();
```
