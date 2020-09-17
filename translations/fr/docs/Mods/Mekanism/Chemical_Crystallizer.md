# Cristallisateur chimique

Depuis le Mékanisme 9.7.0 il est maintenant possible de voir toutes les chaînes de recettes du Cristalliseur Chimique à travers la commande `/ct mekrecipes cristallizer`

## Ajouter

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## Retirer

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional Igredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de cristaux chimiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRecipes();
```