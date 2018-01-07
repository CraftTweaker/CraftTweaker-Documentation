# IBlockAccess

BlockAccess objects are a group of blocks accessible via coordinates. They mainly serves as superinterface to [IWorld](IWorld), that means all these functions are also available to all [IWorld](IWorld) objects.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.world.IBlockAccess`


## ZenMethods
### Get or Set a blockState at a specific Position
Use an [IBlockPos](IBlockPos) Object and an [IBlockState](/Vanilla/Blocks/IBlockState) Object.  
Returns an [IBlockState](/Vanilla/Blocks/IBlockState).

```
accObj.getBlockState(IBlockPos pos);
```

### Check if a block is an air block.
Use an [IBlockPos](IBlockPos) object.  
Returns a bool.
```
accObj.isAirBlock(IBlockPos pos);
```

### Get strong Power at a block's side
Use an [IBlockPos](IBlockPos) object and an [IFacing](IFacing) object.  
Returns an int.
```
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```