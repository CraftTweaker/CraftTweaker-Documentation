# Tableaux associatifs

Un tableau associatif (parfois aussi appelé une carte ou un dictionnaire) est comme un [tableau](/AdvancedFunctions/Arrays_and_Loops/) normal de la manière dont il est capable de stocker plusieurs entrées. Contrairement aux [Tableaux](/AdvancedFunctions/Arrays_and_Loops/) cependant, vous pouvez choisir quel type vous voulez l'index, ou (comme nous l'appelons dans les cartes), pour être !

## Déclarer un tableau associatif

Vous déclarez des tableaux associatifs en utilisant des accolades `{}` et deux-points `:`

```zenscript
val myAssocArray = {
    saleté : <minecraft:dirt>,
    or : <minecraft:gold_ingot>
} as IItemStack[string];
```

Allons-nous briser tout cela, n'est-ce pas?

- `val myAssocArray =` type déclaration de variable
- `{` Ceci est un tableau associatif, Sir!
- `saleté : <minecraft:dirt>` nous cartographions `<minecraft:dirt>` sous la chaîne `saleté`
- `,` attendez, il y a plus à venir
- `or : <minecraft:gold_ingot>` nous cartographions `<minecraft:gold_ingot>` sous la corde `or`
- `}` nous avons atteint la fin du tableau, Monsieur!
- `en tant qu'IItemStack[string];` il s'agit d'une table associative qui utilise des chaînes comme indices et IItemStacks comme valeurs.

Ok, donc à quoi dois-je penser lorsque je les utilise ?

- Vous pouvez utiliser à propos de chaque type disponible pour Zenscript comme clé ou valeur.
- Vous ne pouvez pas utiliser de variables pour la déclaration de clé dans la déclaration initiale (celle qui utilise `{}`) car le texte clair est interprété comme une chaîne !

## Se référant à des Éléments dans un Tableau Associatif.

Vous faites référence aux éléments à l'intérieur d'un tableau associatif de la même manière que vous faites référence aux éléments à l'intérieur d'un [tableau](/AdvancedFunctions/Arrays_and_Loops/)normal :  
`Tableau[index]`  
Seule la différence est cette fois-ci vous n'avez pas nécessairement besoin d'utiliser un entier comme index, mais quel que soit le type que vous avez déclaré que votre tableau est !

```zenscript
<br /><br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//You can also use varaibles here, as long as the variable is of the correct type
print(assocArray[dirt]);
```

Il y a un cas spécial, c'est quand vous utilisez des chaînes de caractères comme indeces:  
Dans ce cas, vous pouvez également utiliser le memberGetter comme ceci :

```zenscript
val assocWithStrings = {
    //vous pouvez utiliser "" si vous voulez
    "one" : "1",

    //mais vous n'avez pas à
    deux : "2"
} comme chaîne de caractère[string];

//Vous pouvez soit utiliser le memberGetter
print(assocWithStrings. ne);

//Ou l'index standard Getter
print(assocWithStrings["two"]);
```

## Manipulation des éléments à l'intérieur d'un tableau associatif

Comme dans les tableaux, vous pouvez manipuler des éléments à l'intérieur d'un tableau associatif en utilisant le tableau `[index] = newValue`.  
Il y a cependant une différence majeure :  
Alors que les tableaux ont une taille fixe, les cartes ne le sont pas. Cela signifie que vous pouvez toujours ajouter une entrée en définissant un index qui n'a pas encore été défini !

```zenscript
val changingArray = {
    <minecraft:dirt> : "c'est moi",
    <minecraft:gold_ingot> : "et je le déteste"
} comme chaîne[IItemStack];

Gg val = <minecraft:gold>;

//Outrepasse la valeur de gold_ingot
changingArray[gg] = "et je l'aime";

//ajoute une nouvelle entrée
changingArray[<minecraft:grass>] = "Puissance !";
```

## Récupération d'une clé et des entrées d'un tableau associatif

Le KeySet est une table contenant toutes les clés de la carte.  
Le valueSet est une table contenant toutes les valeurs de la carte.  
L'entrySet est un tableau contenant toutes les entrées de la carte (voir ci-dessous).

```zenscript
myAssocArray.keySet //keySet
myAssocArray.keys //keySet
myAssocArray.values //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Itération sur un tableau associatif

Il y a deux itérateurs qui vous permettent d'itérer sur un tableau associatif :

- Le keyy-Iterator : Itère au-dessus des clés, utilise une variable
- L'itérateur clé-valeur-clé : Itère sur les clés et les valeurs, utilise deux variables

Ajoutons un tableau associatif qui stocke les recettes d'artisanat à itérer:

- Les clés doivent être la sortie de fabrication en tant que [IItemStack](/Vanilla/Items/IItemStack/)
- Les valeurs doivent être les ingrédients de fabrication comme [Ingrédient](/Vanilla/Variable_Types/IIngredient/)
- Nous allons utiliser l'itérateur de clés qui est construit comme ceci : `pour la clé dans assocArray {doSth;}`
- Nous allons également utiliser l'itérateur de valeur clé qui est construit comme ceci `pour la clé, la valeur dans assocArray {doSth;}`

```zenscript
importez crafttweaker.item.IItemStack;
importez crafttweaker.item. Ingrédient ;

saleté val = <minecraft:dirt>;
Recette val MapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[saleté, saleté, saleté],[saleté, saleté, saleté]],
    <minecraft:gold_ingot> : [[saleté, saleté, saleté],[saleté, <minecraft:gold_ingot>, saleté],[saleté, saleté]]
} comme IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[saleté, saleté, saleté],[saleté, null, saleté],[saleté, saleté]];

//key will be hers, goldIngot, dirt
for key in recipeMapShaped {
    recettes. ddShaped(key, recipeMapShaped[key]);
}


//clés seront de l'herbe, du lingot d'or, de la saleté, seront les recettes pour eux
pour la clé, valeur dans la recetteMapShaped {
    recettes. ddShaped(clé, valeur);
}
```

# Entrée Zen Type

Une entrée de carte se compose d'une clé et d'une valeur.  
Actuellement la seule façon d'obtenir un tel objet est via la méthode entrySet d'une carte.

Vous pouvez utiliser les getters pour obtenir la clé `` et la valeur ``

```zenscript
//Remplacer la carte par une référence à un tableau map/associatif existant
val myEntry = map.entrySet[0];


myEntry.key; //Retourne la clé de l'entrée.
monEntry.value; //Retourne la valeur de l'entrée.
```