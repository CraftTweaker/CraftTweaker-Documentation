# IMaterial定義

IMaterialDefinitionオブジェクトは、ゲーム内の材料定義を表します。 新しいブロックを作成するには、マテリアル定義が必要です。

# パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.BlockMaterial;`

## IMaterialDefinition オブジェクトの呼び出し

このようなオブジェクトは、 [Block Material Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>` を使用して取得できます。

## パラメータのない ZenGetters/ZenMethods

| ZenGetter       | ZenMethod           | Return Type                                                      |
| --------------- | ------------------- | ---------------------------------------------------------------- |
| blocksLight     | blocksLight()       | bool                                                             |
| blocksMovement  | blocksMovement()    | bool                                                             |
| canBurn         | getCanBurn()        | bool                                                             |
| mobilityFlag    | getMobilityFlag()   | [プッシュ反応](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| 液体|<unk>        | isLiquid()          | bool                                                             |
| 不透明な            | isOpaque()          | bool                                                             |
| 交換可能            | isReplaceable()     | bool                                                             |
| solid           | isSolid()           | bool                                                             |
| toolNotRequired | isToolNotRequired() | bool                                                             |

## 2つのブロック材料を比較

`==` 演算子を使用して、2 つの MaterialDefinitions が等しいかどうかを確認できます。

```zenscript
if(materialA == materialB)
    print("success!");
```