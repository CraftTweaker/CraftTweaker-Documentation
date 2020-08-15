# Soudure des Enclumes

## Paquet
```zenscript
Importer mods.terrafirmacraft.Soudure;
```

## Ajouter

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack sortie, int minTier);
```

## Retirer

```zenscript
Welding.removeRecipe(IItemStack output);
Welding.removeRecipe(String registryName);
```
- Comme pour les recettes d'enclume, les mêmes règles s'appliquent ici. L'entrée doit être forgeable (voir [Registre d'objet](/Mods/Terrafirmacraft/ItemRegistry) pour enregistrer la capacité de forgeage à un objet) et ne peut pas être empilée.