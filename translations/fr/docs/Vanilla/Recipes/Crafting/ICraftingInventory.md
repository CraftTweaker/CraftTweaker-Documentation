# Inventaire ICrafting

L'Inventaire ICraftingcontient toutes sortes d'informations sur l'inventaire dans lequel un processus d'artisanat est effectué.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter             | Type de retour                               | Libellé                                                   |
| --------------------- | -------------------------------------------- | --------------------------------------------------------- |
| `Joueur`              | [IPlayer](/Vanilla/Players/IPlayer/)         | le joueur qui possède cet inventaire                      |
| `taille`              | Indice                                       | la taille de l'inventaire                                 |
| `width`               | Indice                                       | la largeur de l'inventaire                                |
| `Hauteur`             | Indice                                       | la hauteur de l'inventaire                                |
| `stackCount`          | Indice                                       | le nombre de piles qui sont effectivement remplies        |
| `Eléments`            | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Les objets qui se trouvent dans le tableau de fabrication |
| `format@@0 itemArray` | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Les objets qui se trouvent dans le tableau de fabrication |

## Méthodes Zen

Les méthodes suivantes sont disponibles:

`inventory.getStack(index)` retourne le [IItemStack](/Vanilla/Items/IItemStack/) à l'index donné ou nul si aucun élément n'est présent. L'index est un int.  
`inventory.setStack(index, item)` définit la pile à l'index donné à l'élément fourni. L'index est un int, item est un IItemStack. Utilisez null si vous voulez effacer la pile à cet index.

La pile en haut à gauche est la position (0, 0), la ligne et la colonne sont des ints.  
`inventaire. etStack(row, column)` retourne la [IItemStack](/Vanilla/Items/IItemStack/) à la position donnée ou null si aucun élément n'est présent.  
`inventory.setStack(rangée, colonne, article)` définit la pile à la position donnée à l'élément fourni. L'élément est une IItemStack. Utilisez null si vous voulez vider la pile à cette position.