# PlayerTick

PlayerTick イベントは各プレイヤーごとにティックを発行します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerTick Eventsは以下のインターフェースを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                  |
| --------- | ------------------------------------ |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `フェーズ`    | 文字列                                  |