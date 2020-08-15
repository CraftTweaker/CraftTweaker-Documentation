# IWorldInfo

The World Info interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`

## ZenMethods bez parametrów i ZenGetters

| ZenGetter             | Metoda ZenMethod           | Typ zwrotu  |
| --------------------- | -------------------------- | ----------- |
| commandsAllowed       | isCommandsAllowed()        | bool        |
| borderCenterX         | getBorderCenterX()         | podwójne    |
| borderCenterZ         | getBorderCenterZ()         | podwójne    |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | podwójne    |
| borderSafeZone        | getBorderSafeZone()        | podwójne    |
| borderSize            | getBorderSize()            | podwójne    |
| borderWarningDistance | getBorderWarningDistance() | odcień      |
| borderWarningTime     | getBorderWarningTime()     | odcień      |
| cleanWeatherTime      | getCleanWeatherTime()      | podwójne    |
| difficulty            | getDifficulty()            | ciąg znaków |
| generatorOptions      | getGeneratorOptions()      | ciąg znaków |
| lastTimePlayed        | getLastTimePlayed()        | długie      |
| rainTime              | getRainTime()              | odcień      |
| saveVersion           | getSaveVersion()           | odcień      |
| seed                  | getSeed()                  | długie      |
| spawnX                | getSpawnX()                | odcień      |
| spawnY                | getSpawnY()                | odcień      |
| spawnZ                | getSpawnZ()                | odcień      |
| thunderTime           | getThunderTime()           | odcień      |
| versionId             | getVersionId()             | odcień      |
| versionName           | getVersionName()           | ciąg znaków |
| worldName             | getWorldName()             | ciąg znaków |
| worldTotalTime        | getWorldTotalTime()        | długie      |
| boderLerpTarget       | getBoderLerpTarget()       | podwójne    |
| boderLerpTime         | getBoderLerpTime()         | długie      |
| difficultyLocked      | isDifficultyLocked()       | bool        |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool        |
| initialized           | isInitialized()            | bool        |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool        |
| kruszący              | isThundering()             | bool        |
| versionSnapshot       | isVersionSnapshot()        | bool        |