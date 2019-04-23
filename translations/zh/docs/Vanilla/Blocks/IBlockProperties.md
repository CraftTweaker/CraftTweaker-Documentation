# IBlockProperties

BlockProperties 是使得方块与方块间各具特色的原因。 它主要是作为 [IBlockState](/Vanilla/Blocks/IBlockState/) 的超接口存在，就是说它的所有方法都可以用于 [IBlockState](/Vanilla/Blocks/IBlockState/) 对象。

## 导入相关包

如果你遇到问题 ，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

| ZenGetter                 | 返回值类型                                   | 描述                                                 |
| ------------------------- | --------------------------------------- | -------------------------------------------------- |
| canProvidePower           | bool                                    | 返回方块能否提供红石信号                                       |
| mobilityFlag              | string                                  | 返回 [mobility flag](/Vanilla/Blocks/IMobilityFlag/) |
| material                  | [IMaterial](/Vanilla/Blocks/IMaterial/) | 返回方块的[材料](/Vanilla/Blocks/IMaterial/)              |
| causesSuffocation         | bool                                    | 返回方块能否使玩家窒息                                        |
| hasCustomBreakingProgress | bool                                    |                                                    |
| blockNormalCube           | bool                                    |                                                    |
| fullBlock                 | bool                                    |                                                    |
| fullCube                  | bool                                    |                                                    |
| normalCube                | bool                                    |                                                    |
| opaqueCube                | bool                                    |                                                    |
| translucent               | bool                                    |                                                    |
| useNeighborBrightness     | bool                                    |                                                    |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
参数：

- [IWorld](/Vanilla/World/IWorld/) world → 方块所处的世界
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → 方块的位置

返回一个表示方块是否能被替换的 boolean 值

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
参数：

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → 方块所处的世界
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → 方块的位置

返回一个表示给定位置当前光照值的 int 值

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
参数：

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → 方块所处的世界
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → 方块的位置
- [Facing](/Vanilla/World/IFacing/) facing → 要检查的方向 返回一个代表给定面当前红石等级的 int 值

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

参数：

- [IWorld](/Vanilla/World/IWorld/) world → 方块所处的世界
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → 方块的位置

Returns an int representing the block's redstone comparator input override type.

### 返回方块上能否生成实体

接受一个 [IEntity](/Vanilla/Entities/IEntity/).  
返回一个 bool。

    blockProperties.canEntitySpawn(IEntity entity);
    

### 获取实际方块状态

接受一个 [IBlockAccess](/Vanilla/World/IBlockAccess/) 和一个 [IBlockPos](/Vanilla/World/IBlockPos/)。  
返回一个新的 IBlockProperties 对象。

    blockProperties.getActualState(IBlockAccess world, IBlockPos pos);
    

### 获取方块的硬度

接受一个 [IWorld](/Vanilla/World/IWorld/) 和一个 [IBlockPos](/Vanilla/World/IBlockPos/)。  
返回一个 float。

    blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
    

### 获取方块的透明性

接受一个 [IWorld](/Vanilla/World/IWorld/) 和一个 [IBlockPos](/Vanilla/World/IBlockPos/)。  
返回一个 int。

    blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
    

### 获取玩家关联的方块硬度

接受一个 [IPlayer](/Vanilla/Players/IPlayer/)，一个 [IWorld](/Vanilla/World/IWorld/) 和一个 [IBlockPos](/Vanilla/World/IBlockPos/)。  
返回一个 float。

    blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
    

### 检查方块的一个面是否为实心

接受一个 [IBlockAccess](/Vanilla/World/IBlockAccess/)，一个 [IBlockPos](/Vanilla/World/IBlockPos/) 和一个 [IFacing](/Vanilla/World/IFacing/) 。  
返回一个 bool。

    blockProperties.isSideSolid(IBlockAccess world, IBlockPos pos, IFacing facing);