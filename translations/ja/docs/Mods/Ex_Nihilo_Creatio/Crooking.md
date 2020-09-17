# <unk>

## パッケージ
```zenscirpt
mods.exnihilocreatio.Clook
```
## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **[IItemStack](/Vanilla/Items/IItemStack/) はドロップする確率があるアイテムに報酬を与える**
- **浮動小数点数** の確率は 0-1 です。
- **浮動小数点数のチャンス** 0-1 の間の確率。

## 加算

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngredient, IItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## 削除

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```