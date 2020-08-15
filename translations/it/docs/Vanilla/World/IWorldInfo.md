# IWorldInfo

The World Info interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`

## ZenMetodi senza parametri e ZenGetters

| ZenGetter             | ZenMethod                  | Tipo Di Reso |
| --------------------- | -------------------------- | ------------ |
| commandsAllowed       | isCommandsAllowed()        | bool         |
| borderCenterX         | getBorderCenterX()         | doppia       |
| borderCenterZ         | getBorderCenterZ()         | doppia       |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | doppia       |
| borderSafeZone        | getBorderSafeZone()        | doppia       |
| borderSize            | getBorderSize()            | doppia       |
| borderWarningDistance | getBorderWarningDistance() | int          |
| borderWarningTime     | getBorderWarningTime()     | int          |
| cleanWeatherTime      | getCleanWeatherTime()      | doppia       |
| difficulty            | getDifficulty()            | stringa      |
| generatorOptions      | getGeneratorOptions()      | stringa      |
| lastTimePlayed        | getLastTimePlayed()        | lungo        |
| rainTime              | getRainTime()              | int          |
| saveVersion           | getSaveVersion()           | int          |
| seed                  | getSeed()                  | lungo        |
| spawnX                | getSpawnX()                | int          |
| spawnY                | getSpawnY()                | int          |
| spawnZ                | getSpawnZ()                | int          |
| thunderTime           | getThunderTime()           | int          |
| versionId             | getVersionId()             | int          |
| versionName           | getVersionName()           | stringa      |
| worldName             | getWorldName()             | stringa      |
| worldTotalTime        | getWorldTotalTime()        | lungo        |
| boderLerpTarget       | getBoderLerpTarget()       | doppia       |
| boderLerpTime         | getBoderLerpTime()         | lungo        |
| difficultyLocked      | isDifficultyLocked()       | bool         |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool         |
| initialized           | isInitialized()            | bool         |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool         |
| tuono                 | isThundering()             | bool         |
| versionSnapshot       | isVersionSnapshot()        | bool         |