# IBlockState

An IBlockState object represents a block's current state.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.blocks.IBlockState;` 

## ZenMethods and ZenGetters
|ZenMethod                       |ZenGetter                  | Return Type                                                          | Description                                             |
|--------------------------------|----------------           |----------------------------------------------------------------------|---------------------------------------------------------|
|getBlock()                      |block                      | [IBlock](/Vanilla/Blocks/IBlock)                                     | Returns the refered block                               |
|getMeta()                       |meta                       | int                                                                  | Returns the refered block's metadata                    |
|canProvidePower()               |canProvidePower            | bool                                                                 | Returns if the refered block can provide Redstone Power |
|getMobilityFlag()               |mobilityFlag               | string                                                               | Returns the [mobility flag](MobilityFlag) as string     |
|getMaterial()                   |material                   | [IMaterial](IMaterial)                                               | Returns the block's [material](IMaterial)               |
|causesSuffocation()             |causesSuffocation          | bool                                                                 | Returns whether the block can choke you.                |
|getAmbientOcclusionLightValue() |ambientOcclusionLightValue | float                                                                |                                                         |
|getLightOpacy()                 |lightOpacy                 | int                                                                  |                                                         |
|getLightValue()                 |lightValue                 | int                                                                  |                                                         |
|hasCustomBreakingProgress()     |hasCustomBreakingProgress  | bool                                                                 |                                                         |
|isBlockNormalCube()             |blockNormalCube            | bool                                                                 |                                                         |
|isFullBlock()                   |fullBlock                  | bool                                                                 |                                                         |
|isFullCube()                    |fullCube                   | bool                                                                 |                                                         |
|isNormalCube()                  |normalCube                 | bool                                                                 |                                                         |
|isOpaqueCube()                  |opaqueCube                 | bool                                                                 |                                                         |
|isTopSolid()                    |topSolid                   | bool                                                                 |                                                         |
|isTranslucent()                 |translucent                | bool                                                                 |                                                         |
|useNeighborBrightness()         |useNeighborBrightness      | bool                                                                 |                                                         |


## ZenMethods
### isReplacable
`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns a boolean that sais whether the block can be replaced or not.


### getLightValue
`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns an int representing the current light value at the given location.

### getWeakPower/GetStrongPower
`int getWeakPower(IWorld world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IWorld world, IBlockPos blockPos, Facing facing);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position
- [Facing](/Vanilla/World/Facing) facing → The side to be checked
Returns an int representing the current redstone power on this side.

### getComparatorInputOverride
`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns an int representing the block's redstone comparator input override type.


### Comparing two IBlockState objects

You can either use `int compare(IBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` returns an int that is 0 if they are equal
- `state == other` returns a bool that is true of they are equal


### Check if an entity can spawn on the block

Use an [IEntity](/Vanilla/Entities/IEntity).  
Returns a bool.
```
blockState.canEntitySpawn(IEntity entity);
```

### Check if a side of the block does block rendering

Use an [IWorld](/Vanilla/World/IWorld), an [IBlockPos](/Vanilla/World/IBlockPos) and an [IFacing](/Vanilla/World/IFacing) object.  
Returns a bool.
```
blockState.doesSideBlockRendering(IWorld world, IBlockPos pos, IFacing facing);
```

### Get the actual BlockState

Use an [IWorld](/Vanilla/World/IWorld) and an [IBlockPos](/Vanilla/World/IBlockPos).  
Returns a new IBlockState.

```
blockState.getActualState(IWorld world, IBlockPos pos);
```

### Get a block's hardness

Use [IWorld](/Vanilla/World/IWorld) and an [IBlockPos](/Vanilla/World/IBlockPos).  
Returns a float.
```
blockState.getBlockHardness(IWorld world, IBlockPos pos);
```

### Get a block's light opacy

Use [IWorld](/Vanilla/World/IWorld) and an [IBlockPos](/Vanilla/World/IBlockPos).  
Returns an int.
```
blockState.getLightOpacy(IWorld world, IBlockPos pos);
```

### Get a block's packedLightMapCoords

Use [IWorld](/Vanilla/World/IWorld) and an [IBlockPos](/Vanilla/World/IBlockPos).  
Returns an int.
```
blockState.getPackedLightMapCoords(IWorld world, IBlockPos pos);
```

### Get a playerÄs Relative Block Harness

Use an [IPlayer](/Vanilla/Game/IPlayer), an [IWorld](/Vanilla/World/IWorld) and an [IBlockPos](/Vanilla/World/IBlockPos).  
Returns a float.
```
blockState.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### Check if a side of the block is solid

Use an [IWorld](/Vanilla/World/IWorld), an [IBlockPos](/Vanilla/World/IBlockPos) and an [IFacing](/Vanilla/World/IFacing) object.  
Returns a bool.
```
blockState.isSideSolid(IWorld world, IBlockPos pos, IFacing facing);
```

### Check if a side of the block should be rendered

Use an [IWorld](/Vanilla/World/IWorld), an [IBlockPos](/Vanilla/World/IBlockPos) and an [IFacing](/Vanilla/World/IFacing) object.  
Returns a bool.
```
blockState.shouldSideBeRendered(IWorld world, IBlockPos pos, IFacing facing);
```