# IItemGetContainerItem

La fonction IItemGetContainerItem peut être ajoutée à un élément [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et s'exécutera chaque fois que l'objet est utilisé comme ingrédient.  
Il est utilisé pour déterminer, ce qui restera dans l'emplacement de fabrication, quand l'objet sera utilisé en tant que tel.  
Pensez aux compartiments, par exemple : chaque compartiment rempli a le compartiment vide en tant qu'élément de conteneur, et quand un seau rempli est fabriqué, vous finirez avec un seau.  
Cette fonction peut être utilisée pour calculer l'élément conteneur, donc vous pouvez être fou avec des trucs comme des NBT-Tags ou plus.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemGetContainerItem;`

## Paramètres

L'IItemGetContainerItem est une fonction avec les paramètres suivants :

- [IItemStack](/Vanilla/Items/IItemStack/) pile → L'élément.

La fonction doit retourner un nouvel objet [IItemStack](/Vanilla/Items/IItemStack/) , ou nul, si l'élément ne doit rien laisser derrière.