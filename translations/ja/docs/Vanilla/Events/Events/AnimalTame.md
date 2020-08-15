# AnimalTame

このイベントは、動物が飼いならされるかどうかを判断するために発生します。 キャンセルされた場合、 **テイムは**に成功しません。 それ以外の場合は、テイムの通知として機能します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
AnimalTame Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter | ZenSetter | タイプ                                               |
| --------- | --------- | ------------------------------------------------- |
| `動物`      |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `動物`      |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `プレイヤー`   |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
