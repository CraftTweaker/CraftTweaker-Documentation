# CTPerkPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.CTPerkPredicate;
```


## Methods

:::group{name=test}

PMMO checks certain default conditions such as 
 level requirements, and chance.  If you have 
 other conditions by which this perk should activate,
 such as a specific dimension, this is where you
 perform that check.  Returning true indicates the
 requirements were met.

Returns: if the perk is permitted to execute  
Return Type: boolean

```zenscript
CTPerkPredicate.test(player as Player, nbt as MapData) as boolean
```

| Parameter |                       Type                       |      Description      |
|-----------|--------------------------------------------------|-----------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) | perk executor         |
| nbt       | [MapData](/vanilla/api/data/MapData)             | data provided by PMMO |


:::


