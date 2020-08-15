# JEITweaker

## 説明

この mod はJEIにCraftTweakerのサポートを追加します。 CraftTweakerはJEIをネイティブにサポートするために使用しましたが、1.14の書き換えにより、JEIサポートは独自のmodに取り込まれています。


## パッケージ
`mods.jei.JEI`

## アイテム非表示

JEIで指定されたアイテムを非表示にします。 与えられた例はJEIメニューの汚れブロックを非表示にします。

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## カテゴリ非表示

これはJEIの指定されたカテゴリを非表示にします。 与えられた例は、JEIでレシピを検索するときに炉カテゴリを非表示にします。

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.jei.hideCategory("minecraft:炉");
```

デフォルトのカテゴリは次のとおりです。
```zenscript
"minecraft:craft"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Modはさらにカテゴリを追加できます！

## 情報を追加

これにより、JEI!で使用状況を見たときに表示されるアイテムに情報が追加されます。

この正確な例では、ダイヤモンドのアイテムに3行の情報を追加します。

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] in
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

上記のコードが生成されます: ![コミットボックス塗りつぶし](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


