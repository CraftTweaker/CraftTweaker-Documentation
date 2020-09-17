# IWorldProvider

L'interfaccia del World Provider viene utilizzata per ottenere ancora più informazioni da un oggetto [IWorld](/Vanilla/World/IWorld/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IWorldProvider;`

## Crea un worldProvider

Normalmente, è possibile ottenere il mondoProvider da un oggetto [IWorld](/Vanilla/World/IWorld/) o alcune funzioni, anche se se yo ha bisogno di creare te stesso, ecco come lo fai:  
Nota che questo metodo dovrebbe essere chiamato solo all'interno di funzioni che devono essere eseguite all'interno di minecraft, non durante il cerchio di carico.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMetodi senza parametri e ZenGetters

| ZenGetter              | ZenMethod                   | Tipo Di Reso                           |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int                                    |
| actualGroundLevel      | getAverageGroundLevel()     | int                                    |
| cloudAltezza           | getCloudHeight()            | galleggiante                           |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | galleggiante                           |
| dimensionID            | getDimensionID()            | int                                    |
| altezza                | getHeight()                 | int                                    |
| horizon                | getHorizon()                | doppia                                 |
| lightBrightnesTable    | getLightBrightnesTable()    | float[]                                |
| movementFactor         | getMovementFactor()         | doppia                                 |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| saveFolder             | getSaveFolder()             | stringa                                |
| seme                   | getSeed()                   | lungo                                  |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | doppia                                 |
| worldTime              | getWorldTime()              | lungo                                  |
| canRespawnHere         | canRespawnHere()            | bool                                   |
| waterVaporize          | doesWaterVaporize()         | bool                                   |
| lucernario             | hasSkyLight()               | bool                                   |
| daytime                | isDaytime()                 | bool                                   |
| nether                 | isNetherland()              | bool                                   |
| skyColored             | isSkyColored()              | bool                                   |
| surfaceWorld           | isSurfaceWorld()            | bool                                   |

## ZenMethods con parametri

### ottieni Bioma in una determinata posizione

Usa un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Restituisce un oggetto [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldProvObj.getBiome(IBlockPos position);
```

### ottieni la MoonPhase per un tempo specifico

Usa un lungo.  
Restituisce un int.

```zenscript
worldProvObj.getMoonPhase(lungo tempo);
```

### ottieni la dimensione di Respawn per un giocatore specifico

Usa un oggetto [IPlayer](/Vanilla/Players/IPlayer/) .  
Restituisce un nuovo oggetto IWorldProvider.

```zenscript
worldProvObj.getRespawnDimension(Giocatore);
```

### ottieni Brightnes (fattore) a uno specifico

Usa un float.  
Restituisce un float.

```zenscript
worldProvObj.getStarBrightness(float qualcosa);
worldProvObj.getSunBrightness(float qualcosa);
worldProvObj.getSunBrightnessFactor(float qualcosa);
```

### Controlla se un blocco ha un'umidità elevata

Usa un [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Restituisce un booleano.

```zenscript
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```