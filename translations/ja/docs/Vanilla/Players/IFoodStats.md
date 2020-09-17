# IFoodStats

IPlayerインターフェイスを使用すると、プレイヤーの食品統計に関する特定の情報を表示できます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter       | ZenSetter       | タイプ      |
| --------------- | --------------- | -------- |
| 食料レベル           | 食料レベル           | int      |
| saturationLevel | saturationLevel | float型   |
| 食べ物が必要          |                 | boolean型 |

## ZenMethods

#### 統計の追加

無効な関数 intputパラメータとしてintとしてintとしてfloatを取ります。

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

無効な関数 [IPlayer](/Vanilla/Players/IPlayer/) オブジェクトを入力パラメータとして取ります。

```zenscript
stats.onUpdate(IPlayer player);
```

#### asNBT

foodStatsを表す IData オブジェクトを返します。

```zenscript
stats.asNBT();
statsをcrafttweaker.data.IData;
```

#### Exhaustion を追加

奈落の葬式。 入力パラメータとしてfloatを取ります。

```zenscript
stats.addExhaustion(float exustrion);
```