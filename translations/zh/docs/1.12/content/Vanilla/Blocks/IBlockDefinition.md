# IBlockDefinition

IBlockDefinition 对象提供方块的额外信息。

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## 调用 IBlockDefinition 对象

* 使用 [IBlock](/Vanilla/Blocks/IBlock/) 对象的 ZenGetter 方法 `definition` 。

## 调用 IBlockDefinition 列表

* 使用 `game.blocks` 获取游戏中定义的所有方块。

## ZenGetters/ZenSetters

| ZenGetter                | ZenSetter           | 功能                                                | 类型                                                  |
| ------------------------ | ------------------- | ------------------------------------------------- | --------------------------------------------------- |
| canSpawnInBlock 可以在方块内放置 |                     | Returns true if an entity can spawn in this block | bool                                                |
| creativeTab              | creativeTab         |                                                   | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState             |                     |                                                   | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                          | defaultSlipperiness |                                                   | 浮点数                                                 |
| id                       |                     | 返回方块 ID                                           | string                                              |
| displayName              |                     | 返回方块的显示名称                                         | string                                              |
| hardness                 | hardness            |                                                   | int                                                 |
| harvestLevel             |                     | 返回方块的挖掘等级                                         | int                                                 |
| harvestTool              |                     | 返回方块的挖掘工具                                         | string                                              |
|                          | lightOpacity        |                                                   | int                                                 |
|                          | lightLevel #光照级别    |                                                   | int                                                 |
|                          | resistance          |                                                   | int                                                 |
| unlocalizedName          |                     | 返回方块的未本地化名                                        | string                                              |
| tickRandomly             | tickRandomly        |                                                   | bool                                                |


## ZenMethods
### 设置方块为不可破坏
Uses no paramaeters.  
Returns nothing.  
Does the same as `hardness = -1;`
```zenscript
defObj.setUnbreakable();
```

### 获取特定世界的 tickrate
Uses an [IWorld](/Vanilla/World/IWorld/) object.  
Returns an int.
```zenscript
defObj.getTickRate(IWorld world);
```

### 检查方块能否放置在另一个方块上
Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.
```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```


### 返回方块的光滑度
Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.
```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### 设置方块的挖掘等级
Uses a string, an int and an optional [IBlockState](/Vanilla/Blocks/IBlockState/).  
if the IBlockState argument is ignored, it will set harvest level to all block states in the block definition.  
Returns void (nothing).
```zenscript
defObj.setHarvestLevel(string toolclass, int level, @Optional IBlockState state);
```

### Get harvest level of block state
returns an int.
```zenscript
defObj.getHarvestLevel(IBlockState state);
```

### Get harvest tool of block state
returns a string.
```zenscript
defObj.getHarvestTool(IBlockState state);
```

### Get a block state by metadata
Uses an int.  
Returns an [IBlockState](/Vanilla/Blocks/IBlockState/).
```zenscript
defObj.getStateFromMeta(int meta);
```

### Block effective for the tool
Uses a string and an [IBlockState](/Vanilla/Blocks/IBlockState/).  
Returns a bool.
```zenscript
defObj.isToolEffective(String type, IBlockState state);
```
