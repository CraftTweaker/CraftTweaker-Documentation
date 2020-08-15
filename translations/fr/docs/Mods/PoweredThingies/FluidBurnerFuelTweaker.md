# Thingies alimentées :: Brûleur de liquide :: Carburant

### Importation en cours

```zenscript
importer mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker comme combustible ;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
fuel().logKeys()
fuel().removeRecipe('liquid:fluid_lava') // vérifie la sortie <logKeys> pour les clés valides
fuel().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addFuel(fluide: ILiquidStack, ticks: Int)
```

`ticks` représente le nombre de ticks que le carburant spécifié va consommer.

##### Exemple

```zenscript
carburant().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).