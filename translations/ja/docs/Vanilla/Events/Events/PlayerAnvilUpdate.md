# PlayerAnvilUpdate

PlayerAnvilUpdateイベントは、プレイヤーがanvilの左右両方のスロットにアイテムを配置したときに発生します。
 * イベントがキャンセルされると、vanilla の動作は実行されず、出力は null に設定されます。
 * イベントがキャンセルされず、出力が null ではない場合、出力が設定され、vanilla の動作は実行されません。
 * 出力がnullでイベントがキャンセルされない場合、バニラの動作が実行されます。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PlayerAnvilUpdate Events 以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
イベントから次の情報を取得できます。

| ZenGetter      | ZenSetter      | タイプ                                      | 説明                                                 |
| -------------- | -------------- | ---------------------------------------- | -------------------------------------------------- |
| `leftItem`     |                | [IItemStack](/Vanilla/Items/IItemStack/) | 入力の左側。                                             |
| `rightItem`    |                | [IItemStack](/Vanilla/Items/IItemStack/) | 入力の右側。                                             |
| `outputItem`   | `outputItem`   | [IItemStack](/Vanilla/Items/IItemStack/) | 出力スタックを設定します。                                      |
| `itemName`     |                | 文字列                                      | ユーザーが指定した場合、項目を設定する名前。                             |
| `xpCost`       | `xpCost`       | int                                      | 基本コストは、出力!= nullの場合に変更するように設定します。                  |
| `materialCost` | `materialCost` | int                                      | 修理中に消費される右側のスロットのアイテム数。 スタック全体を消費するには、0のままにしてください。 |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。
