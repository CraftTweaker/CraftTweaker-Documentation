# Fass

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Barrel;
```

## Addition
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optionale IItemStack itemOutput, @Optionale ILiquidStack fluidOutput, int Stunden);
```

## Entfernen

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String RegistryName)
```
- Mindestens eine Ausgabe (flüssig oder Artikel) muss geliefert werden, sowohl zum Entfernen als auch Hinzufügen von Rezepten.