# IWorldProvider

L'interface World Provider est utilisée pour obtenir encore plus d'informations sur un objet [IWorld](/Vanilla/World/IWorld/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IWorldProvider ;`

## Créer un fournisseur de monde

Normalement, vous pouvez simplement obtenir le World Provider à partir d'un objet [IWorld](/Vanilla/World/IWorld/) ou de certaines fonctions, mais si yo a besoin d'en créer un vous-même, Voici comment vous le faites :  
Notez que cette méthode ne doit être appelée qu'à l'intérieur de fonctions qui sont censées être exécutées dans minecraft, pas pendant le cercle de chargement.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## Méthodes Zen sans paramètres et ZenGetters

| ZenGetter                        | Méthode Zen                 | Type de retour                          |
| -------------------------------- | --------------------------- | --------------------------------------- |
| actualHeight                     | getActualHeight()           | Indice                                  |
| Niveau de terrain actuel         | getMoyageGroundLevel()      | Indice                                  |
| Hauteur du nuage                 | getCloudHeight()            | flottant                                |
| format@@0 currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | flottant                                |
| dimensionID                      | getDimensionID()            | Indice                                  |
| Hauteur                          | getHeight()                 | Indice                                  |
| horizon                          | getHorizon()                | double                                  |
| lightBrightnesTable              | getLightBrightnesTable()    | flotte[]                                |
| Facteur de mouvement             | getMovementFactor()         | double                                  |
| randomizedSpawnPoint             | getRandomizedSpawnPoint()   | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| Enregistrer le dossier           | getSaveFolder()             | chaîne de caractères                    |
| graine                           | getSeed()                   | long                                    |
| Coordonnées du spawn             | getSpawnCoordinate()        | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| point d'apparition               | getSpawnPoint()             | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| voidFogYFactor                   | getVoidFogYFactor()         | double                                  |
| Temps du monde                   | getWorldTime()              | long                                    |
| canRespawnHere                   | canRespawnHere()            | booléen                                 |
| waterVaporize                    | doesWaterVaporize()         | booléen                                 |
| lueur d'horizon                  | hasSkyLight()               | booléen                                 |
| daytime                          | isDaytime()                 | booléen                                 |
| Nether                           | isNether()                  | booléen                                 |
| Couleur du ciel                  | isSkyColored()              | booléen                                 |
| surfaceWorld                     | isSurfaceWorld()            | booléen                                 |

## Méthodes Zen avec les paramètres

### obtenir un Biome à une certaine position

Utilisez soit un objet [IBlockPos](/Vanilla/World/IBlockPos/) .  
Renvoie un objet [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldProvObj.getBiome(position IBlockPos) ;
```

### obtenir la MoonPhase pour une heure spécifique

Utilisez un long.  
Renvoie un int.

```zenscript
worldProvObj.getMoonPhase(long temps);
```

### obtenir une dimension de réapparition pour un joueur spécifique

Utilisez un objet [IPlayer](/Vanilla/Players/IPlayer/) .  
Renvoie un nouvel objet IWorldProvider.

```zenscript
worldProvObj.getRespawnDimension(joueur IPlayer);
```

### obtenir les Brightnes (facteur) à un spécifique

Utilisez un flotteur.  
Renvoie un float.

```zenscript
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### Vérifier si un bloc a une humidité élevée

Utilisez un objet [IBlockPos](/Vanilla/World/IBlockPos/) .  
Renvoie un booléen.

```zenscript
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```