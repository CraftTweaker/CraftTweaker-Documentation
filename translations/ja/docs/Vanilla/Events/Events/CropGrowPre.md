# クロップGrowPreEvent

クロップグロプレイベントは、作物が成長しようとすると発生します。 **結果** があり、デフォルトの動作が発生するかどうかを決定します。

- **allow**: 作物は成長を余儀なくされる。
- **deny**: 作物の成長が妨げられている。
- **default**: 攻撃はデフォルトのバニラ動作を使用する。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. ropGrowPreEvent <br x-id="2" /> 
 <code>`  
前にクラスをインポート [](/AdvancedFunctions/Import/) して、その名前を使用することもできます。

## イベントインターフェースの拡張
CropGrowPost イベントは、以下のインターフェイスを実装し、すべてのメソッド/getters/setter を呼び出すことができます。

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter            | ZenSetter | タイプ                                         |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
