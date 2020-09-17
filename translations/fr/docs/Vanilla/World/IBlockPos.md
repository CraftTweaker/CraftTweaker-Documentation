# Pos IBlock

Un objet IBlockPos représente une position dans le jeu.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IBlockPos ;`

## Méthodes Zen sans paramètres

| Méthode Zen  | ZenGetter/Caster  | Type de retour                             | Libellé                                                   |
| ------------ | ----------------- | ------------------------------------------ | --------------------------------------------------------- |
| getX()       | x                 | Indice                                     | Renvoie la valeur X de la position                        |
| getY()       | y                 | Indice                                     | Renvoie la valeur Y de la position                        |
| getZ()       | Z                 | Indice                                     | Renvoie la valeur Z de la position                        |
| asPosition3f | comme IPosition3f | [Position I3f](/Vanilla/Utils/Position3f/) | Retourne la position sous la forme d'un objet Position3f. |

## Méthodes Zen avec les paramètres

### Obtenir le décalage

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(direction IFacing, int offset);`

Vous pouvez également obtenir directement les objets [IFacing](/Vanilla/World/IFacing/) en utilisant les méthodes statiques fournies.

- [direction](/Vanilla/World/IFacing/) IFacing → La direction
- int offset → combien de blocs dans cette direction?