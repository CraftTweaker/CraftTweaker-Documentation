# Thingies Powered :: Compound Maker

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker.compoundTweaker comme ct;
```

### Liste des clés, Suppression des recettes par clé, Effacement

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // vérifie <logKeys> sortie pour les clés valides
ct().clear()
```

### Ajout de la recette

##### Signature

```zenscript
addRecipe(output: IItemStack, left: ILiquidStack?, top: Array<IItemStack>?, right: ILiquidStack?, bottom: Tableau<IItemStack>?)
```

##### Exemple

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Notes

Toutes ces actions seront mises en cache et exécutées après que le registre par défaut de cette machine ait fini d'enregistrer toutes les recettes (y compris celles des jsons personnalisés).