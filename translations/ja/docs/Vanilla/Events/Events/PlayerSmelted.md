# PlayerSlused

プレイヤーが炉から何かを取り出すたびにPlayerSculdイベントが発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerSmeltedEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerSmeled Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersもすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                      |
| --------- | ---------------------------------------- |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `出力`      | [IItemStack](/Vanilla/Items/IItemStack/) |