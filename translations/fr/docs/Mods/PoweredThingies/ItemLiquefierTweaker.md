# Thingies Powered :: Liquefier Item

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker.itemLiquefierTweaker comme ilt;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // vérifie la sortie <logKeys> pour les clés valides
ilt().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Exemple

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).