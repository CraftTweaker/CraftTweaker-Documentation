# 加熱中

## パッケージ
```zenscript
import mods.terrafirmacraft.Heating;加熱;
```

## 追加

```zenscript
Heating.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp, float maxTemp);
```
- transformTempは、レシピが入力を完全に出力スタックに変換する温度です。
- maxTempは入力が破棄される温度です。 完全な参照については、 [加熱温度](/Mods/Terrafirmacraft/HeatingTemperatures) を参照してください。

## 削除

```zenscript
Heating.removeRecipe(IItemStack output);
Heating.removeRecipe(String registryName);
```