# EntityStruckByLightning

ライトニングボルトがエンティティに当たろうとすると、EntityStruckByLightning イベントが発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityStruckByLightningEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

LivingEntityUseItem Eventsは、以下のインターフェースを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

イベント中に以下の情報を取得/設定できます:

| ZenGetter | 戻り値                                   |
| --------- | ------------------------------------- |
| `稲妻...`   | [IEntity](/Vanilla/Entities/IEntity/) |