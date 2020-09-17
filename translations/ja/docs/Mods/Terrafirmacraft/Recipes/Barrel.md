# バレル

## パッケージ
```zenscript
import mods.terrafirmacraft.Barrel;バレル;
```

## 追加
```zenscript
Barrel.addRecipe(レジストリ名を文字列化します, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int hours);
```

## 削除

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Optional ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- レシピの削除と追加の両方のために、少なくとも1つの出力(液体またはアイテム)を供給する必要があります。