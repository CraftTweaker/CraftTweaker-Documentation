# IWorld

Un objeto IWorld representa el mundo en el que se encuentra el jugador.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.World;`

## ZenMethods sin parámetros y ZenGetters

| Método             | ZenGetter           | Tipo de devolución                                             | Descripción                                                                                                                                                                                                                               |
| ------------------ | ------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| es remoto ()       | remoto              | boolean                                                        | Verdadero si el mundo es un cliente "esclavo"; los cambios no serán guardados ni propagados desde este mundo. Por ejemplo, los mundos del servidor tienen este valor como falso, los mundos del cliente tienen este valor como verdadero. |
| isRaining()        | lloviendo           | boolean                                                        | Devuelve verdadero si está lloviendo actualmente                                                                                                                                                                                          |
| isThundering()     | truenos             | boolean                                                        | Devuelve verdadero si actualmente es trueno                                                                                                                                                                                               |
| getMoonPhase()     | fase lunar          | int                                                            | Devuelve la fase lunar actual                                                                                                                                                                                                             |
| isDayTime()        | dayTime             | boolean                                                        | Comprueba si es hora del día                                                                                                                                                                                                              |
| getWorldTime()     | tiempo              | largo                                                          | Devuelve el tiempo del mundo                                                                                                                                                                                                              |
| getDimension()     | dimensión           | int                                                            | Devuelve la dimensión del mundo                                                                                                                                                                                                           |
| es SurfaceWorld()  | mundo de superficie | boolean                                                        | Devuelve si estás en un mundo superficial o no                                                                                                                                                                                            |
| getDimensionType() | tipo de dimensión   | Cadena                                                         | Devuelve el nombre del tipo de la dimensión                                                                                                                                                                                               |
| getRandom()        | aleatorio           | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Devuelve el generador de números aleatorios del mundo                                                                                                                                                                                     |

## ZenMethods con parámetros

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);