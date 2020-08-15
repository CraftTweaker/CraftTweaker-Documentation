# Activateur de Neutron Solaire

Depuis le Mékanisme 9.7. il est maintenant possible de voir toutes les chaînes de recettes de l'Activateur Neutre Solaire via la commande `/ct mekrecipes solarneutronactivator`

## Ajouter

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Retirer

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional Igredient gasOutput);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de l'Activateur Solar Neutron. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mod mekanism.solarneutronactivator.removeAllRecipes();
```