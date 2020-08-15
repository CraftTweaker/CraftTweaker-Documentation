# Thingies alimentées :: Fabricant de poudre

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker.powderMakerTweaker en pmt;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // vérifie <logKeys> la sortie pour les clés valides
pmt().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Exemple

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).