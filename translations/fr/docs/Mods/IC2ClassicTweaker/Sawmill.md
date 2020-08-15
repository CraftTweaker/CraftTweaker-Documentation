# Scierie

## Paquet

```java
Importer mods.ic2.Sawmill;
```

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée**

### Ajouter

```zenscript
mods.ic2.Sawmill.addRecipe(sortie IItemStack, entrée IIngredient);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Retirer

Pour supprimer une recette déjà existante, désactivez simplement la recette correspondante dans `config/ic2/ic2machineRecipes.json`.