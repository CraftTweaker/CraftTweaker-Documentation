# Tableaux

Un tableau est une liste contenant plusieurs éléments du même type.

## Déclarer des tableaux

Il est déclaré en utilisant ```[``` et ```]```.

**Imortant**: vous *devez* initialiser des tables à quelque chose, même si c'est une table vide.

`var floatArray comme float [];` ne donnera pas d'erreurs de syntaxe, mais une fois votre jeu rechargé, vous obtiendrez une erreur et votre script ne fonctionnera pas.

Au lieu de cela, initialiser des tableaux vides comme ceci `var floatArray comme float [] = [];`

```zenscript
//Tableau contenant "Hello" et "World"
chaîne val stringArray = ["Hello", "World"] comme chaîne[];

//Tableau contenant 1-3
val intArray = [1,2,3] comme int[];
```

Si vous pensez maintenant "attendez, n'ai-je pas vu ces accolades avant?", vous avez. Mémoriser ```recettes.add(out,[[],[],[]]);```? Il utilise trois tableaux contenant chacun jusqu'à trois entrées pour définir une recette de table d'artisanat.

## Tableaux de lancement

Vous avez sûrement remarqué que tous les tableaux ici ont l'instruction `comme` ajoutée.  
Pourquoi demandez-vous ? Ceci est dû au fait que ZenScript ne peut parfois pas prédire quel type sont les éléments du tableau. Cela peut être la cause d'étranges logs d'erreurs de conversion !  
Mieux vaut être sûr que de regretter et de lancer les tableaux à leurs bons types !  
Aussi, si vous convertissez en types non-primitifs (tout sauf les chaînes, ints et la même) assurez-vous de [importer](/AdvancedFunctions/Import/) le paquet correspondant et assurez-vous de le faire au TOP du script :

```zenscript
importer crafttweaker.item.IItemStack;
IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] en tant qu'IItemStack[];
```

## Tableaux imbriqués

Vous pouvez placer des tableaux dans des tableaux.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] comme chaîne[][];
```

## Reffing aux objets dans un tableau

Vous pouvez vous référer à un élément dans un tableau en utilisant sa place dans la liste. Le premier élément d'un tableau est le No. 0, le 2ème No.1 et ainsi de suite.

Si vous voulez faire référence à un élément dans un tableau imbriqué, vous avez besoin de deux ou plusieurs référents, car chacun supprime une couche des listes.

```zenscript
/*
stringArray[0] est "Hello"
stringArray[1] est "World"
stringArray[2] est "I"
stringArray[3] est "am"
*/
val stringArray = ["Hello", Monde","I","am"] en tant que chaîne[];

//affiche "Bonjour"
print(stringArray[0]);


//Arrays imbriqués
stringArray1 val = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] comme chaîne[][];

/*
stringArrayAll[0] est ["Hello","World"]
stringArrayAll[1] is ["I", am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","! ]

stringArrayAll[0][0] est "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//affiche "World"
print(stringArrayAll[0][1]);
```

# Boucles

Une boucle est une fonction qui se répète. Vous pouvez utiliser des boucles pour appliquer une action à tous les éléments d'un tableau

## Boucle for

L'utilisation principale de la boucle pour est d'itérer à travers un tableau. Iteriser signifie faire une action à tous les éléments d'un tableau.  
Vous pouvez utiliser le mot-clé `break` pour casser la boucle prématurément.

```zenscript
Importer crafttweaker.item. ItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
JArray val = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] comme IItemStack[] ;
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
    //defines the variable "item" with each element of IArray (i. . <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Utilisez cette variable maintenant !
    //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
    print(i);
}

for i in 10 ..

    recipes.remove(item);
}

for i, item in IArray {
    //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use these variables now! 20 {
    //définit la variable "i" avec chaque nombre de 10 à 19 (i.e. 10,11,12,. .,18,19)
    print(i);
}

pour l'élément dans loadedMods["minecraft"]. tems {
    //définit la variable "item" avec chaque élément ajouté par le mod avec le modID "minecraft" et supprime ses recettes de fabrication
    . emove(objet);
}
```

## Boucle Tant que

La boucle while exécute le code donné tant que la condition donnée évalue à `true`.  
Alternativement, vous pouvez l'arrêter en utilisant le mot clé `break`.

```zenscript
var i = 0; 

//Will print 0 - 9, car dans l'itération après cela, i < 10 est faux puisque je suis 10 alors.
alors que i < 10 {
    print(i); 
    i += 1;
} 

print("Après la boucle : " + i);


//Sera imprimer 10 - 6, parce que dans l'itération après que i == 5 et il se cassera.
while (i > 0) {
    if i == 5
        break;
    impression(i) ;
    i -= 1;
}

print("Après la boucle 2: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Ajout d'éléments à un tableau

Bien qu'il ne soit pas recommandé de le faire, il est possible d'ajouter des objets à des tableaux.  
Vous ne pouvez ajouter que des objets simples à une table, vous ne pouvez pas ajouter deux tableaux.  
Vous utilisez l'opérateur `+` pour la table addition:

```zenscript
Importer crafttweaker.item. ItemStack;

val fer = <minecraft:iron_ingot>;
var tableau comme IItemStack[] = [fer, fer, fer, fer, fer ];

tableau += fer ;
pour l'élément dans le tableau {
    print(item. isplayName);
}
```