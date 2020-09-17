# Thingies alimentées :: Incinérateur

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker.incineratorTweaker comme ça ;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // vérifie <logKeys> la sortie pour les clés valides
it().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(input: IItemStack, power: Long, outputs: Tableau<WeightedItemStack>)
```

`Puissance` représente le nombre total d'unités d'énergie (RF, T ou FE) que l'élément d'entrée va générer.

##### Exemple

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).