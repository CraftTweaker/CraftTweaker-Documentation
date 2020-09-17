# Transformateurs d'articles

Les transformateurs d'objets transforment vos entrées d'artisanat lors de l'artisanat.  
Cela peut aller de l'endommager jusqu'à renvoyer un objet complètement différent.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.IItemTransformer;`

```zenscript
<br /><br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//objet sera consommé mais vous donnera la pile spécifiée (le slot de fabrication sera vidé!).
transformedItem = élément. iveBack(<minecraft:potato>);

//l'objet sera remplacé par l'objet spécifié, qui ira à la place à l'emplacement de fabrication
transforméObjet = objet. ransformReplace(<minecraft:potato>);

//dommage l'élément par 1
élément transformedItem = item. ransformDamage();

//dommage l'élément par la valeur donnée
transformedItem = item.transformDamage(3);

//item sera consommé, quoi qu'il arrive.
transformedItem = item.noReturn();

//Fait consommer plusieurs éléments.
transformedItem = item.transformConsume(3);
```

## Enregistrement de ses propres transformateurs d'articles

### Transformation

L'ancien itemTransformateur qui pourrait cesser d'exister en 1.13.  
Ceci est une fonction spéciale qui accepte deux paramètres : l'objet [](/Vanilla/Items/IItemStack/) lui-même et le joueur [](/Vanilla/Players/IPlayer/) exécutant l'artisanat.

```zenscript
transformedItem = item.transform(function(item(item, player) {return item;});
```

La fonction doit retourner un [IItemStack](/Vanilla/Items/IItemStack/).  
Cette pile remplacera ensuite ce qui se trouve dans l'emplacement de fabrication. Utilisez `null` pour effacer cet emplacement.

### Nouvelle transformation

Avec le nouveau système de recettes interne, il y avait besoin d'un nouveau ItemTransformer. Celui-ci n'accepte qu'un seul paramètre, qui est l'élément dans l'emplacement.

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

La fonction doit retourner une [IItemStack](/Vanilla/Items/IItemStack/).  
Contrairement à l'autre transformateur, cependant, ce ne sera pas l'itemstach qui remplace celui de l'emplacement d'artisanat, mais celui qui est retourné pour cet emplacement d'artisanat.  
En d'autres termes, si vous retournez `null` ici, un article sera consommé, tout autre objet retourné sera soit placé dans l'emplacement de fabrication, si possible, ou retourné à vous, comme lors du traitement des segments.  
Si vous n'avez pas vraiment besoin de la variable du joueur, c'est le transformateur à utiliser !