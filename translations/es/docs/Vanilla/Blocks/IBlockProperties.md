# Propiedades de IBlock

BlockProperties es lo que hace que un bloque sea distintivo de otros bloques. Sirve principalmente como superinterfaz para [IBlockState](/Vanilla/Blocks/IBlockState/), lo que significa que todas estas funciones también están disponibles para todos los objetos [IBlockState](/Vanilla/Blocks/IBlockState/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.block.IBlockProperties;`

| ZenGetter                                    | Tipo de devolución                      | Descripción                                                                     |
| -------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| puede ProvidePower                           | pluma                                   | Devuelve si el bloque referenciado puede proporcionar Poder de Redstone         |
| mobilityFlag                                 | cadena                                  | Devuelve la bandera de movilidad [](/Vanilla/Blocks/IMobilityFlag/) como string |
| material                                     | [IMaterial](/Vanilla/Blocks/IMaterial/) | Devuelve el [material](/Vanilla/Blocks/IMaterial/) del bloque                   |
| Suffocación causal                           | pluma                                   | Devuelve si el bloque puede atascarte.                                          |
| hasta-progreso de interrupción personalizado | pluma                                   |                                                                                 |
| bloquear cubo normal                         | pluma                                   |                                                                                 |
| fullBlock                                    | pluma                                   |                                                                                 |
| cubo completo                                | pluma                                   |                                                                                 |
| cubo normal                                  | pluma                                   |                                                                                 |
| opaqueCube                                   | pluma                                   |                                                                                 |
| translúcido                                  | pluma                                   |                                                                                 |
| usarNeighborBrillo                           | pluma                                   |                                                                                 |

## Métodos

### es reemplazable

`booleano es reemplazable (mundo IWorld, IBlockPos pos);`  
Parámetros:

- [IWorld](/Vanilla/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → Posición del bloque

Devuelve un booleano que sais si el bloque puede ser reemplazado o no.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parámetros:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) mundo → El mundo a registrar
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → Posición del bloque

Devuelve un int que representa el valor de luz actual en la ubicación dada.

### Obtener Poder Débil/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Parámetros:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) mundo → El mundo a registrar
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → Posición del bloque
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(mundo IWorld, bloque IBlockPos);`

Parámetros:

- [IWorld](/Vanilla/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → Posición del bloque

Devuelve un int que representa el tipo de entrada del comparador de redstone del bloque.

### Comprueba si una entidad puede aparecer en el bloque

Utilice una [IEntidad](/Vanilla/Entities/IEntity/).  
Devuelve un bool.

```zenscript
blockProperties.canEntitySpawn(Entidad Itidad);
```

### Obtén el Estado Bloque actual

Utilice un [IBlockAccess](/Vanilla/World/IBlockAccess/) y un [IBlockPos](/Vanilla/World/IBlockPos/).  
Devuelve un nuevo objeto de IBlockProperties.

```zenscript
blockProperties.getActualState(IBlockAccess mundo, IBlockPos pos);
```

### Consigue la dureza de un bloque

Usa [IWorld](/Vanilla/World/IWorld/) y un [IBlockPos](/Vanilla/World/IBlockPos/).  
Devuelve un float.

```zenscript
blockProperties.getBlockHardness(mundo IWorld, IBlockPos pos);
```

### Obtén la opacidad de un bloque

Usa [IWorld](/Vanilla/World/IWorld/) y un [IBlockPos](/Vanilla/World/IBlockPos/).  
Devuelve un int.

```zenscript
blockProperties.getLightOpacy(mundo IWorld, IBlockPos pos);
```

### Obtén el arnés relativo de un jugador

Usa un [IPlayer](/Vanilla/Players/IPlayer/), un [IWorld](/Vanilla/World/IWorld/) y un [IBlockPos](/Vanilla/World/IBlockPos/).  
Devuelve un float.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(Jugador IPlayer, Mundo IWorld, IBlockPos pos);
```

### Evalúa si un lado del bloque es sólido

Utilice un [IBlockAccess](/Vanilla/World/IBlockAccess/), un [IBlockPos](/Vanilla/World/IBlockPos/) y un objeto [IFacing](/Vanilla/World/IFacing/) .  
Devuelve un bool.

```zenscript
blockProperties.isSideSolid(IBlockAccess mundo, IBlockPos pos, IFacing facing);
```