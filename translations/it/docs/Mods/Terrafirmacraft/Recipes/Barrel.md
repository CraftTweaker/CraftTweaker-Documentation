# Barile

## Pacchetto
```zenscript
import mods.terrafirmacraft.Barile;
```

## Addizione
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## Rimozione

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- Almeno una uscita (liquido o elemento) deve essere fornita, sia per la rimozione e l'aggiunta di ricette.