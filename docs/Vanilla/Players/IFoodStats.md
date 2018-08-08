# IFoodStats

The IPlayer interface allows you to view certain information on a player's food Stats.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter       | ZenSetter       | Type    |
|-----------------|-----------------|---------|
| foodLevel       | foodLevel       | int     |
| saturationLevel | saturationLevel | float   |
| needFood        |                 | boolean |


## ZenMethods

#### Adding Stats
Void Function. Takes an int and a float as intput parameters.
```
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate
Void Function. Takes an [IPlayer](/Vanilla/Players/IPlayer/) object as input parameter.
```
stats.onUpdate(IPlayer player);
```

#### asNBT
Returns an IData Object representing the foodStats.
```
stats.asNBT();
stats as crafttweaker.data.IData;
```

#### Add Exhaustion
Void Funtion. takes a float as input parameter.
```
stats.addExhaustion(float exhaustion);
```