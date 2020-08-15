# アイテムの有効期限

ItemExpire Event は、アイテムの有効期限が切れるたびに発生します(そのマキムの寿命に達する)。  
項目がデッドとしてマークされるのを防ぐため、キャンセルすることができます。   
  
キャンセルされた場合は、アイテムの寿命に `extralife` を追加します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemExpireEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | タイプ                                           |
| --------- | --------- | --------------------------------------------- |
| 項目        |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | int                                           |