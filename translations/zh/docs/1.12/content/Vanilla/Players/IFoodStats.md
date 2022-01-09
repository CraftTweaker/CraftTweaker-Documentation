# IFoodStats

The IPlayer interface allows you to view certain information on a player's food Stats.

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter       | ZenSetter       | 类型  |
| --------------- | --------------- | --- |
| foodLevel       | foodLevel       | int |
| saturationLevel | saturationLevel | 浮点数 |
| needFood        |                 | 布尔值 |


## ZenMethods

#### Adding Stats
Void Function. Takes an int and a float as intput parameters.
```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate
Void Function. Takes an [IPlayer](/Vanilla/Players/IPlayer/) object as input parameter.
```zenscript
stats.onUpdate(IPlayer player);
```

#### asNBT
Returns an IData Object representing the foodStats.
```zenscript
stats.asNBT();
stats as crafttweaker.data.IData;
```

#### Add Exhaustion
Void Funtion. takes a float as input parameter.
```zenscript
stats.addExhaustion(float exhaustion);
```