# PlayerCloseContainer

PlayerCloseContainer Event は、プレイヤーがコンテナを閉じるたびに発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PlayerCloseContainer Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                          |
| --------- | -------------------------------------------- |
| `コンテナ`    | [IContainer](/Vanilla/Container/IContainer/) |
