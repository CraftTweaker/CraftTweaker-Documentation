# PlayerInteractBlock

PlayerInteractBlock イベントは、プレイヤーがブロックを右クリックするたびに発生します。  
他のイベントの発生を防ぐためにキャンセルすることができます。 イベントがキャンセルされた場合、特定の成功の結果、失敗またはパスを提供できます。 デフォルトでは、結果はパスです。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerInteractBlockEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートし、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerInteractBlock Eventsは、以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| zengetter           | zengetter           | タイプ                                    |
| ------------------- | ------------------- | -------------------------------------- |
| `hitvector`         |                     | [ivector3d](/vanilla/world/ivector3d/) |
| `useblock`          | `useblock`          | 文字列 ("allow" / "deny" / "default")     |
| `useitem`           | `useitem`           | 文字列 ("allow" / "deny" / "default")     |
| `cancelationResult` | `cancelationResult` | 文字列 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。