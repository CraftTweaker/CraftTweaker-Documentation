# アイテムToss

アイテム投げイベントは、アイテムがプレイヤーのインベントリから投げられるたびに発生します。  
このイベントをキャンセルすると、アイテムがワールドに入るのを防ぎ、アイテムを削除します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | タイプ                                           |
| --------- | --------------------------------------------- |
| 項目        | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| プレイヤー     | [IPlayer](/Vanilla/Players/IPlayer/)          |