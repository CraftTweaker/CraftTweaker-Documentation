# Heating

## Package
```zenscript
import mods.terrafirmacraft.Heating;
```

## Addition

```zenscript
Heating.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp, float maxTemp);
```
- transformTemp is at which temperature the recipe completely transform the input into the output stack.
- maxTemp is at which temperature the input is destroyed. For a complete reference, check [Heating Temperatures](/Mods/Terrafirmacraft/HeatingTemperatures)

## Removal

```zenscript
Heating.removeRecipe(IItemStack output);
Heating.removeRecipe(String registryName);
```