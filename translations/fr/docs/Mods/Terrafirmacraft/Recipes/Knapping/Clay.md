# Coup d'argile

## Paquet
```zenscript
Importer mods.terrafirmacraft.ClayKnapping ;
```

## Ajouter

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack sortie, String... pattern);
```

## Retirer

```zenscript
ClayKnapping.removeRecipe(IItemStack sortie);
ClayKnapping.removeRecipe(String registryName);
```

## Exemple
```zenscript
ClayKnapping.addRecipe("unfired_vaisel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```