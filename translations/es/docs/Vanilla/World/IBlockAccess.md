# Acceso a IBlock

Los objetos BlockAccess son un grupo de bloques accesibles a través de coordenadas. Sirven principalmente como superinterfaz para [IWorld](/Vanilla/World/IWorld/), lo que significa que todas estas funciones también están disponibles para todos los objetos [IWorld](/Vanilla/World/IWorld/).

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.world.IBlockAccess`

## Métodos

### Obtener o establecer un blockState en una posición específica

Usa un objeto [IBlockPos](/Vanilla/World/IBlockPos/) y un objeto [IBlockState](/Vanilla/Blocks/IBlockState/) .  
Devuelve un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### Evalúa si un bloque es un bloque de aire.

Utilice un objeto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Devuelve un bool.

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### Consigue Poder fuerte a un lado de un bloque

Usa un objeto [IBlockPos](/Vanilla/World/IBlockPos/) y un objeto [IFacing](/Vanilla/World/IFacing/) .  
Devuelve un int.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```