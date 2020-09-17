# 金床

## パッケージ

`Mods.rockytweaks.Anvil`

## 加算

### Single

JEIで個別に表示されるアンビルレシピを個別に作成します。

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockyweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### レシピセット

JEIが選択可能なオプションを通して循環させる複数のアンビルレシピを作成します。

```zenscript
// addRecipe(IItemstack input1, IItemstack[] input2, IItemstack[] output, int[] exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32
  ],
  [
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32
  ]
);
```

## 削除

アンビルは、通常の意味でレシピを使用しませんが、特定の入力または出力を削除/ブラックリストにすることができます。

```zenscript
// remove(IIngredient[] inputs)
// remove(IIngredient output) - Remove an output

// Blacklist Mending Enchant (input)
Anvil.remove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V on a Diamond Sword (inputs)
mods.rockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Blacklist Enchanted Books (output)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
