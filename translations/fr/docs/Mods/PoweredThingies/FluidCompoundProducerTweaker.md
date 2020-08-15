# Thingies alimentées :: Producteur de composés liquides

### Importation en cours

```zenscript
importer mods.poweredthingies.Tweaker.fluidCompoundTweaker comme fct;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // vérifie la sortie <logKeys> pour les clés valides
fct().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Exemple

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).