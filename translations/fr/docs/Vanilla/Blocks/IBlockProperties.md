# Propriétés de l'IBlock

Les Propriétés de Blocs sont ce qui rend un bloc distinctif des autres blocs. Il sert principalement de superinterface à [IBlockState](/Vanilla/Blocks/IBlockState/), ce qui signifie que toutes ces fonctions sont également disponibles pour tous les objets [IBlockState](/Vanilla/Blocks/IBlockState/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IBlockProperties ;`

| ZenGetter                                 | Type de retour                          | Libellé                                                                                           |
| ----------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| canProvidePower                           | booléen                                 | Renvoie si le bloc référé peut fournir de la Puissance de la Redstone                             |
| mobilityFlag                              | chaîne de caractères                    | Retourne le drapeau de mobilité [](/Vanilla/Blocks/IMobilityFlag/) comme une chaîne de caractères |
| Matériel                                  | [Important](/Vanilla/Blocks/IMaterial/) | Renvoie le [matériau du bloc](/Vanilla/Blocks/IMaterial/)                                         |
| Suffocation des causes                    | booléen                                 | Retourne si le bloc peut vous étouffer.                                                           |
| %s %s %s %s %s %s %s %s %s %s %s %s %s %s | booléen                                 |                                                                                                   |
| format@@0 blockNormalCube                 | booléen                                 |                                                                                                   |
| Bloc complet                              | booléen                                 |                                                                                                   |
| Plein Cube                                | booléen                                 |                                                                                                   |
| Cube normal                               | booléen                                 |                                                                                                   |
| opaqueCube                                | booléen                                 |                                                                                                   |
| translucide                               | booléen                                 |                                                                                                   |
| format@@0 useNeighborBrightness           | booléen                                 |                                                                                                   |

## Méthodes Zen

### est remplaçable

`booléen isReplaceable(IWorld world, IBlockPos pos);`  
Paramètres:

- [IWorld](/Vanilla/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La position du bloc

Retourne un booléen qui sait si le bloc peut être remplacé ou non.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Paramètres:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) monde → Le monde à vérifier
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La position du bloc

Retourne un entier représentant la valeur de lumière courante à l'emplacement donné.

### format@@0 getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, face à face );`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, face face à face );`  
Parameters:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) monde → Le monde à vérifier
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La position du bloc
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### format@@0 getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Paramètres:

- [IWorld](/Vanilla/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La position du bloc

Retourne un entier représentant le type de remplacement d'entrée du comparateur de redstone du bloc.

### Vérifie si une entité peut apparaître sur le bloc

Utilisez une [IEntity](/Vanilla/Entities/IEntity/).  
Renvoie un bool.

```zenscript
blockProperties.canEntitySpawn(IEntity);
```

### Obtenir le BlockState actuel

Utilisez un [IBlockAccess](/Vanilla/World/IBlockAccess/) et un [IBlockPos](/Vanilla/World/IBlockPos/).  
Renvoie un nouvel objet IBlockProperties.

```zenscript
blockProperties.getActualState(monde IBlockAccess, IBlockPos pos);
```

### Récupère la dureté d'un bloc

Utilisez [IWorld](/Vanilla/World/IWorld/) et un [IBlockPos](/Vanilla/World/IBlockPos/).  
Renvoie un float.

```zenscript
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### Obtenir une opacité légère d'un bloc

Utilisez [IWorld](/Vanilla/World/IWorld/) et un [IBlockPos](/Vanilla/World/IBlockPos/).  
Renvoie un int.

```zenscript
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### Obtenir le Harnais relatif d'un joueur

Utilisez un [IPlayer](/Vanilla/Players/IPlayer/), un [IWorld](/Vanilla/World/IWorld/) et un [IBlockPos](/Vanilla/World/IBlockPos/).  
Renvoie un nombre décimal .

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### Vérifier si un côté du bloc est solide

Utilisez un [IBlockAccess](/Vanilla/World/IBlockAccess/), un [IBlockPos](/Vanilla/World/IBlockPos/) et un objet [IFacing](/Vanilla/World/IFacing/) .  
Renvoie un bool.

```zenscript
blockProperties.isSideSolid(monde IBlockAccess, pos IBlockPos, face IFacing);
```