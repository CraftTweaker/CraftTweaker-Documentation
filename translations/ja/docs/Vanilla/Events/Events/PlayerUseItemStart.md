# PlayerUseItemStart

PlayerUseItemStart イベントは、プレイヤーがアイテムを使用し始めるたびに発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerUseItemStart Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                      |
| --------- | ---------------------------------------- |
| `キャンセル済み` | boolean型                                 |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `項目`      | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します