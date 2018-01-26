# IBlockDefinition

The IBlockDefinition objects provide additional information on blocks.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## Calling an IBlockDefinition object

* Using the `definition` ZenGetter on an [IBlock](IBlock) object.

## Calling an IBlockDefinition List

* Using `game.blocks` to get a list of all block definition in the game.

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | What does it do                              | Type                                               |
|-----------------|---------------------|----------------------------------------------|----------------------------------------------------|
|                 | canSpawnInBlock     | Returns if an entity can spawn in this block | bool                                               |
| creativeTab     | creativeTab         |                                              | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab) |
| defaultState    |                     |                                              | [IBlockState](IBlockState)                         |
|                 | defaultSlipperiness |                                              | float                                              |
| id              |                     | Returns the block ID                         | string                                             |
| displayName     |                     | Returns the block's DisplayName              | string                                             |
|                 | hardness            |                                              | int                                                |
| harvestLevel    |                     | Returns the block's harvest level            | int                                                |
| harvestTool     |                     | Returns the block's harvest tool             | string                                             |
|                 | lightOpacy          |                                              | int                                                |
|                 | lightLevel          |                                              | int                                                |
|                 | resistance          |                                              | int                                                |
| unlocalizedName | unlocalizedName     | Returns/Sets the block's unlocalized Name    | string                                             |
| tickRandomly    | tickRandomly        |                                              | bool                                               |


## ZenMethods
### Set Block unbreakable
Uses no paramaeters.  
Returns nothing.  
Does the same as `hardness = -1;`
```
defObj.setUnbreakable();
```

### Get tickrate in a specific world
Uses an [IWorld](/Vanilla/World/IWorld) object.  
Returns an int.
```
defObj.getTickRate(IWorld world);
```

### Check if the block can be placed on another block
Uses an [IWorld](/Vanilla/World/IWorld) object, an [IBlockPos](/Vanilla/World/IBlockPos) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing) object.  
Returns a bool.
```
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```


### Get the block's slipperiness
Uses an [IBlockState](IBlockState), an [IBlockAccess](/Vanilla/World/IBlockAccess) object, an [IBlockPos](/Vanilla/World/IBlockPos) and an optional [IEntity](/Vanilla/Entites/IEntity) object.  
Returns a float.
```
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### Set the block's harvest level
Uses a string and an int.  
Returns void (nothing).
```
defObj.setHarvestLevel(string toolclass, int level);
```
