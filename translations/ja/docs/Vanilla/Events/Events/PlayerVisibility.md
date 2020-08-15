# PlayerVisibility

このイベントは、プレイヤーの可視性を判断するために発生します。すなわち、攻撃者によって気づかれるほど近くにいるかどうかです。 このイベントの結果を計算するために使用されます(バニラのMinecraftからの修飾子をスニーキングのために使用します)。 など)プレイヤーが生き物を見る前に生き物にたどり着ける範囲。

これは、表示範囲を拡大するために使用することができますが、 (Minecraft や別の Mod によって減少した場合) 最大値(標準目標距離)を上回ることはできません。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerVisibilityEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
PlayerVisibilityEvent イベントは以下のインターフェイスを実装しており、すべてのメソッド/getter/setterを呼び出すこともできます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter | ZenSetter          | タイプ          |
| --------- | ------------------ | ------------ |
| `可視性`     |                    | double       |
|           | `modifyVisibility` | メモを参照してください。 |

## メモ

この値は直接設定できません。 `modifyVisibility` を double 値で呼び出すと、修飾子は `modifiy * double value` の結果に置き換えられます。
