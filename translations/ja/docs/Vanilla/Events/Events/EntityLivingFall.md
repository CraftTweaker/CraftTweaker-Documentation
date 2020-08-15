# EntityLivingFall

EntityLivingFall イベントは、エンティティが落ちるように設定されるたびに発生します。  
エンティティが落ちる前にキャンセルすることができます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter        | タイプ    |
| ---------------- | ---------------- | ------ |
| disance          | disance          | float型 |
| damageMultiplier | damageMultiplier | float型 |