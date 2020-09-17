# IBlockPos

Un objeto IBlockPos representa una posición en el juego.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.world.IBlockPos;`

## ZenMethods sin parámetros

| Método      | ZenGetter/Caster | Tipo de devolución                        | Descripción                                  |
| ----------- | ---------------- | ----------------------------------------- | -------------------------------------------- |
| getX()      | x                | int                                       | Devuelve el valor X de la posición           |
| getY()      | y                | int                                       | Devuelve el valor Y de la posición           |
| getZ()      | z                | int                                       | Devuelve el valor Z de la posición           |
| posición 3f | como IPosition3f | [Posición 3f](/Vanilla/Utils/Position3f/) | Devuelve la posición como objeto Position3f. |

## ZenMethods con parámetros

### Desplazamiento

Devuelve un nuevo IBlockPos que es bloques `offset` en la dirección `` dirección.

`IBlockPos getOffset(dirección IFacing, desplazamiento int);`

También puedes obtener directamente los objetos [IFacing](/Vanilla/World/IFacing/) usando los métodos estáticos proporcionados allí.

- [Ifroning](/Vanilla/World/IFacing/) dirección → La dirección
- desplazamiento int → cuántos bloques en esa dirección?