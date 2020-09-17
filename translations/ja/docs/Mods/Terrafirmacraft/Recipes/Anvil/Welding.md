# 金床溶接機

## パッケージ
```zenscript
import mods.terrafirmacraft.Welding;溶接;
```

## 追加

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack output, int minTier);
```

## 削除

```zenscript
Welding.removeRecipe(IItemStack output);
Welding.removeRecipe(String registryName);
```
- アンビルのレシピと同様に、ここでも同じ入力ルールが適用されます。 入力は偽造可能であり(鍛造機能をアイテムに登録するには [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) を参照)、スタックすることはできません。