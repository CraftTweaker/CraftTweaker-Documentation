# 方块位置

IBlockPos对象是用来表示游戏中的位置。

## 导入包
如果你遇到任何问题，可以尝试通过导入相关包来解决。  
`import crafttweaker.world.IBlockPos;`

## 不带参数的ZenMethod

| ZenMethod    |ZenGetter/Caster | 返回类型                              | 描述                                |
|--------------|-----------------|------------------------------------------|--------------------------------------------|
| getX()       | x               | 整型                                      | 返回坐标的X值             |
| getY()       | y               | 整型                                      | 返回坐标的Y值             |
| getZ()       | z               | 整型                                      | 返回坐标的Z值             |
| asPosition3f | 作为IPosition3f  | [IPosition3f](/Vanilla/Utils/Position3f) | 返回Position3f对象的坐标。 |

## 带参数的ZenMethods

### 获取偏移量
根据方块不同`方向`上的`偏移量`来返回一个新的 IBlockPos

`IBlockPos getOffset(IFacing direction, int offset);`

或者你可以使用以下提供的静态方法来直接得到 [IFacing](Facing) 对象 。

- [IFacing](IFacing) direction → 方向
- int offset → 在这个方向上有多少方块?
