# SummoningAttempt

This class was added by a mod with mod-id `zensummoning`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningAttempt;
```


## 参数

| 名称       | 类型                                                    | 可获得  | 可设置   | 描述                                                       |
| -------- | ----------------------------------------------------- | ---- | ----- | -------------------------------------------------------- |
| message  | string                                                | true | true  | The [unlocalized] message to be displayed to the player. |
| 点        | [BlockPos](/vanilla/api/util/BlockPos)                | true | false | Position of the altar.                                   |
| success  | 布尔值                                                   | true | true  | Whether or not the summoning will proceed.               |
| summoner | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true | false | Gets the person who activated the summoning              |
| world    | [MCWorld](/vanilla/api/world/MCWorld)                 | true | false | World that the summoning is occurring in.                |

