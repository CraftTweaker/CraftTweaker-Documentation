# PlayerInteractEntity

PlayerInteractEntity イベントは、プレイヤーがエンティティと相互作用するたびに発生します。 相互作用の発生を防ぐため、キャンセルすることができます。 イベントがキャンセルされた場合、特定の成功の結果、失敗またはパスを提供できます。 デフォルトでは、結果はパスです。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerInteractEntityEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートし、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerInteractEntity Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

イベントから次の情報を取得できます。

| ZenGetter           | ZenSetters          | 戻り値の型                                 |
| ------------------- | ------------------- | ------------------------------------- |
| `プレイヤー`             |                     | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`            |                     | [IEntity](/Vanilla/Entities/IEntity/) |
| `cancelationResult` | `cancelationResult` | 文字列 ("success" / "pass" / "fail")     |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。