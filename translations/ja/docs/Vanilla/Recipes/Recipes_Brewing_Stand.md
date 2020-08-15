# Brewing Recipe Handler

## 醸造所のハンドラーにアクセス

`brewing` [global キーワード](/Vanilla/Global_Functions/) を使用して、醸造用ハンドラーにアクセスできます。

## レシピメソッド

醸造レシピは3つのパートから構成されています:

1. 入力（3つの「ボトルスロット」にあるもの）
2. 1 つ以上の可能な材料 (ネザーワートが行く上部のスロットに入るもの)
3. 出力 (レシピが何を返すか)

### 醸造レシピを追加

```zenscript
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Optional boolean hidden);
brewing.addBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing.addBrew(IIngredient input, IIngredient[] ingredients, IItemStack output, @Optional boolean hidden);
brewing.addBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### 醸造レシピを削除

JEIバージョン4.15.0.275以降でのみ動作します。

```zenscript
//brewing.removeRecipe(IItemStack input, IItemStack input);
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```