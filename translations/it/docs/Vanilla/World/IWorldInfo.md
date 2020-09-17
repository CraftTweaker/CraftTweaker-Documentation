# IWorldInfo

L'interfaccia World Info viene utilizzata per ottenere ancora più informazioni da un oggetto [IWorld](/Vanilla/World/IWorld/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IWorldInfo;`

## ZenMetodi senza parametri e ZenGetters

| ZenGetter             | ZenMethod                  | Tipo Di Reso |
| --------------------- | -------------------------- | ------------ |
| ComandiConsentiti     | isCommandsAllowed()        | bool         |
| borderCenterX         | getBorderCenterX()         | doppia       |
| borderCenterZ         | getBorderCenterZ()         | doppia       |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | doppia       |
| borderSafeZone        | getBorderSafeZone()        | doppia       |
| borderSize            | getBorderSize()            | doppia       |
| borderWarningDistanza | getBorderWarningDistance() | int          |
| borderWarningTime     | getBorderWarningTime()     | int          |
| cleanWeatherTime      | getCleanWeatherTime()      | doppia       |
| difficoltà            | getDifficulty()            | stringa      |
| generatorOptions      | getGeneratorOptions()      | stringa      |
| lastTimePlayed        | getLastTimePlayed()        | lungo        |
| tempo di pioggia      | getRainTime()              | int          |
| saveVersion           | getSaveVersion()           | int          |
| seme                  | getSeed()                  | lungo        |
| spawnX                | getSpawnX()                | int          |
| spawnY                | getSpawnY()                | int          |
| spawnZ                | getSpawnZ()                | int          |
| ThunderTime           | getThunderTime()           | int          |
| versionId             | getVersionId()             | int          |
| versionName           | getVersionName()           | stringa      |
| worldName             | getWorldName()             | stringa      |
| worldTotalTime        | getWorldTotalTime()        | lungo        |
| boderLerpTarget       | getBoderLerpTarget()       | doppia       |
| boderLerpTime         | getBoderLerpTime()         | lungo        |
| DifficoltàBloccato    | isDifficultyLocked()       | bool         |
| hardcoreModeAbilitato | isHardcoreModeEnabled()    | bool         |
| inizializzato         | isInitialized()            | bool         |
| mapFeaturesAbilitato  | isMapFeaturesEnabled()     | bool         |
| tuono                 | isThundering()             | bool         |
| versionSnapshot       | isVersionnapshot()         | bool         |