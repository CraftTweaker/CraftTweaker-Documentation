# ICTBlockState

一个ICTBlockState对象代表一个方块的当前状态。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.BlockState；`

## 调用 ICTBlockState

您可以在 [IBlockAction 函数](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) 中获得一个 ICTBlockState 作为参数，也可以从 [Blocket 处理器](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/) 中获得一个 ICTBlockState

`<block:minecraft:dirt>`

## ZenMethods 和 ZenGetters

| ZenMethod（ZenMethod） | ZenGetter | 返回值类型                                                          | 描述                     |
| -------------------- | --------- | -------------------------------------------------------------- | ---------------------- |
| getBlock()           | 封禁        | [IBlock](/Vanilla/Blocks/IBlock/)                              | 返回被审查的块                |
| getMeta()            | meta      | 整数                                                             | 返回被审查区块的元数据            |
| canProvidePower()    |           | boolean                                                        | 如果修饰方块能够提供 Redstone 功率 |
| getMobilityFlag()    |           | [推送反应](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | 返回推送反应标志               |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 要检查的世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos -> Block的位置

返回一个布尔值，那就是该方块是否可以被替换。

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockpos)；`  
参数：

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 要检查的世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos -> Block的位置

返回一个表示给定位置当前光值的整数。

### getWeakPower

`int getWeakPower(IWorld world, IBlockPos blockPos, 面对面)；`  
参数：

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 要检查的世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos -> Block的位置
- [正面](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) expressing → 正在检查的侧面

返回一个代表该边当前红石力量的整数。

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockpos)；`

参数：

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 要检查的世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos -> Block的位置

返回代表方块的红石比较器输入覆盖类型的整数。

### 比较两个ICTBlockState对象

您可以使用 `int compare(ICTBlockState等);` 或 ZenCompare Tokens `==` `!=`。  
返回不同类型：

- `state.compare(other)` 返回一个 0 如果它们是等价的
- `state == other` 返回一个真的布尔值，它们是等于的