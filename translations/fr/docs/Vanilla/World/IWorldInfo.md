# IWorldInfo

The World Info interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`

## ZenMethods without parameters and ZenGetters

| ZenGetter             | Méthode Zen                | Type de retour       |
| --------------------- | -------------------------- | -------------------- |
| commandsAllowed       | isCommandsAllowed()        | booléen              |
| borderCenterX         | getBorderCenterX()         | double               |
| borderCenterZ         | getBorderCenterZ()         | double               |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | double               |
| borderSafeZone        | getBorderSafeZone()        | double               |
| borderSize            | getBorderSize()            | double               |
| borderWarningDistance | getBorderWarningDistance() | Indice               |
| borderWarningTime     | getBorderWarningTime()     | Indice               |
| cleanWeatherTime      | getCleanWeatherTime()      | double               |
| difficulty            | getDifficulty()            | chaîne de caractères |
| generatorOptions      | getGeneratorOptions()      | chaîne de caractères |
| lastTimePlayed        | getLastTimePlayed()        | long                 |
| rainTime              | getRainTime()              | Indice               |
| saveVersion           | getSaveVersion()           | Indice               |
| seed                  | getSeed()                  | long                 |
| spawnX                | getSpawnX()                | Indice               |
| spawnY                | getSpawnY()                | Indice               |
| spawnZ                | getSpawnZ()                | Indice               |
| thunderTime           | getThunderTime()           | Indice               |
| versionId             | getVersionId()             | Indice               |
| versionName           | getVersionName()           | chaîne de caractères |
| worldName             | getWorldName()             | chaîne de caractères |
| worldTotalTime        | getWorldTotalTime()        | long                 |
| boderLerpTarget       | getBoderLerpTarget()       | double               |
| boderLerpTime         | getBoderLerpTime()         | long                 |
| difficultyLocked      | isDifficultyLocked()       | booléen              |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | booléen              |
| initialized           | isInitialized()            | booléen              |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | booléen              |
| thundering            | isThundering()             | booléen              |
| versionSnapshot       | isVersionSnapshot()        | booléen              |