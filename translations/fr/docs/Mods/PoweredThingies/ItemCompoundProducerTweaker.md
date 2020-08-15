# Thingies alimentées :: Producteur de produits composés

### Importation en cours

```zenscript
importer mods.poweredthingies.Tweaker.itemCompoundProducerTweaker en tant que icp ;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // vérifie <logKeys> la sortie pour les clés valides 
icp().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Exemple

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).