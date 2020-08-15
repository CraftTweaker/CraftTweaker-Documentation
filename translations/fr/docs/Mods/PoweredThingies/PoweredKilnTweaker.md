# Thingies Powered :: Four alimenté

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker.poweredKilnTweaker en tant que pkt;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // vérifie <logKeys> la sortie pour les clés valides
pkt().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Exemple

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).