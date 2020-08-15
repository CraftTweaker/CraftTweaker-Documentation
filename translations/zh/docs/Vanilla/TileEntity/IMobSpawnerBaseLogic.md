# IMobSpawnerBaseLogic

IMobSpawnerBaseLogic 对象包含关于如何和在哪里生成东西的所有信息。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.tileentity.IMobSpawnerBaseLogic；`

## ZenGetters

| ZenGetter  | ZenSetter |                                       |
| ---------- | --------- | ------------------------------------- |
| `nbtData`  | `nbtData` | [IData](/Vanilla/Data/IData/)         |
|            | `实体定义`    | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `世界`       |           | [IWorld](/Vanilla/World/IWorld)       |
| `blockPos` |           | [IBlockPos](/Vanilla/World/IBlockPos) |

## ZenMethods

```zenscript
无效的updateSpawner();

无效的 setDelayToMin();
```