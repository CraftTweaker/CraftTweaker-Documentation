# PlayerSleepInBed

プレイヤーが眠るたびにPlayerSleepInBed イベントが発生します。 このイベントは、 `結果` を設定することでプレイヤーがスリープ状態にできるかどうかを制御できます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerSleepInBed Eventsは以下のインターフェースを実装し、それらのメソッド/getters/settersをすべて呼び出すこともできます。

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## 結果のタイプ

* ここは number@@0 です。 
* NO_POSSIBLE_NOW_NOTIFICATION_1 
* 安全ではない 
* OK 
* その他の問題 
* FAR_AWAY: 

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                  |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `result`  | 文字列 (可能な値は上記です)                      |

## ZenSetters

イベントでは以下のように設定できます。

| ZenSetter | パラメータタイプ        |
| --------- | --------------- |
| `result`  | 文字列 (可能な値は上記です) |