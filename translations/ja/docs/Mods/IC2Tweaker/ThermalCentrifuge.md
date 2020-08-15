# サーマル遠心症

## パッケージ

`import mods.ic2.ThermalCentrifuge;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**
- **@Optional int minHeat**

## 加算

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] outputs, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## 削除

- Ic2 Experimental を使用してレシピを削除する場合は、 `config/ic2/thermal_centrifuge.ini` 内の対応する行を削除してください。
- Ic2 Classic と Ic2c Extras を使用している場合、レシピを削除するには、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。