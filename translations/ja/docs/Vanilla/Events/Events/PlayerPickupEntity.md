# PlayerPickupEntity

PlayerPickupEntity イベントはプレイヤーがエンティティと相互作用するたびに発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                   |
| --------- | ------------------------------------- |
| `キャンセル済み` | boolean型                              |
| `処理されました` | boolean型                              |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `エンティティ`  | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。
- `event.process()` はイベントを処理として設定します。