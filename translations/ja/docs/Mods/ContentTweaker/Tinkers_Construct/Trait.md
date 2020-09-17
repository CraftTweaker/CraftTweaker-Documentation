# 形質表現

形質表現は、ティンカーズの形質の構築を表します。  
このようなオブジェクトは、 [トレイトビルダー](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) または [トレイトブラケットハンドラー](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/) から取得できます。

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter     | タイプ |
| ------------- | --- |
| identifier    | 文字列 |
| commandString | 文字列 |

## 形質アイテムの追加

指定された成分とティンカーの工具鍛造工具を組み合わせると、修飾子として形質を適用できます。

```zenscript
//myTrait.addModifierItem(IIngredient項目, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `アイテム` はマッチングされたアイテムです。 [アイテム条件](/Vanilla/Items/Item_Conditions/) は使用できますが、トランスフォーマーは使用できません。 
- `amountNeeded` は一致するアイテムの量です。 toolforgeが提供するすべてのスロットでそれらを分割することができ、64を超えることもできます。 上記の例では、鉄ブロックを4つ追加する必要があります。 デフォルトは 1 です。
- `amountMatched` は、 `amountNeeded` あたりのトレイトポイントの量です。 上の例では、4つの鉄のブロックは、2つの特徴点を与えます。 デフォルトは 1 です。

## トレイトデータへのアクセス

トレイトデータは、トレイトに属し、itemBoundであるデータです。 そのため、 [IItemStack](/Vanilla/Items/IItemStack/) を提供し、 [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/) オブジェクトを取得することができます。

    val myTraitData = myTrait.getData(itemWithTrait);