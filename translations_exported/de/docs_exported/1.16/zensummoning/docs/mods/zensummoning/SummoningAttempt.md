# SummoningAttempt

This class was added by a mod with mod-id `zensummoning`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## Properties

| Name     | Type                                                  | Has Getter | Has Setter | Beschreibung                                             |
| -------- | ----------------------------------------------------- | ---------- | ---------- | -------------------------------------------------------- |
| message  | string                                                | true       | true       | The [unlocalized] message to be displayed to the player. |
| pos      | [BlockPos](/vanilla/api/util/BlockPos)                | true       | false      | Position of the altar.                                   |
| success  | boolean                                               | true       | true       | Whether or not the summoning will proceed.               |
| summoner | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true       | false      | Gets the person who activated the summoning              |
| world    | [MCWorld](/vanilla/api/world/MCWorld)                 | true       | false      | World that the summoning is occurring in.                |

