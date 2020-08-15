# Liste ICTIME

La ICTItemList est ce qu'un [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) utilise comme premier paramètre.  
Il s'agit d'une liste d'éléments qui seront abandonnés par le [Bloc](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)donné.  
Selon les autres gestionnaires d'événements actifs, il peut déjà contenir certains éléments, ou il peut être vide.

## Importation de la classe

Si vous avez un jour besoin d'importer cette classe, c'est ainsi que vous le faites :

```zenscript
import mods.contenttweaker.ItemList;
```

## Ajout d'éléments à la liste

Vous pouvez ajouter [IItemStacks](/Vanilla/Items/IItemStack/) ou [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) à la liste en utilisant les fonctions ci-dessous :

```zenscript
list.add(<minecraft:carrot>);

liste + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10 );

liste + (<minecraft:seeds> % 10 );
```

## Suppression des éléments de la liste

Vous ne pouvez supprimer que des éléments en utilisant l'index de l'élément, ou vous pouvez effacer toute la liste.

```zenscript
list.remove(1);

list.clear();
```

## Récupération des éléments de la liste

Vous pouvez soit obtenir un élément par son index ou vous pouvez obtenir la liste entière sous la forme d'un tableau ou d'une liste:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Autres informations

Vous pouvez également récupérer ces informations dans la liste :

```zenscript
list.getLength();
```