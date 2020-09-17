# 解散者

## パッケージ
`mods.alchemistry.Dissolver解散者`

## メソッド
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - レシピの入力。
- **boolean relativeProbability** - 確率計算 Boolean
- **int roll** - 役割の可能性
- **probabilityGroups** - double の後に任意の # の [IItemStack](/Vanilla/Items/IItemStack/)の配列。 doubleは、そのグループの確率を指します。

## 加算
```zenscript
mods.alchemistry.AtomizerDissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## 削除
```zenscript
mods.alchemistry.AtomizerDissolver.removeRecipe(IIngredient input);
mods.alchemistry.mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();Dissolver.removeAllRecipes();
```

# メモ
既存の解散レシピを変更する開発を容易にするために、コマンドがあります。 持っているアイテムのcrafttweakerレシピを取得し、クリップボードにコピーする/dissolver

相対確率が true の場合、各確率はすべての確率の和に基づいて計算されます。 上記の例では、各ロールと66の石を出力する33.3%の可能性があることを意味します。 砂と鉄鉱石をそれぞれのロールに出力する確率が%です。

相対確率が false の場合、これらの数値は絶対パーセンテージ、つまり 10%の確率で石を出力し、砂と鉄鉱石を出力する可能性が20%(石が出力されたかどうかに関係なく)。 浮動小数点数がサポートされているため、4.5は4.5%を意味します。

