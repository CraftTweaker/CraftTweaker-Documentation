# PlayerAdvancement

プレイヤーがアドバンスを獲得するたびに、PlayerAdvancement イベントが発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerAdvancementEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerAdvancement Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値 |
| --------- | --- |
| `id`      | 文字列 |

## Id

PlayerEvent の機能とは別に、進歩した ID を文字列として取得することができます。

例えば、次のような文字列を指定できます

```zenscript
"minecraft:story/mine_diamond"
```