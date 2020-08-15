# Thingies alimentées :: Brûleur de liquide :: Refroidissement

### Importation en cours

```zenscript
importer mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker en tant que refroidisseur ;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // vérifie la sortie <logKeys> pour les clés valides
coolant().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addCoolant(fluide: ILiquidStack, timeMultiplier : Float)
```

`timeMultiplier` est la valeur qui sera utilisée pour augmenter (ou diminuer) le nombre ticks un combustible va brûler.

##### Exemple

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).