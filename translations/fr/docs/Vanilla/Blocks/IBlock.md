# Verrouillage

Un IBlock Object se compose d'un [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), d'une métadonnée et d'une TileData.  
Il fait référence à un bloc dans le jeu.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IBlock ;`

## Appel d'un IBlock Object

Il y a plusieurs façons de renvoyer un IBlock objet :

* Casting d'un [IItemStack](/Vanilla/Items/IItemStack/) en tant qu'IBlock (en utilisant le mot-clé `AS` ou la méthode `asBlock()`)
* Utiliser getBlock(x,y,z) sur un [IWorld](/Vanilla/World/IWorld/).
* Utiliser la fonction getBlock() sur le [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) de ContentTweaker

Attention : Seule la seconde méthode est possible pour `données` ZenGetter de retourner un IData nonnull !

## Zengetters

| Récupération | Que fait-il                              | Type de retour                                         |
| ------------ | ---------------------------------------- | ------------------------------------------------------ |
| Définition   | Renvoie la définition du bloc            | [Définition IBlock](/Vanilla/Blocks/IBlockDefinition/) |
| meta         | Renvoie les métadonnées du bloc          | Indice                                                 |
| données      | Retourne les données de la tuile du bloc | [IData](/Vanilla/Data/IData/)                          |

# Schéma de verrouillage

Les IBlocks étendent [objets IBlockPattern](/Vanilla/Blocks/IBlockPattern/). Cela signifie que toutes les fonctions disponibles pour les objets IBlockPattern peuvent également être utilisées pour les objets IBlock :

* Utilise les `blocs` ZenGetter
* OR'ing
* Correspondance en utilisant le mot-clé `dans`
* Utilisez le `displayName` ZenGetter