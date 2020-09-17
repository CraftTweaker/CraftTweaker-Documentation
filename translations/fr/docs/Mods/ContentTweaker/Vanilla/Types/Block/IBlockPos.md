# Pos IBlock

Un objet IBlockPos représente une position dans le jeu.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.BlockPos ;`

## Méthodes Zen sans paramètres

| Méthode Zen | ZenGetter | Type de retour | Libellé                            |
| ----------- | --------- | -------------- | ---------------------------------- |
| getX()      | x         | Indice         | Renvoie la valeur X de la position |
| getY()      | y         | Indice         | Renvoie la valeur Y de la position |
| getZ()      | Z         | Indice         | Renvoie la valeur Z de la position |

## Méthodes Zen avec les paramètres

### Obtenir le décalage

Renvoie un nouvel IBlockPos qui est `offset` blocs dans le `directionName` ou `orienté` direction.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` peut prendre ces valeurs :

- "bas"
- "Monter"
- "nord"
- "sud"
- "Orient"
- "Ouest"

`IBlockPos getOffset(Facing facing, int offset)` Parameters:

- [Face](/Vanilla/World/IFacing/) face face → La direction
- int offset → combien de blocs dans cette direction?