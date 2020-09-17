# IBlockPos

Un objeto IBlockPos representa una posición en el juego.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.BlockPos;`

## ZenMethods sin parámetros

| Método | ZenGetter | Tipo de devolución | Descripción                        |
| ------ | --------- | ------------------ | ---------------------------------- |
| getX() | x         | int                | Devuelve el valor X de la posición |
| getY() | y         | int                | Devuelve el valor Y de la posición |
| getZ() | z         | int                | Devuelve el valor Z de la posición |

## ZenMethods con parámetros

### Desplazamiento

Devuelve un nuevo IBlockPos que es bloques `offset` en la dirección `directionName` o `mirando` dirección.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` puede tomar estos valores:

- "abajo"
- "arriba"
- "norte"
- "Sur"
- "Este"
- "oeste"

`IBlockPos getOffset(Facing facing, int offset)` Parameters:

- [Enfrente](/Vanilla/World/IFacing/) mirando → La dirección
- desplazamiento int → cuántos bloques en esa dirección?