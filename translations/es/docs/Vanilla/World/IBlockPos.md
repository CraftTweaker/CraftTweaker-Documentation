# IBlockPos

Un objeto IBlockPos representa una posición en el juego.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;`

## ZenMethods sin parámetros

| Método       | ZenGetter/Caster | Tipo de devolución                        | Descripción                                |
| ------------ | ---------------- | ----------------------------------------- | ------------------------------------------ |
| getX()       | x                | int                                       | Devuelve el valor X de la posición         |
| getY()       | y                | int                                       | Devuelve el valor Y de la posición         |
| getZ()       | z                | int                                       | Devuelve el valor Z de la posición         |
| asPosition3f | as IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | Returns the position as Position3f Object. |

## ZenMethods con parámetros

### Desplazamiento

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](/Vanilla/World/IFacing/) objects using the static methods provided there.

- [IFacing](/Vanilla/World/IFacing/) direction → The direction
- desplazamiento int → cuántos bloques en esa dirección?