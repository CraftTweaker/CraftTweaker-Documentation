# Autel Naturel

## Paquet
```zenscript
mods.naturesaura.Autel
```

## Méthodes
- **Nom de la chaîne**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient) d'entrée** Les autels.
- **[IItemStack](/Vanilla/Items/IItemStack) sortie** Sortie des autels.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient) catalyseur** Le bloc catalyseur qui est placé sur l'un des quatre blocs d'angle, peut être nul
- **int aura** La quantité d'Aura requise pour l'achèvement de la recette
- **int temps** Le temps des processus prennent en ticks

## Ajouter

```zenscript
mods.naturesaura.Altar.addRecipe(String name, IIngredient input, IItemStack sortie, IIngredient catalyst, int aura, int time)
```

## Retirer

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```