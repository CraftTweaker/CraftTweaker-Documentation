# 錬金術核融合触媒format@@0

*触媒* パッケージは、錬金術用触媒の追加または除去に使用されます。

## 発信中

*触媒* パッケージは、 `mods.skyresources.触媒`を使用して呼び出すことができます。

## 触媒の追加

```zenscript
//mods.skyresources.atalysts.add(IItemStack stack, float value);
mods.skyresources.atalysts.add(<minecraft:diamond>, 4.20);
```

## 触媒除去

```zenscript
//mods.skyresources.atalists.remove(IItemStack output);
mods.skyresources.atalysts.remove(<skyresources:alchemyitemcomponent:2>);
```