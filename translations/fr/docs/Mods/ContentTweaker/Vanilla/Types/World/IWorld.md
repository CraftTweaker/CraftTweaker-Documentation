# IWorld

Un objet IWorld représente le monde dans lequel le joueur se trouve.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.World ;`

## Méthodes Zen sans paramètres et ZenGetters

| Méthode Zen        | ZenGetter           | Type de retour                                                 | Libellé                                                                                                                                                                                                             |
| ------------------ | ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | distante            | boolean                                                        | Vrai si le monde est un client "esclave" ; les changements ne seront pas sauvegardés ou propagés de ce monde. Par exemple, les mondes serveur ont cette valeur à false, les mondes clients ont cette valeur à true. |
| isRaining()        | pluie               | boolean                                                        | Renvoie vrai s'il pleut actuellement                                                                                                                                                                                |
| isThundering()     | tonnerre            | boolean                                                        | Renvoie vrai si elle est en cours de tonnerre                                                                                                                                                                       |
| getMoonPhase()     | format@@0 moonPhase | Indice                                                         | Renvoie la phase de lune actuelle                                                                                                                                                                                   |
| isDayTime()        | dayTime             | boolean                                                        | Vérifie si c'est le jour                                                                                                                                                                                            |
| getWorldTime()     | Heure               | long                                                           | Renvoie l'heure du monde                                                                                                                                                                                            |
| getDimension()     | cote                | Indice                                                         | Renvoie la dimension du monde                                                                                                                                                                                       |
| isSurfaceWorld()   | surfaceWorld        | boolean                                                        | Retourne si vous êtes dans un monde de surface ou non                                                                                                                                                               |
| getDimensionType() | Type de dimension   | Chaîne de caractères                                           | Renvoie le nom du type de la dimension                                                                                                                                                                              |
| getRandom()        | Aléatoire           | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Renvoie le générateur de nombres aléatoires du monde                                                                                                                                                                |

## Méthodes Zen avec les paramètres

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos) ;