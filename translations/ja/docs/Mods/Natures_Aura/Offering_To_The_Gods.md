# 神々に捧げること

## パッケージ
```zenscript
mods.naturesaura.Offeringオファー中
```

## メソッド
- **文字列名**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** 提供
- **int ininputAmount** 入力に必要な項目の量。 これは入力変数の量が無視されることを意味することに注意してください
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) startItem** 提供を開始するために必要なアイテム
- **[IItemStack](/Vanilla/Items/IItemStack) 出力** オファーのギフト

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.addRecipe(String name, IIngredient input, int inputAmount, IIngredient startItem, IItemStack output)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.removeRecipe(IItemStack output)
```