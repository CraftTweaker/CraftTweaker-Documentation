# ICTBlockState

Un objet ICTBlockState représente l'état actuel d'un bloc.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.BlockState ;`

## Appel d'un TICBlockState

Vous pouvez obtenir un ICTBlockState en tant que paramètre dans une fonction [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) ou à partir du [Block Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## Méthodes Zen et ZenGetters

| Méthode Zen       | ZenGetter | Type de retour                                                         | Libellé                                                               |
| ----------------- | --------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| getBlock()        | Bloquer   | [Verrouillage](/Vanilla/Blocks/IBlock/)                                | Renvoie le bloc référencé                                             |
| getMeta()         | meta      | Indice                                                                 | Renvoie les métadonnées du bloc référencé                             |
| canProvidePower() |           | boolean                                                                | Renvoie si le bloc référé peut fournir de la Puissance de la Redstone |
| getMobilityFlag() |           | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Renvoie le drapeau de la réaction push                                |

## Méthodes Zen

### est remplaçable

`booléen isReplaceable(IWorld world, IBlockPos pos);`  
Paramètres:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La position du bloc

Retourne un booléen qui sait si le bloc peut être remplacé ou non.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Paramètres:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La position du bloc

Retourne un entier représentant la valeur de lumière courante à l'emplacement donné.

### format@@0 getFaiakPower

`int getWeakPower(IWorld world, IBlockPos blockPos, face à face );`  
Paramètres:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La position du bloc
- [Face](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) face face → Le côté à vérifier

Renvoie une int représentant la puissance de redstone actuelle de ce côté.

### format@@0 getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Paramètres:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La position du bloc

Retourne un entier représentant le type de remplacement d'entrée du comparateur de redstone du bloc.

### Comparaison de deux objets ICTBlockState

Vous pouvez soit utiliser `int compare(ICTBlockState autre);` ou les jetons ZenCompare `==` `!=`.  
Les différents types de retour sont cependant :

- `state.compare(autre)` renvoie une int qui est 0 si elles sont égales
- `état == autre` renvoie un booléen qui est vrai d'entre eux sont égaux