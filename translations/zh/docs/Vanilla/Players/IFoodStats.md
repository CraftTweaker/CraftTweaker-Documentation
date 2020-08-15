# IFoodStats

IPlayer 接口允许您查看某个玩家的食物统计信息。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.player.IFoodStates；`

## ZenGetter/ZenSettters

| ZenGetter | ZenSetter | 类型      |
| --------- | --------- | ------- |
| 食物等级      | 食物等级      | 整数      |
| 饱和度       | 饱和度       | 浮点数     |
| 需要的食物：    |           | boolean |

## ZenMethods

#### 添加统计

无效函数。 输入一个整数和一个浮点型变量。

```zenscript
stats.addStats(int foodValue，float saturation级别)；
```

#### onUpdate

无效函数。 使用 [IPlayer](/Vanilla/Players/IPlayer/) 对象作为输入参数。

```zenscript
Stats.onUpdate(IPlayer player)；
```

#### asNBT

返回一个代表食物统计的 IData 对象。

```zenscript
stats.asNBT();
stats as craftweeper.data.IData;
```

#### 添加 Exhaustion

虚空退役。 将浮点型变量作为输入参数。

```zenscript
stats.addExhaustion(浮点用尽)；
```