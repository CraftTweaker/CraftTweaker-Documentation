# 食物状态（IFoodStats）

`IPlayer`接口允许你查看一个玩家的某些食物状态信息。

## 导入包

如果你的脚本遇到问题，请检查是否导入了相关的包。（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)。）所以保险起见，请在一开始写脚本的时候就确保导入了可能用到的包。

`import crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter       | ZenSetter       | Type    |
|-----------------|-----------------|---------|
| foodLevel       | foodLevel       | int     |
| saturationLevel | saturationLevel | float   |
| needFood        |                 | boolean |

## ZenMethods

#### 增加状态

无返回值函数。接受一个整型参数和一个浮点型参数作为输入。

```
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

无返回值函数。接受一个[IPlayer](IPlayer)对象作为输入参数。

```
stats.onUpdate(IPlayer player);
```

#### asNBT

返回一个`IData`对象用于表示食物状态。

```
stats.asNBT();
stats as crafttweaker.data.IData;
```

#### 增加衰竭

无返回值函数，接受一个浮点型参数作为输入。

```
stats.addExhaustion(float exhaustion);
```