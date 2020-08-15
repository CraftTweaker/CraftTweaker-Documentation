# PlayerInteract

PlayerInteract イベントは、プレイヤーがブロックと相互作用するたびに発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerInteract Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter    | 戻り値                                  |
| ------------ | ------------------------------------ |
| `キャンセル済み`    | boolean型                             |
| `UsingItem`  | boolean型                             |
| `usingBlock` | boolean型                             |
| `x`          | int                                  |
| `y`          | int                                  |
| `z`          | int                                  |
| `プレイヤー`      | [IPlayer](/Vanilla/Players/IPlayer/) |
| `世界`         | [IWorld](/Vanilla/World/IWorld/)     |
| `ブロック`       | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `寸法`         | int                                  |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します
- `event.useBlock()` は Block を true に設定
- `event.useItem()` は項目を true に設定します