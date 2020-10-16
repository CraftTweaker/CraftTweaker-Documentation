# IMobSpawnerBaseLogic

IMobSpawnerBaseLogic 对象包含所有类型的信息，说明如何和在哪里为生物繁殖者生成某些东西。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.tileentity.IMobSpawnerBaseLogic；`

## ZenGetters/ZenSetters

| ZenGetter  | ZenSetter | 描述               | 类型                                                        |
| ---------- | --------- | ---------------- | --------------------------------------------------------- |
| `nbtData`  | `nbtData` | 生成器NBT 数据。 （见下文） | [IData](/Vanilla/Data/IData/)                             |
| `实体定义`     | `实体定义`    | 要生成的实体定义。        | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`    |           | 出生者所属的世界。        | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos` |           | 出生区块的位置。         | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
无效的updateSpawner(); // 更新生成实体的生成器并将生成计时器置顶。

无效setDelayToMin(); // 设置生成器的延迟到下一次生成的最小延迟。
```