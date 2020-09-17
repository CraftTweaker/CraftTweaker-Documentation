# ICTBlockState

Un objeto ICTBlockState representa el estado actual de un bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.BlockState;`

## Llamar a un ICTBlockState

Puedes obtener un ICTBlockState ya sea como parámetro en una función de [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) o desde el [Bloquket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## ZenMethods y ZenGetters

| Método            | ZenGetter | Tipo de devolución                                                      | Descripción                                                             |
| ----------------- | --------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| getBlock()        | bloque    | [IBlock](/Vanilla/Blocks/IBlock/)                                       | Devuelve el bloque referido                                             |
| getMeta()         | meta      | int                                                                     | Devuelve los metadatos del bloque referido                              |
| canProvidePower() |           | boolean                                                                 | Devuelve si el bloque referenciado puede proporcionar Poder de Redstone |
| getMobilityFlag() |           | [Reacción Push](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Devuelve la bandera de reacción push                                    |

## Métodos

### es reemplazable

`booleano es reemplazable (mundo IWorld, IBlockPos pos);`  
Parámetros:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Posición del bloque

Devuelve un booleano que sais si el bloque puede ser reemplazado o no.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parámetros:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Posición del bloque

Devuelve un int que representa el valor de luz actual en la ubicación dada.

### Obtener Poder Débil

`int getWeakPower(IWorld, IBlockPos blockPos, froning facing);`  
Parámetros:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Posición del bloque
- [Enfrente](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) mirando → El lado a ser revisado

Devuelve un int que representa el poder actual de redstone en este lado.

### getComparatorInputOverride

`int getComparatorInputOverride(mundo IWorld, bloque IBlockPos);`

Parámetros:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Posición del bloque

Devuelve un int que representa el tipo de entrada del comparador de redstone del bloque.

### Comparando dos objetos ICTBlockState

Puede usar `int compare(ICTBlockState other);` o los ZenCompare Tokens `==` `!=`.  
Sin embargo, el retorno de diferentes tipos:

- `state.compare(other)` devuelve un mensaje que es 0 si son iguales
- `estado == otro` devuelve un bool que es cierto de que son iguales