# CTTickFunction

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.CTTickFunction;
```


## Methods

:::group{name=apply}

This function represents the logic being executed
 for a perk during the tick stage.  If a perk has a
 duration, this will execute each tick.  the number
 of ticks elapsed is included to allow for tracking
 duration between executions.

Returns: output data. not all events use output data, and your perk may not
 have anything to return.  In this case an empty map is sufficient.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
CTTickFunction.apply(player as Player, nbt as MapData, ticksElapsed as int) as MapData
```

|  Parameter   |                       Type                       |             Description             |
|--------------|--------------------------------------------------|-------------------------------------|
| player       | [Player](/vanilla/api/entity/type/player/Player) | perk executor                       |
| nbt          | [MapData](/vanilla/api/data/MapData)             | data provided by PMMO               |
| ticksElapsed | int                                              | the current number of elapsed ticks |


:::


