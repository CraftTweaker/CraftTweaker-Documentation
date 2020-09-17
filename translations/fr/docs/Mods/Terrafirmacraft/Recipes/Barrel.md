# Tonneau

## Paquet
```zenscript
Importer mods.terrafirmacraft.Baril ;
```

## Ajouter
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## Retirer

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- Au moins une sortie (liquide ou objet) doit être fournie, à la fois pour enlever et ajouter des recettes.