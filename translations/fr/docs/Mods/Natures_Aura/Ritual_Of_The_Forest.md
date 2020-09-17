# Rituel de la Forêt

## Paquet
```zenscript
mods.naturesaura.TreeRitual
```

## Méthodes
- **Nom de la chaîne**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient) saplingType** La représentation de l'élément de l'arbre qui doit être placé et cultivé dans un arbre
- **[IItemStack](/Vanilla/Items/IItemStack) sortie** Le résultat des rituels
- **init instant** Le temps que le processus prend en ticks
- **[Ingrédient[]](/Vanilla/Variable_Types/IIngredient) objets** Les objets requis pour le rituel

## Ajouter

```zenscript
mods.naturesaura.format@@0 TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## Retirer

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```