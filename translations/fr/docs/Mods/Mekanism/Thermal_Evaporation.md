# Évaporation thermique

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de l'évaporation thermique via la commande `/ct mekrecipes thermalevaporation`

## Ajouter

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Retirer

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de plantes d’évaporation thermiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
Supprimer toutes les recettes ();
```