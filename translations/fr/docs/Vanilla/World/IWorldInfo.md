# IWorldInfo

L'interface World Info est utilisée pour obtenir encore plus d'informations sur un objet [IWorld](/Vanilla/World/IWorld/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IWorldInfo ;`

## Méthodes Zen sans paramètres et ZenGetters

| ZenGetter                                | Méthode Zen                | Type de retour       |
| ---------------------------------------- | -------------------------- | -------------------- |
| Commandes autorisées                     | isCommandsAutorisé()       | booléen              |
| borduresunnamed@@0                       | getBorderCenterX()         | double               |
| borderCenterZ                            | getBorderCenterZ()         | double               |
| format@@0 borderDamagePerBlock           | getBorderDamagePerBlock()  | double               |
| borderSafeZone                           | getBorderSafeZone()        | double               |
| Taille des bordures                      | getBorderSize()            | double               |
| Distance de l'avertissement des bordures | getBorderWarningDistance() | Indice               |
| avertissementborderTime                  | getBorderWarningTime()     | Indice               |
| Nettoyage météo                          | getCleanWeatherTime()      | double               |
| difficulté                               | getDifficulty()            | chaîne de caractères |
| Options du générateur                    | getGeneratorOptions()      | chaîne de caractères |
| dernière fois joué                       | getLastTimePlayed()        | long                 |
| temps pluvieux                           | getRainTime()              | Indice               |
| Enregistrer la version                   | getSaveVersion()           | Indice               |
| graine                                   | getSeed()                  | long                 |
| spawnX                                   | getSpawnX()                | Indice               |
| spawnY                                   | getSpawnY()                | Indice               |
| spawnZ                                   | getSpawnZ()                | Indice               |
| temps de tonnerre                        | getThunderTime()           | Indice               |
| versionId                                | getVersionId()             | Indice               |
| Nom de la version                        | getVersionName()           | chaîne de caractères |
| Nom du monde                             | getWorldName()             | chaîne de caractères |
| Temps total dans le monde                | getWorldTotalTime()        | long                 |
| boderLerpTarget                          | getBoderLerpTarget()       | double               |
| boderLerpTime                            | getBoderLerpTime()         | long                 |
| Difficulté verrouillée                   | isDifficultyLocked()       | booléen              |
| hardcoreMode activé                      | isHardcoreModeEnabled()    | booléen              |
| initialisé                               | isInitialized()            | booléen              |
| Fonctionnalités de la carte activées     | isMapFeaturesActived()     | booléen              |
| tonnerre                                 | isThundering()             | booléen              |
| Instantané de version                    | isVersionSnapshot()        | booléen              |