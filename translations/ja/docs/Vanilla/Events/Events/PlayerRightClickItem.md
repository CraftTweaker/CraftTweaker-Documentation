# PlayerRightClickItem

PlayerRightClickItem イベントは、アイテムの機能が発生する直前に発生します。 プレイヤーがブロックやエンティティを取得している場合は発行されません。 他のイベントの発生を防ぐため、キャンセルすることができます。 イベントがキャンセルされた場合、許可、拒否、またはパスの特定の結果を提供することができます。 デフォルトでは、結果はパスです。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRightClickItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PlayerRightClickItem イベントは以下のインターフェイスを実装し、それらのすべてのメソッド/getters/setters も同様に呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
イベントでは以下の情報を調整できます。

| ZenGetter           | ZenSetter           | タイプ                                |
| ------------------- | ------------------- | ---------------------------------- |
| `cancelationResult` | `cancelationResult` | 文字列 ("allow" / "deny" / "default") |
