# IBlockProperties

BlockProperties are what makes a block distinctive from other blocks. It mainly serves as superinterface to [IBlockState](/Vanilla/Blocks/IBlockState/), that means all these functions are also available to all [IBlockState](/Vanilla/Blocks/IBlockState/) objects.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockProperties;`

| ZenGetter                 | Tipo de devolución                      | Descripción                                                             |
| ------------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| canProvidePower           | pluma                                   | Devuelve si el bloque referenciado puede proporcionar Poder de Redstone |
| mobilityFlag              | cadena                                  | Returns the [mobility flag](/Vanilla/Blocks/IMobilityFlag/) as string   |
| material                  | [IMaterial](/Vanilla/Blocks/IMaterial/) | Returns the block's [material](/Vanilla/Blocks/IMaterial/)              |
| causesSuffocation         | pluma                                   | Returns whether the block can choke you.                                |
| hasCustomBreakingProgress | pluma                                   |                                                                         |
| blockNormalCube           | pluma                                   |                                                                         |
| fullBlock                 | pluma                                   |                                                                         |
| fullCube                  | pluma                                   |                                                                         |
| normalCube                | pluma                                   |                                                                         |
| opaqueCube                | pluma                                   |                                                                         |
| translucent               | pluma                                   |                                                                         |
| useNeighborBrightness     | pluma                                   |                                                                         |

## Métodos

### es reemplazable

`booleano es reemplazable (mundo IWorld, IBlockPos pos);`  
Parámetros:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Devuelve un booleano que sais si el bloque puede ser reemplazado o no.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parámetros:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Devuelve un int que representa el valor de luz actual en la ubicación dada.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Parameters:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(mundo IWorld, bloque IBlockPos);`

Parámetros:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Devuelve un int que representa el tipo de entrada del comparador de redstone del bloque.

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