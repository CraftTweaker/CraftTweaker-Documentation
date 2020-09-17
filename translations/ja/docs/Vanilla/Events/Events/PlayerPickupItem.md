# PlayerPickupItem

PlayerPickupItem イベントは、プレイヤーがエンティティと相互作用するたびに発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerPickupItemEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerPickupItem Eventsは以下のインターフェイスを実装しており、すべてのメソッド/getters/settersも同様に呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                           |
| --------- | --------------------------------------------- |
| `項目`      | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)          |