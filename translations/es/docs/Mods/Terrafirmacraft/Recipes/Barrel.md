# Cañón

## Paquete
```zenscript
import mods.terrafirmacraft.Barrel;Barril;
```

## Adicional
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## Eliminar

```zenscript
Barrel.removeRecipe(@Optional ItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- Se debe suministrar al menos una salida (líquido u objeto) para la eliminación y adición de recetas.