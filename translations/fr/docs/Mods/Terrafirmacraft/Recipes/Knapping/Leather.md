# Coup de Cuir

## Paquet
```zenscript
Importer mods.terrafirmacraft.leatherKnapping;
```

## Ajouter

```zenscript
leatherKnapping.addRecipe(String registryName, IItemStack sortie, String... pattern);
```

## Retirer

```zenscript
leatherKnapping.removeRecipe(IItemStack sortie);
leatherKnapping.removeRecipe(String registryName);
```

## Exemple
```zenscript
// recette carquoise
leatherKnapping.addRecipe("recette", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```