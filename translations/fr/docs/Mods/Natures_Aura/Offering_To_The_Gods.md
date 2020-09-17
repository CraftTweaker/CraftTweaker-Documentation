# Offrir aux Dieux

## Paquet
```zenscript
mods.naturesaura.Offrande
```

## Méthodes
- **Nom de la chaîne**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient) d'entrée** L'offre
- **int ininputAmount** Le nombre d'éléments requis pour l'entrée. Notez que cela signifie que le montant de la variable d'entrée est ignoré
- **[Igredient](/Vanilla/Variable_Types/IIngredient) startItem** l'élément requis pour démarrer l'offre
- **[IItemStack](/Vanilla/Items/IItemStack) sortie** Le cadeau de l'offrande

## Ajouter

```zenscript
mods.naturesaura.Offering.addRecipe(String name, IIngredient input, int inputAmount, IIngredient startItem, IItemStack sortie)
```

## Retirer

```zenscript
mods.naturesaura.Offering.removeRecipe(IItemStack sortie)
```