# PlayerBrewedPotion

プレイヤーが醸造台からポーションを取り出すたびに、PlayerBrewedPotionイベントが発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBrewedPotionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerBrewedPotion Eventsは以下のインターフェースを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                      |
| --------- | ---------------------------------------- |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `ポーション`   | [IItemStack](/Vanilla/Items/IItemStack/) |
| `手`       | 文字列                                      |