# IBlockDefinition

IBlockDefinition 对象提供方块的额外信息。

## 导入相关包

如果你遇到问题 (例如创建 [数组](/AdvancedFunctions/Arrays_and_Loops/))，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockDefinition;`

## 调用 IBlockDefinition 对象

* 使用 [IBlock](/Vanilla/Blocks/IBlock/) 对象的 ZenGetter 方法 `definition` 。

## 调用 IBlockDefinition 列表

* 使用 `game.blocks` 获取游戏中定义的所有方块。

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | 功能          | 返回值类型                                               |
| --------------- | ------------------- | ----------- | --------------------------------------------------- |
|                 | canSpawnInBlock     | 返回方块上能否生成实体 | bool                                                |
| creativeTab     | creativeTab         |             | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |             | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |             | float                                               |
| id              |                     | 返回方块 ID     | string                                              |
| displayName     |                     | 返回方块的显示名称   | string                                              |
|                 | hardness            |             | int                                                 |
| harvestLevel    |                     | 返回方块的挖掘等级   | int                                                 |
| harvestTool     |                     | 返回方块的挖掘工具   | string                                              |
|                 | lightOpacity        |             | int                                                 |
|                 | lightLevel          |             | int                                                 |
|                 | resistance          |             | int                                                 |
| unlocalizedName |                     | 返回方块的未本地化名  | string                                              |
| tickRandomly    | tickRandomly        |             | bool                                                |

## ZenMethods

### 设置方块为不可破坏

不接受参数。  
不返回值。  
等价于 `hardness = -1;`

    defObj.setUnbreakable();
    

### 获取特定世界的 tickrate

接受一个 [IWorld](/Vanilla/World/IWorld/) 对象。  
返回一个 int。

    defObj.getTickRate(IWorld world);
    

### 检查方块能否放置在另一个方块上

接受一个 [IWorld](/Vanilla/World/IWorld/) 对象，一个 [IBlockPos](/Vanilla/World/IBlockPos/) 对象，取决于选用的方法，可能还需要一个 [IFacing](/Vanilla/World/IFacing/) 对象。  
返回一个 bool。

    defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
    defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
    

### 返回方块的光滑度

接受一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 对象， 一个 [IBlockAccess](/Vanilla/World/IBlockAccess/) 对象，一个 [IBlockPos](/Vanilla/World/IBlockPos/) 对象和一个可选的l [IEntity](/Vanilla/Entities/IEntity/) 对象。  
返回一个float。

    defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
    

### 设置方块的挖掘等级

接受一个 string 和一个 int。  
不返回值。

    defObj.setHarvestLevel(string toolclass, int level);