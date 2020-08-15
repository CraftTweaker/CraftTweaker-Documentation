# IBlockPos

IBlockPos 对象代表着游戏中的一个位置。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.BlockPos;`

## ZenMethods 没有参数

| ZenMethod（ZenMethod） | ZenGetter | 返回值类型 | 描述        |
| -------------------- | --------- | ----- | --------- |
| getX()               | x         | 整数    | 返回位置的 X 值 |
| getY()               | 年         | 整数    | 返回位置的 Y 值 |
| getZ()               | z         | 整数    | 返回位置的 Z 值 |

## 带参数的 ZenMethods

### 获取偏移

返回一个新的 IBlockPos ，它是 `偏移` 个方块到 `方向名称` 或 `正面` 方向。

`IBlockPos getOffset(String directionName, int offset);`

`方向名称` 可以采集这些值：

- "下拉"
- "上"
- “北”
- “南部”
- “东”
- “西”

`IBlockPos getOffset(正面脸，整数偏移)` 参数：

- [正在脸上](/Vanilla/World/IFacing/) expressing → The direction
- 整条偏移 -> 该方向有多少块？