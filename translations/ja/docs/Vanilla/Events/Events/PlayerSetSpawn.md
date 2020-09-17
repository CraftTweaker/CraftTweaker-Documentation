# PlayerSetSpawn

プレイヤーのスポーン位置が変更されたときに、PlayerSetSpawn イベントが発生します。  
さらなる処理を防ぐためにキャンセルすることができます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerSetSpawn イベントは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter   | 戻り値                                    |
| ----------- | -------------------------------------- |
| `プレイヤー`     | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `isForceed` | bool                                   |
| `newSpawn`  | [IBlockPos](/Vanilla/World/IBlockPos/) |