# IBlockProperties

BlockProperties are what makes a block distinctive from other blocks. It mainly serves as superinterface to [IBlockState](/Vanilla/Blocks/IBlockState/), that means all these functions are also available to all [IBlockState](/Vanilla/Blocks/IBlockState/) objects.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlockProperties;`

| Геттер                    | Возвращаемый тип                        | Description                                                           |
| ------------------------- | --------------------------------------- | --------------------------------------------------------------------- |
| canProvidePower           | bool                                    | Returns if the refered block can provide Redstone Power               |
| mobilityFlag              | string                                  | Returns the [mobility flag](/Vanilla/Blocks/IMobilityFlag/) as string |
| material                  | [IMaterial](/Vanilla/Blocks/IMaterial/) | Returns the block's [material](/Vanilla/Blocks/IMaterial/)            |
| causesSuffocation         | bool                                    | Returns whether the block can choke you.                              |
| hasCustomBreakingProgress | bool                                    |                                                                       |
| blockNormalCube           | bool                                    |                                                                       |
| fullBlock                 | bool                                    |                                                                       |
| fullCube                  | bool                                    |                                                                       |
| normalCube                | bool                                    |                                                                       |
| opaqueCube                | bool                                    |                                                                       |
| translucent               | bool                                    |                                                                       |
| useNeighborBrightness     | bool                                    |                                                                       |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Returns a boolean that sais whether the block can be replaced or not.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameters:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Returns an int representing the current light value at the given location.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Parameters:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameters:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Returns an int representing the block's redstone comparator input override type.

### Check if an entity can spawn on the block

Use an [IEntity](/Vanilla/Entities/IEntity/).  
Returns a bool.

```zenscript
blockProperties.canEntitySpawn(IEntity entity);
```

### Get the actual BlockState

Use an [IBlockAccess](/Vanilla/World/IBlockAccess/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns a new IBlockProperties object.

```zenscript
blockProperties.getActualState(IBlockAccess world, IBlockPos pos);
```

### Get a block's hardness

Use [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns a float.

```zenscript
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### Get a block's light opacy

Use [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns an int.

```zenscript
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### Get a player's Relative Block Harness

Use an [IPlayer](/Vanilla/Players/IPlayer/), an [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns a float.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### Check if a side of the block is solid

Use an [IBlockAccess](/Vanilla/World/IBlockAccess/), an [IBlockPos](/Vanilla/World/IBlockPos/) and an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.

```zenscript
blockProperties.isSideSolid(IBlockAccess world, IBlockPos pos, IFacing facing);
```