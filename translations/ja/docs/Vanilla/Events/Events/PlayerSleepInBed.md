# PlayerSleepInBed

プレイヤーが眠るたびにPlayerSleepInBed イベントが発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerSleepInBed Eventsは以下のインターフェースを実装し、それらのメソッド/getters/settersをすべて呼び出すこともできます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                  |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/) |