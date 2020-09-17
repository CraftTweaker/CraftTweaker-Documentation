# Chauffage

## Paquet
```zenscript
Importer mods.terrafirmacraft.Chauffage;
```

## Ajouter

```zenscript
format@@0 Heating.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp, float maxTemp);
```
- transformTemp est à la température de laquelle la recette transforme complètement l'entrée dans la pile de sortie.
- maxTemp est à la température à laquelle l'entrée est détruite. Pour une référence complète, cochez [Températures de chauffage](/Mods/Terrafirmacraft/HeatingTemperatures)

## Retirer

```zenscript
Chauffage.removeRecipe(sortie IItemStack);
Chauffage.removeRecipe(String registryName);
```