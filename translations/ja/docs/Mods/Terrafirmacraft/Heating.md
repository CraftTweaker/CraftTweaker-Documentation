# Heating

## パッケージ
```zenscript
import mods.terrafirmacraft.Heating;Heating;
```

## 追加

```zenscript
Heating.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp, float maxTemp);
```
- transformTemp is at which temperature the recipe completely transform the input into the output stack.
- maxTemp is at which temperature the input is destroyed. For a complete reference, check [Heating Temperatures](/Mods/Terrafirmacraft/HeatingTemperatures)

## 削除

```zenscript
Heating.removeRecipe(IItemStack output);
Heating.removeRecipe(String registryName);
```