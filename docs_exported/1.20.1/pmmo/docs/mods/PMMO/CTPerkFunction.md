# CTPerkFunction

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.CTPerkFunction;
```


## Methods

:::group{name=apply}

This function represents the logic being executed
 for a perk.  All perks are provided the player this
 perk is contextually applicable to, a map of settings
 and the players current level in the skill associated
 in the users' config.

Returns: output data. not all events use output data, and your perk may not
 have anything to return.  In this case an empty map is sufficient.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
CTPerkFunction.apply(player as Player, nbt as MapData) as MapData
```

| Parameter |                       Type                       |      Description      |
|-----------|--------------------------------------------------|-----------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) | perk executor         |
| nbt       | [MapData](/vanilla/api/data/MapData)             | data provided by PMMO |


:::


