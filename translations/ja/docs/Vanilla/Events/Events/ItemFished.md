# ItemFishedEvent

このイベントはプレイヤーがアイテムを釣り上げようとしているときに発生します。 イベントをキャンセルすると、プレイヤーがアイテムを受け取れなくなりますが、ロッドはまだダメージを受けます。

## メモ

`event.additionalDamage` を設定することで、ロッドに追加のダメージを与えることができます。 フィッシュアップするIItemStacks( **変更不可能な**)のリストは、 `event.drops`内に含まれます。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
ItemFished Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter | ZenSetter          | タイプ                                        |
| --------- | ------------------ | ------------------------------------------ |
| `ダメージ`    |                    | int型                                       |
|           | `additionalDamage` | int型                                       |
| `ドロップ`    |                    | [IItemStack](/Vanilla/Items/IItemStack/)[] |
