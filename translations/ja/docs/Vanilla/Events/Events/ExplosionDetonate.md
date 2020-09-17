# ExplosionDetonate

ExplosionDetonate イベントは、爆発が始まる直前に発生します。 キャンセルできません。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionDetonateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
ExplosionDetonate Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [爆発イベント](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter           | ZenSetter | タイプ                                            |
| ------------------- | --------- | ---------------------------------------------- |
| `affectedEntities`  |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
