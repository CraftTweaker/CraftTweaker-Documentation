# IWorldInfo

The World Info interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`

## ZenMethods sin parámetros y ZenGetters

| ZenGetter             | Método                     | Tipo de devolución |
| --------------------- | -------------------------- | ------------------ |
| commandsAllowed       | isCommandsAllowed()        | pluma              |
| borderCenterX         | getBorderCenterX()         | doble              |
| borderCenterZ         | getBorderCenterZ()         | doble              |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | doble              |
| borderSafeZone        | getBorderSafeZone()        | doble              |
| borderSize            | getBorderSize()            | doble              |
| borderWarningDistance | getBorderWarningDistance() | int                |
| borderWarningTime     | getBorderWarningTime()     | int                |
| cleanWeatherTime      | getCleanWeatherTime()      | doble              |
| difficulty            | getDifficulty()            | cadena             |
| generatorOptions      | getGeneratorOptions()      | cadena             |
| lastTimePlayed        | getLastTimePlayed()        | largo              |
| rainTime              | getRainTime()              | int                |
| saveVersion           | getSaveVersion()           | int                |
| seed                  | getSeed()                  | largo              |
| spawnX                | getSpawnX()                | int                |
| spawnY                | getSpawnY()                | int                |
| spawnZ                | getSpawnZ()                | int                |
| thunderTime           | getThunderTime()           | int                |
| versionId             | getVersionId()             | int                |
| versionName           | getVersionName()           | cadena             |
| worldName             | getWorldName()             | cadena             |
| worldTotalTime        | getWorldTotalTime()        | largo              |
| boderLerpTarget       | getBoderLerpTarget()       | doble              |
| boderLerpTime         | getBoderLerpTime()         | largo              |
| difficultyLocked      | isDifficultyLocked()       | pluma              |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | pluma              |
| initialized           | isInitialized()            | pluma              |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | pluma              |
| truenos               | isThundering()             | pluma              |
| versionSnapshot       | isVersionSnapshot()        | pluma              |