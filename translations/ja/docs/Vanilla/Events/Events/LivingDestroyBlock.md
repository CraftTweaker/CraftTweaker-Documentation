# LivingDestroyBlock

このイベントは、ウィザーやエンダードラゴンがブロックを破壊しようとしたとき、またはゾンビがドアを壊そうとしたときに発生します。 このイベントは **キャンセル可能**で、キャンセルされた場合、ブロックは壊れません。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. ivingDestroyBlockEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートし、その名前を使用することもできます。

## イベントインターフェースの拡張
LivingDestroyBlock Eventsは、以下のインターフェースを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter | ZenSetter | タイプ                                         |
| --------- | --------- | ------------------------------------------- |
| `状態`      |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

