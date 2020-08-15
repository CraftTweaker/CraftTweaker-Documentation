# IBlockProperties

BlockProperties are what makes a block distinctive from other blocks. It mainly serves as superinterface to [IBlockState](/Vanilla/Blocks/IBlockState/), that means all these functions are also available to all [IBlockState](/Vanilla/Blocks/IBlockState/) objects.

## Dieses Paket importieren

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockProperties;`

| ZenGetter                 | Rückgabetyp                             | Beschreibung                                                          |
| ------------------------- | --------------------------------------- | --------------------------------------------------------------------- |
| canProvidePower           | bool                                    | Gibt zurück, wenn der empfohlene Block Redstone-Power bieten kann     |
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

## ZenMethoden

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameter:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Gibt einen booleschen Wert zurück, der sicherstellt, ob der Block ersetzt werden kann oder nicht.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameter:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Gibt eine Int zurück, die den aktuellen Lichtwert an der angegebenen Stelle darstellt.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Parameters:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameter:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Gibt eine Int zurück, die den Rotsteinvergleichungstyp des Blocks überschreibt.

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