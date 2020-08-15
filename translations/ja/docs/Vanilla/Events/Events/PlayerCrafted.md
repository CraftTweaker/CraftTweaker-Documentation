# PlayerCrafted

PlayerCrafted Eventはプレイヤーが何かをクラフトするたびに発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerCraftedEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerCrafted Eventsは以下のインターフェイスを実装しており、すべてのメソッド/getters/settersを呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter   | 戻り値                                                                 |
| ----------- | ------------------------------------------------------------------- |
| `プレイヤー`     | [IPlayer](/Vanilla/Players/IPlayer/)                                |
| `出力`        | [IItemStack](/Vanilla/Items/IItemStack/)                            |
| `inventory` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) |