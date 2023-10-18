# CTDescriptionFunction

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.CTDescriptionFunction;
```


## Methods

:::group{name=apply}

This function consumes information about the perk
 and outputs text lines which give users specific
 details about what their perk is doing.  This info
 appears in the glossary and should be used to show
 players how much benefit they get from a perk such
 as the duration, power level, percent boost, etc
 they are currently receiving from this perk.

Returns: output text.  
Return Type: stdlib.List&lt;[LiteralContents](/vanilla/api/text/content/type/LiteralContents)&gt;

```zenscript
CTDescriptionFunction.apply(player as Player, nbt as MapData) as stdlib.List<LiteralContents>
```

| Parameter |                       Type                       |      Description      |
|-----------|--------------------------------------------------|-----------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) | perk executor         |
| nbt       | [MapData](/vanilla/api/data/MapData)             | data provided by PMMO |


:::


