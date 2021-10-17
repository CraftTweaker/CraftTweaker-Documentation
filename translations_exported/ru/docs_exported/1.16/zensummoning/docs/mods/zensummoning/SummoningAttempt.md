# SummoningAttempt

This class was added by a mod with mod-id `zensummoning`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## Свойства

| Название | Тип                                                   | Имеет Getter | Имеет Setter | Описание                                                 |
| -------- | ----------------------------------------------------- | ------------ | ------------ | -------------------------------------------------------- |
| message  | string                                                | true         | true         | The [unlocalized] message to be displayed to the player. |
| pos      | [BlockPos](/vanilla/api/util/BlockPos)                | true         | false        | Position of the altar.                                   |
| success  | boolean                                               | true         | true         | Whether or not the summoning will proceed.               |
| summoner | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true         | false        | Gets the person who activated the summoning              |
| world    | [MCWorld](/vanilla/api/world/MCWorld)                 | true         | false        | World that the summoning is occurring in.                |

