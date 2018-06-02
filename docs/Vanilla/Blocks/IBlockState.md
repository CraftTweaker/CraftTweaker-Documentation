# 方块状态（IBlockState）

方块状态对象表示了一个方块现在的状态。

## 导入相关包
为了避免发生一些不期而遇的问题，最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.block.IBlockState;` 

## 方块特性的扩展
方块状态是[方块特性](IBlockProperties)的扩展。这说明所有关于[方块状态](IBlockProperties)的函数均可以用于拥有[方块特性](IBlockState) 的物体。

## ZenMethods 和 ZenGetters
| ZenGetter                  | 返回类型                                                              | 说明                                                    |
|----------------------------|----------------------------------------------------------------------|---------------------------------------------------------|
| block                      | [方块](/Vanilla/Blocks/IBlock)                                       | 返回所指的方块                                           |
| meta                       | 整型数字                                                             | 返回所指方块的附加值                                         |


## ZenMethods
### 是否可以替换
`boolean isReplaceable(IWorld world, IBlockPos pos);`  
需要传入:

- [世界](/Vanilla/World/IWorld) world → 检测的世界
- [方块位置](/Vanilla/World/IBlockPos) pos → 方块的位置

返回布尔值：方块是否可以被替换。


### 比较两个方块特性

你可以使用 `int compare(IBlockState other);` 或者 ZenCompare 字符 `==` `!=`.  
不过它们的返回值不同

- `state.compare(other)` 返回整型数字（相同返回0）
- `state == other` 返回布尔值（相同返回true）

