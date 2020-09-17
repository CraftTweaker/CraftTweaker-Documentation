# ブラスト炉

## パッケージ

`import mods.ic2.BlastFurnace;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**
- **int totalFluidCost** Per-tick IC2 liquefied air cost, measured in mB/tick
- **int time** Total time cost, measured in ticks

## 加算

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] outputs, IIngredient input, int totalFluidCost, int time);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## 削除

今のところ、 `config/ic2/blast_furnace.ini`内の対応する行を削除してください。