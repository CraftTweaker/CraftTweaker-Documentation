# SummoningAttempt

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## 参数

| 名称       | 类型                                               | 可获得  | 可设置   | 描述                                                       |
| -------- | ------------------------------------------------ | ---- | ----- | -------------------------------------------------------- |
| message  | string                                           | true | true  | The [unlocalized] message to be displayed to the player. |
| 点        | [BlockPos](/vanilla/api/util/math/BlockPos)      | true | false | Position of the altar.                                   |
| success  | 布尔值                                              | true | true  | Whether or not the summoning will proceed.               |
| summoner | [Player](/vanilla/api/entity/type/player/Player) | true | false | Gets the person who activated the summoning              |
| world    | [Level](/vanilla/api/world/Level)                | true | false | Level that the summoning is occurring in.                |

