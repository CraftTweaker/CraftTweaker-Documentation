# PlayerPickupXp

PlayerPickupXp イベントは、プレイヤーが経験値オーブを拾うたびに発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerPickupXpEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerPickupXp Eventsは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter  | 戻り値                                       |
| ---------- | ----------------------------------------- |
| `キャンセル済み`  | boolean型                                  |
| `プレイヤー`    | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `entityXp` | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`       | float型                                    |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。