# アイテムステージ

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 Item Stagesを使用すると、Modpack作成者が設定したカスタム進行システムにアイテムとブロックを配置することができます。 プレイヤーが必要なステージを持っていない場合、プレイヤーはアイテムの使用に問題があります。 これを行う方法の詳細については、こちらをご覧ください [](https://minecraft.curseforge.com/projects/item-stages)

## アイテムをステージングする

このModに制限される項目には、ステージに関連付ける必要があります。 これはいくつかの異なる方法で行うことができます。

```zenscript
// Stages a single block or item. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// 部分NBTを持つアイテムをステージングします。 たとえば、この段階では、すべてのLV5エンチャント本。
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchants: [{lvl: 5 as short}]}));

// 鉱石辞書タグを持つすべてのアイテムをステージします。
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// 特定の Mod によって追加されたすべてのアイテムをステージングします。
mods.ItemStages.stageModItems("stage_name", "modid");

// 特定のアイテムからステージを削除し、stageModItemsとペアリングするとスクリプトのサイズを小さくするのに便利です。
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## ステージング液体format@@0

あなたは液体をステージングしたい場合があります、これは主にJEIにそれらを隠すために行われます。

```zenscript
// Steages a single fluid, like water.
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## ステージングエンチャント数

エンチャントを設定すると、エンチャントが付いているアイテムを使用できなくなります。

```zenscript
// Stages a specific enchantment この場合の保護。
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// 特定のエンチャントをステージングします。 この場合の保護 II 。
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## なじみのないアイテム名を変更します。

非表示の間、制限されたアイテムに新しい名前を付けることができます。 これは、あなたのパックにジョークや微妙な伝承を追加するために使用することができます。

```zenscript
// Sets all wool to be name "Clump of Fur" for players who have the right stage.
mods.ItemStages.setUnindiarName("Kump of Fur", <minecraft:wool:*>);
```

## ツールチップをステージングする

ツールチップの一部をステージングして情報を非表示にできます。 これは、ほとんどのアイテムに「EMC:」ツールチップを追加するプロジェクト E のようなモッドをステージングしようとするときに特に便利です。

```zenscript
// Removes any line in a tooltip that starts with "EMC:)
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## レシピカテゴリをステージングする

JEIを使用すると、レシピカテゴリ全体にアクセスできます。 たとえば、炉のカテゴリをステージングしていて、プレイヤーがステージを持っていない場合、炉のレシピを見ることはできません。

```zenscript
// 特定のレシピカテゴリをステージングします。 この例では、アンビルカテゴリーを上演しています。
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```