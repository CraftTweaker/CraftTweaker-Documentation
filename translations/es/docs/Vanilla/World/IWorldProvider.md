# IWorldProvider

La interfaz de proveedor de mundo se utiliza para obtener aún más información de un objeto de [IWorld](/Vanilla/World/IWorld/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.world.IWorldProvider;`

## Crear un proveedor de mundo

Normalmente, puedes obtener el worldProvider de un objeto [IWorld](/Vanilla/World/IWorld/) o algunas funciones, aunque si necesito crear uno usted mismo, aquí es cómo lo haces:  
Tenga en cuenta que este método sólo debe ser llamado dentro de funciones que están destinadas a ser ejecutadas dentro de minecraft, no durante el círculo de carga.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMethods sin parámetros y ZenGetters

| ZenGetter                      | Método                             | Tipo de devolución                     |
| ------------------------------ | ---------------------------------- | -------------------------------------- |
| actualHeight                   | getActualHeight()                  | int                                    |
| nivel real del campo           | Nivel medio                        | int                                    |
| nube de altura                 | getCloudHeight()                   | flotante                               |
| Factor actual de la fase lunar | obtener Factor de la fase lunar () | flotante                               |
| dimensiónID                    | getDimensionID()                   | int                                    |
| altura                         | getHeight()                        | int                                    |
| horizonte                      | getHorizon()                       | doble                                  |
| cuadro de iluminación          | getLightBrightnesTable()           | flotante[]                             |
| movementFactor                 | getMovementFactor()                | doble                                  |
| randomizedSpawnPoint           | getRandomizedSpawnPoint()          | [IBlockPos](/Vanilla/World/IBlockPos/) |
| guardar carpeta                | getSaveFolder()                    | cadena                                 |
| semilla                        | seed()                             | largo                                  |
| spawnCoordinate                | getSpawnCoordinate()               | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint                     | getSpawnPoint()                    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor                 | getVoidFogYFactor()                | doble                                  |
| mundoTiempo                    | getWorldTime()                     | largo                                  |
| canRespawnHere                 | canRespawnHere()                   | pluma                                  |
| waterVaporize                  | WaterVaporize()                    | pluma                                  |
| semáforo                       | hasSkyLight()                      | pluma                                  |
| daytime                        | isDaytime()                        | pluma                                  |
| ni                             | está/es ()                         | pluma                                  |
| color cielo                    | está SkyColored()                  | pluma                                  |
| mundo de superficie            | es SurfaceWorld()                  | pluma                                  |

## ZenMethods con parámetros

### obtener bioma en una posición determinada

Utilice un objeto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Devuelve un objeto [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldProvObj.getBiome(IBlockPos position);
```

### obtener la fase lunar por un tiempo específico

Usa un largo.  
Devuelve un int.

```zenscript
worldProvObj.getMoonPhase(mucho tiempo);
```

### obtener Dimensión de Reaparición para un jugador específico

Utilice un objeto [IPlayer](/Vanilla/Players/IPlayer/) .  
Devuelve un nuevo objeto IWorldProvider.

```zenscript
mundProvObj.getRespawnDimension(Jugador IPlay);
```

### obtener brillo (factor) en un determinado

Usa un float.  
Devuelve un float.

```zenscript
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### Evalúa si un bloque tiene una alta humedad

Utilice un objeto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Devuelve un boolean.

```zenscript
mundoProvObj.isBlockHighHumidy(IBlockPos pos);
```