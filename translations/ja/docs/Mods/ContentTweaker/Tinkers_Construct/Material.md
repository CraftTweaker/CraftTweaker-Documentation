# マテリアルの表現

材料表現は、ティンカーの建設資材を表します。  
このようなオブジェクトは、 [Material Builder](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) または [Material Bracket Handler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/) から取得できます。

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter     | タイプ |
| ------------- | --- |
| identifier    | 文字列 |
| commandString | 文字列 |

## 材料アイテムの追加

部品ビルダーで指定されたアイテムを使用する場合 材料ポイントの数や修理の量を決めることができます

    //myMaterial.addItem(IIngredient項目, @Optional(1) int amountNeed, @Optional(144) int amountMatched));
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `アイテム` はマッチングされたアイテムです。 [アイテム条件](/Vanilla/Items/Item_Conditions/) は使用できますが、トランスフォーマーは使用できません。 
- `amountNeeded` は一致するアイテムの量です。 toolforgeが提供するすべてのスロットでそれらを分割することができ、64を超えることもできます。 上記の2つ目の例では、鉄ブロックを4つ追加する必要があります。 デフォルトは 1 です。
- `amountMatched` は、 `amountNeeded` あたりの材料ポイントの量です。 2番目の例では、4つの鉄のブロックは2つの材料ポイントを与えます。 デフォルトは 144 (1 インゴット/1 つのマテリアル値) です。

## 材料特性の追加

You can add a trait to the material.  
All items made from this material will then have this trait.  
Uses a [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) or a String with the identifier (recommended), returns void.  
You can also provide a dependency String, that will cause the trait to only be available for certain part types, like heads, for example. そのパラメータを省略すると、null を注入します。 これは、他のnull以外の依存関係修飾子が既にその部品に存在しない場合にのみ、形質が部品タイプになります。

CoTが実行されるまでには、ほとんどのトレイトはまだ利用できず、CRTが実行されるまでには文字列バリアントが推奨されます。 全てが初期化されたわけではありませんが 文字列を使うと 材料の追加が延期されます それでもそれは誤りではなく、タイポをチェックする簡単な方法はありませんので、どの形質が見つからなかったかを示すエラーメッセージに注意してください。

```zenscript
myMaterial.addTrait("fiery", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```