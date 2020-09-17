# Schéma de verrouillage

Un IBlockPattern est une interface qui permet de combiner plusieurs blocs en un seul objet.  
Il est comparable à ce que l' [Ingrédient](/Vanilla/Variable_Types/IIngredient/) est à [IItemstacks](/Vanilla/Items/IItemStack/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IBlockPattern ;`

## Appel d'un objet IBlockPattern

Techniquement, chaque fois que vous appelez un objet [IBlock](/Vanilla/Blocks/IBlock/) , vous appelez un objet IBlockPattern .  
Mais il y a des cas quand vous obtenez explicitement un objet IBlockPattern comme retour.

* OU deux [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter      | Que fait-il                                   | Type de retour                          |
| -------------- | --------------------------------------------- | --------------------------------------- |
| blocs          | Liste tous les blocs possibles pour cet objet | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| nomdeaffichage | Renvoie les noms des blocs d'ajustement       | chaîne de caractères                    |

## OU

Vous pouvez OU deux objets IBlockPattern en utilisant l'opérateur OR `|`

## Correspondance

Vous pouvez vérifier si un IBlockPatternObject en contient un autre en utilisant le mot clé `dans` .  
Par exemple, vous pouvez vérifier si un bloc est dans un IBlockPattern.