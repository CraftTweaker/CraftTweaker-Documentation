# エンチャンター

## パッケージ

`import mods.enderio.Enchanter;`

## メソッド

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) 出力** 出力エンチャント。

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) input** このエンチャントを作るために使用するアイテム。

**- int amountPerLevel** エンチャントのレベルあたりの入力項目の数。

**- double costMultiplier** レシピの高さを変更するために使用されます。

## 加算

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## 削除

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```