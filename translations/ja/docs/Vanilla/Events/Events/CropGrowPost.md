# クロップGrowPostEvent

クロップGrowPost イベントは、 **** が正常に成長すると発生します。 それはキャンセルすることはできず、単に作物の成長の通知として機能します。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. ropGrowPostEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
CropGrowPost イベントは、以下のインターフェイスを実装し、すべてのメソッド/getters/setter を呼び出すことができます。

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter            | ZenSetter | タイプ                                         |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
