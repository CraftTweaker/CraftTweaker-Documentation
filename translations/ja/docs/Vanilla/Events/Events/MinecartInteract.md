# MinecartInteract

MinecartInteractEvent は、プレイヤーがトロッコとやりとりし始めるたびに発生します。 イベントは **キャンセル可能**で、コンテナが開かれないようにします。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. inecartInteractEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
MinecartInteract Events は以下のインターフェイスを実装しており、それらのメソッド/ゲッター/セッターもすべて呼び出すことができます。

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | タイプ                                      |
| --------- | ---------------------------------------- |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `項目`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `手`       | 文字列型                                     |
