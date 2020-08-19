# IWorld

L'objet IWorld contient des informations sur une dimension dans le jeu.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.world.IWorld`

## Extension des propriétés IBlock

IBlockState étend [IBlockAccess](/Vanilla/World/IBlockAccess/). Cela signifie que toutes les méthodes disponibles pour les objets [IBlockAccess](/Vanilla/World/IBlockAccess/) sont également disponibles pour les objets IBlockStatet.

## Création d'un objet IWorld

Normalement, vous pouvez dériver cet objet à partir d'entités ou d'autres fonctions. Si vous avez besoin de le créer vous-même, c'est la façon de procéder :  
Notez que cette méthode ne doit être appelée qu'à l'intérieur de fonctions qui sont censées être exécutées dans minecraft, pas pendant le cercle de chargement.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## Méthodes Zen sans paramètres et ZenGetters

| Méthode Zen        | ZenGetter           | Type de retour                                   | Libellé                                                                                                                                                                                                             |
| ------------------ | ------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | distante            | boolean                                          | Vrai si le monde est un client "esclave" ; les changements ne seront pas sauvegardés ou propagés de ce monde. Par exemple, les mondes serveur ont cette valeur à false, les mondes clients ont cette valeur à true. |
| isRaining()        | pluie               | boolean                                          | Renvoie vrai si la pluie est en cours.                                                                                                                                                                              |
| isThundering()     | tonnerre            | boolean                                          | Renvoie vrai si elle est en train de frapper.                                                                                                                                                                       |
| getMoonPhase()     | format@@0 moonPhase | Indice                                           | Retourne la phase de lune actuelle.                                                                                                                                                                                 |
| isDayTime()        | dayTime             | boolean                                          | Vérifie si c'est la journée.                                                                                                                                                                                        |
| getWorldTime()     | Heure               | long                                             | Renvoie l'heure du monde.                                                                                                                                                                                           |
| getDimension()     | cote                | Indice                                           | Renvoie la dimension du monde.                                                                                                                                                                                      |
| isSurfaceWorld()   | surfaceWorld        | boolean                                          | Retourne si vous êtes dans un monde de surface ou non.                                                                                                                                                              |
| getDimensionType() | Type de dimension   | Chaîne de caractères                             | Retourne le nom du type de la dimension.                                                                                                                                                                            |
| getWorldType()     | worldType           | Chaîne de caractères                             | Renvoie le nom du type du monde.                                                                                                                                                                                    |
| getWorldInfo()     | Infos sur le monde  | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Renvoie les informations du monde. Peut être utilisé pour récupérer encore plus d'informations sur le monde.                                                                                                        |
| getProvider()      | Fournisseur         | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Renvoie le fournisseur du monde. Peut être utilisé pour récupérer encore plus d'informations sur le monde.                                                                                                          |

## Méthodes Zen avec les paramètres

### Obtenir le Biome à un poste spécifique

Utilisez soit un [IPosition3f](/Vanilla/Utils/Position3f/) ou un objet [IBlockPos](/Vanilla/World/IBlockPos/) .  
Renvoie un objet [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldObj.getBiome(IPosition3f);
worldObj.getBiome(position IBlockPos);
```

### Obtenir la luminosité à la position spécifique

Utilisez soit trois indices, soit un objet [IBlockPos](/Vanilla/World/IBlockPos/). Renvoie un int.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(position IBlockPos);
```

### Obtenir un bloc à une position spécifique

Utilisez soit trois indices, soit un objet [IBlockPos](/Vanilla/World/IBlockPos/). Use either three ints or an [IBlockPos](/Vanilla/World/IBlockPos/) object.

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(position IBlockPos);
```

### Obtenir ou définir un blockState à une position spécifique

Utilisez un objet [IBlockPos](/Vanilla/World/IBlockPos/) et pour le setter aussi un objet [IBlockState](/Vanilla/Blocks/IBlockState/). Optionnellement, un objet [IData](/Vanilla/Data/IData/) peut être spécifié pour définir des données NBT pour le bloc TileEntity quand il est défini. Getter Renvoie un [IBlockState](/Vanilla/Blocks/IBlockState/), définissant un bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Œuf d'entité

Utilisez un objet [IEntity](/Vanilla/Entities/IEntity/) .  
Renvoie un booléen qui indique si le spawn a réussi.

```zenscript
worldObj.spawnEntity (entité IEntité);
```

### Get a raytrace result

Utilisez deux objets [IVector3d](/Vanilla/World/IVector3d/) et trois booléens pour obtenir un [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Peut être nul**

Le premier vecteur décrit le point de départ, le deuxième vecteur de la direction et de la longueur que nous recherchons.  
Seul le dernier paramètre est vrai par défaut.

```zenscript
worldObj.rayTraceBlocks(IVector3d commence, IVector3d ray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Récupère le bloc choisi

Utilisez un [IBlockPos](/Vanilla/World/IBlockPos/), un [IRayTraceResult](/Vanilla/World/IRayTraceResult/) et un [IPlayer](/Vanilla/Players/IPlayer/).  
Renvoie un [IItemStack](/Vanilla/Items/IItemStack/).  
**Peut être null**

Obtient la IItemStack qui serait obtenue en choisissant le bloc à la position.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, joueur IPlayer) ;
```