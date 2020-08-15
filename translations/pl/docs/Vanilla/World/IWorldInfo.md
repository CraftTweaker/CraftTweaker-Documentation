# IWorldInfo

Interfejs World Info jest używany do uzyskania jeszcze większej ilości informacji z obiektu [IWorld](/Vanilla/World/IWorld/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.world.IWorldInfo;`

## ZenMethods bez parametrów i ZenGetters

| ZenGetter                     | Metoda ZenMethod           | Typ zwrotu  |
| ----------------------------- | -------------------------- | ----------- |
| komendy dozwolone             | isCommandsAllowed()        | bool        |
| Centrum graniczne:            | getBorderCenterX()         | podwójne    |
| Centrum Granic Z              | getBorderCenterZ()         | podwójne    |
| Obrażenia ObrażeńPerBlock     | getBorderDamagePerBlock()  | podwójne    |
| Strefa Granic                 | getBorderSafeZone()        | podwójne    |
| Rozmiar granicy               | getBorderSize()            | podwójne    |
| Odległość Ostrzeżenia Granicy | getBorderWarningDistance() | odcień      |
| Godzina Ostrzeżenia           | getBorderWarningTime()     | odcień      |
| Czysta WeatherTime            | getCleanWeatherTime()      | podwójne    |
| trudności                     | getDifficulty()            | ciąg znaków |
| Opcje generatora              | getGeneratorOptions()      | ciąg znaków |
| lastTimePlayed                | getLastTimePlayed()        | długie      |
| deszcz                        | getRainTime()              | odcień      |
| zapisz wersję                 | getSaveVersion()           | odcień      |
| ziarno                        | getSeed()                  | długie      |
| spawnX                        | getSpawnX()                | odcień      |
| spawnY                        | getSpawnY()                | odcień      |
| spawnZ                        | getSpawnZ()                | odcień      |
| czas niezużyty                | getThunderTime()           | odcień      |
| versionId                     | getVersionId()             | odcień      |
| Nazwa wersji                  | getVersionName()           | ciąg znaków |
| Nazwa świata                  | getWorldName()             | ciąg znaków |
| Świat Czasrazem               | getWorldTotalTime()        | długie      |
| boderLerpTarget               | getBoderLerpTarget()       | podwójne    |
| boderLerpTime                 | getBoderLerpTime()         | długie      |
| trudność zablokowana          | isDifficultyLocked()       | bool        |
| hardcoreModewłączone          | isHardcoreModeEnabled()    | bool        |
| zainicjowane                  | izInitialized()            | bool        |
| Funkcje mapowe włączone       | isMapFeaturesEnabled()     | bool        |
| kruszący                      | isThundering()             | bool        |
| Zrzut wersji                  | isVersionSnapshot()        | bool        |