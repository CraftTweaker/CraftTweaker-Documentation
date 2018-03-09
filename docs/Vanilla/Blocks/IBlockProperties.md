# 方块特性

方块特性使得一个方块区别于其他方块。它主要作为[方块状态](IBlockState)的接口, 这说明所有关于方块特性的函数均可以用于拥有[方块状态](IBlockState) 的物体。

## 导入相关包
为了避免发生一些不期而遇的问题, 最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.block.IBlockProperties;` 

|ZenGetter                  |类型                                                                  | 说明                                                    |
|---------------------------|----------------------------------------------------------------------|---------------------------------------------------------|
|canProvidePower            | bool                                                                 | 方块是否能发出红石信号                                     |
|mobilityFlag               | string                                                               | 返回 [mobility flag](MobilityFlag) as string             |
|material                   | [IMaterial](IMaterial)                                               | 返回方块的[材料](IMaterial)                               |
|causesSuffocation          | bool                                                                 | 方块能否能是实体受到窒息伤害                               |
|hasCustomBreakingProgress  | bool                                                                 |                                                         |
|blockNormalCube            | bool                                                                 |                                                         |
|fullBlock                  | bool                                                                 |                                                         |
|fullCube                   | bool                                                                 |                                                         |
|normalCube                 | bool                                                                 |                                                         |
|opaqueCube                 | bool                                                                 |                                                         |
|translucent                | bool                                                                 |                                                         |
|useNeighborBrightness      | bool                                                                 |                                                         |

## ZenMethods
### isReplacable
`boolean isReplaceable(IWorld world, IBlockPos pos);`  

需要传入:

- [世界](/Vanilla/World/IWorld) world → 检测的世界
- [方块位置](/Vanilla/World/IBlockPos) pos → 方块的位置

Returns a boolean that sais whether the block can be replaced or not.


### 获取方块亮度
`int getLightValue(IWorld world, IBlockPos blockPos);`  

需要传入:

- [方块访问](/Vanilla/World/IBlockAccess) world → 检测的世界
- [方块位置](/Vanilla/World/IBlockPos) pos → 方块的位置

返回方块亮度的整型数字。

### 被强充能/被弱充能
`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  

需要传入:

- [方块访问](/Vanilla/World/IBlockAccess) world → 检测的世界
- [方块位置](/Vanilla/World/IBlockPos) pos → 方块的位置
- [Facing](/Vanilla/World/Facing) facing → 检测此朝向此方向的方块面

返回方块在此面上的红石信号强度的整形数字。

### getComparatorInputOverride
`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

需要传入:

- [世界](/Vanilla/World/IWorld) world → 检测的世界
- [方块位置](/Vanilla/World/IBlockPos) pos → 方块的位置

Returns an int representing the block's redstone comparator input override type.


### 检测方块是否可以生成生物

需要传入[实体](/Vanilla/Entities/IEntity)对象。  
返回布尔值。
```
blockProperties.canEntitySpawn(IEntity entity);
```

### 获取实际方块状态

需要传入[方块访问](/Vanilla/World/IBlockAccess)对象，一个[方块位置](/Vanilla/World/IBlockPos)对象。  
返回一个新的方块特性对象。

```
blockProperties.getActualState(IBlockAccess world, IBlockPos pos);
```

### 获取方块硬度

需要传入[世界](/Vanilla/World/IWorld)对象，一个[方块位置](/Vanilla/World/IBlockPos)对象。  
返回浮点数。
```
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### 获取方块不透明度

需要传入[世界](/Vanilla/World/IWorld)对象，一个[方块位置](/Vanilla/World/IBlockPos)对象。
返回整型数字。
```
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### Get a player’s Relative Block Harness

需要传入[玩家](/Vanilla/Players/IPlayer)对象,一个[世界](/Vanilla/World/IWorld)对象以及一个[方块位置](/Vanilla/World/IBlockPos)对象。  
返回浮点数。
```
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### Check if a side of the block is solid

需要传入[方块访问](/Vanilla/World/IBlockAccess)对象,一个[方块位置](/Vanilla/World/IBlockPos)对象以及一个[朝向](/Vanilla/World/IFacing) 对象。 
返回布尔值。
```
blockProperties.isSideSolid(IBlockAccess world, IBlockPos pos, IFacing facing);
```
