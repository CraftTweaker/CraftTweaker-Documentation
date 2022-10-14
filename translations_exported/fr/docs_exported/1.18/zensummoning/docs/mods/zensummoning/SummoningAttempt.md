# SummoningAttempt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## Properties

| Name     | Type                                             | Has Getter | Has Setter | Description                                              |
| -------- | ------------------------------------------------ | ---------- | ---------- | -------------------------------------------------------- |
| message  | string                                           | true       | true       | The [unlocalized] message to be displayed to the player. |
| pos      | [BlockPos](/vanilla/api/util/math/BlockPos)      | true       | false      | Position of the altar.                                   |
| success  | boolean                                          | true       | true       | Whether or not the summoning will proceed.               |
| summoner | [Player](/vanilla/api/entity/type/player/Player) | true       | false      | Gets the person who activated the summoning              |
| world    | [Level](/vanilla/api/world/Level)                | true       | false      | Level that the summoning is occurring in.                |

