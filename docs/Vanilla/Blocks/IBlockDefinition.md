# IBlockDefinition

The IBlockDefinition objects provide additional information on blocks.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## Calling an IBlockDefinition object

* Using the `definition` ZenGetter on an [IBlock](/Vanilla/Blocks/IBlock/) object.

## Calling an IBlockDefinition List

* Using `game.blocks` to get a list of all block definition in the game.

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | What does it do                                   | Type                                                |
|-----------------|---------------------|---------------------------------------------------|-----------------------------------------------------|
| canSpawnInBlock |                     | Returns true if an entity can spawn in this block | bool                                                |
| creativeTab     | creativeTab         |                                                   | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                                   | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                                   | float                                               |
| id              |                     | Returns the block ID                              | string                                              |
| displayName     |                     | Returns the block's DisplayName                   | string                                              |
| hardness        | hardness            |                                                   | int                                                 |
| harvestLevel    |                     | Returns the block's harvest level                 | int                                                 |
| harvestTool     |                     | Returns the block's harvest tool                  | string                                              |
|                 | lightOpacity        |                                                   | int                                                 |
|                 | lightLevel          |                                                   | int                                                 |
|                 | resistance          |                                                   | int                                                 |
| unlocalizedName |                     | Returns the block's unlocalized Name              | string                                              |
| tickRandomly    | tickRandomly        |                                                   | bool                                                |


## ZenMethods
### Set Block unbreakable
Uses no paramaeters.  
Returns nothing.  
Does the same as `hardness = -1;`
```zenscript
defObj.setUnbreakable();
```

### Get tickrate in a specific world
Uses an [IWorld](/Vanilla/World/IWorld/) object.  
Returns an int.
```zenscript
defObj.getTickRate(IWorld world);
```

### Check if the block can be placed on another block
Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.
```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```


### Get the block's slipperiness
Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.
```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### Set the block's harvest level
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
