# PlayerAnvilUpdate

PlayerAnvilUpdateイベントは、プレイヤーがanvilの左右両方のスロットにアイテムを配置したときに発生します。
 * イベントがキャンセルされると、vanilla の動作は実行されず、出力は null に設定されます。
 * イベントがキャンセルされず、出力が null ではない場合、出力が設定され、vanilla の動作は実行されません。
 * 出力がnullでイベントがキャンセルされない場合、バニラの動作が実行されます。

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerAnvilUpdate Events 以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter      | ZenSetter      | type                                     | Description                                        |
| -------------- | -------------- | ---------------------------------------- | -------------------------------------------------- |
| `leftItem`     |                | [IItemStack](/Vanilla/Items/IItemStack/) | 入力の左側。                                             |
| `rightItem`    |                | [IItemStack](/Vanilla/Items/IItemStack/) | 入力の右側。                                             |
| `outputItem`   | `outputItem`   | [IItemStack](/Vanilla/Items/IItemStack/) | 出力スタックを設定します。                                      |
| `itemName`     |                | string                                   | ユーザーが指定した場合、項目を設定する名前。                             |
| `xpCost`       | `xpCost`       | int                                      | 基本コストは、出力!= nullの場合に変更するように設定します。                  |
| `materialCost` | `materialCost` | int                                      | 修理中に消費される右側のスロットのアイテム数。 スタック全体を消費するには、0のままにしてください。 |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
