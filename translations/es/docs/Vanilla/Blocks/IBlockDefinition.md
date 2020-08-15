# IBlockDefinition

The IBlockDefinition objects provide additional information on blocks.

## Importando el paquete

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## Calling an IBlockDefinition object

* Using the `definition` ZenGetter on an [IBlock](/Vanilla/Blocks/IBlock/) object.

## Calling an IBlockDefinition List

* Using `game.blocks` to get a list of all block definition in the game.

## ZenGetters/ZenSetters

| ZenGetter            | Ajuste              | ¿Qué hace                                    | Tipo                                                     |
| -------------------- | ------------------- | -------------------------------------------- | -------------------------------------------------------- |
|                      | canSpawnInBlock     | Returns if an entity can spawn in this block | pluma                                                    |
| creativaTab          | creativaTab         |                                              | [Pestaña ICreativa](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState         |                     |                                              | [IBlockState](/Vanilla/Blocks/IBlockState/)              |
|                      | defaultSlipperiness |                                              | flotante                                                 |
| id                   |                     | Returns the block ID                         | cadena                                                   |
| displayName          |                     | Returns the block's DisplayName              | cadena                                                   |
|                      | dureza              |                                              | int                                                      |
| nivel de cosecha     |                     | Returns the block's harvest level            | int                                                      |
| cosechar herramienta |                     | Returns the block's harvest tool             | cadena                                                   |
|                      | ligereza            |                                              | int                                                      |
|                      | lightLevel          |                                              | int                                                      |
|                      | resistencia         |                                              | int                                                      |
| unlocalizedName      |                     | Returns the block's unlocalized Name         | cadena                                                   |
| tickRandomly         | tickRandomly        |                                              | pluma                                                    |

## Métodos

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

Uses a string and an int.  
Returns void (nothing).

```zenscript
defObj.setHarvestLevel(string toolclass, int level);
```