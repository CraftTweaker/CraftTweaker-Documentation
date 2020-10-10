# PlayerInteractBlock

PlayerInteractBlock イベントは、プレイヤーがブロックを右クリックするたびに発生します。  
他のイベントの発生を防ぐためにキャンセルすることができます。 イベントがキャンセルされた場合、特定の成功の結果、失敗またはパスを提供できます。 デフォルトでは、結果はパスです。

## Event Class

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerInteractBlockEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートし、その名前を使用することもできます。

## Event interface extensions

PlayerInteractBlock Eventsは、以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| zengetter           | ツェンセッター             | type                                   |
| ------------------- | ------------------- | -------------------------------------- |
| `hitvector`         |                     | [IVector3d](/Vanilla/World/IVector3d/) |
| `useblock`          | `useblock`          | 文字列 ("allow" / "deny" / "default")     |
| `useitem`           | `useitem`           | 文字列 ("allow" / "deny" / "default")     |
| `cancelationResult` | `cancelationResult` | 文字列 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` sets the event as cancelled.