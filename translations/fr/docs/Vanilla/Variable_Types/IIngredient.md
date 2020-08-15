# Ingrédient

Un ingrédient est un ingrédient pour les recettes.  
Ceci pourrait être [un élément](/Vanilla/Items/IItemStack/), [une entrée de dictionnaire de minerai](/Vanilla/OreDict/IOreDictEntry/), [un liquide](/Vanilla/Liquids/ILiquidStack/) et bien plus.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.IIngrédient ;`

## Importation du paquet Igredient

Habituellement, vous n'aurez pas besoin de cela, mais dans certains cas, les recettes ne fonctionneront pas tant que vous n'aurez pas [importé](/AdvancedFunctions/Import/) le paquet IIngredient.  
Vous pouvez le faire en utilisant l'import suivant :

```zenscript
Importer crafttweaker.item.IIngredient;
```

## Fonctions

Alors, que pouvons-nous faire de cela?

### Chaîne de commande

La chaîne de commande est comment vous appelleriez cet élément en ZS.  
Cela peut être un gestionnaire de parenthèses ou quelque chose de similaire.

```zenscript
val item = <minecraft:iron_ingot>;

//affiche "<minecraft:iron_ingot>"
print(item.commandString);
```

### Marquer

Vous pouvez marquer un ingrédient pour que vous puissiez l'utiliser plus tard dans [les fonctions de fabrication](/Vanilla/Recipes/Crafting/Recipe_Functions/). Vous pouvez également récupérer la marque appliquée plus tôt.

```zenscript
//Marque le pick avec le String Picky
//item.marked(nom) <-- Le nom est une chaîne !
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//affiche "Picky"
print(markedPick.mark);
```

### Montant

Si vous voulez utiliser plus d'un article donné, vous pouvez définir un montant à un ingrédient.  
Ceci est aussi facile que de multiplier l'ingrédient avec un Integer.  
Récupérer le montant est également possible.

```zenscript
val multipleApples = <minecraft:apple> * 3;

//affiche 3
print(multipleApples.amount);
```

### OU-ing un Igredient

Parfois, vous voulez soit Igredient X ou Y, mais vous ne voulez pas créer une recette pour chaque possibilité? C'est pourquoi il y a la méthode OR pour les ingrédients :

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val soit = item1 | item2;
val soit2 = item1.or(item2);
```

### Obtenir des objets possibles ou des liquides

Parfois, un ingrédient représente plus d'un élément, par exemple si vous utilisez un [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) ou si vous avez OR-ed deux Ingrédients.  
Vous pouvez obtenir tous les éléments possibles pour cet IIngrédient en tant que List<[IItemStack](/Vanilla/Items/IItemStack/)> Liste en utilisant la première fonction.  
La seconde fonction fait la même chose que la première fonction, mais retourne un [IItemStack](/Vanilla/Items/IItemStack/)[] au lieu d'une liste. Il en va de même pour les liquides dans la troisième fonction, seulement ils retournent une liste [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

```zenscript
//Renvoie une IItemStack List
//objets possibles : Tous les lingots de fer et le lingot d'or de MC
objetsIngrédient val = <ore:ingotIron> | <minecraft:gold_ingot>;


//Renvoie une liste ILiquidStack |
//liquides possibles : Lava et Eau
vale liquidsIngredient = <liquid:lava> | <liquid:water>;


pour l'article dans itemsIngrédient. tems{
    //Affiche le nom d'affichage de chaque élément possible
    print(item. isplayName);
}

pour l'élément dans itemsIngredient.itemArray{
    //Affiche le nom d'affichage de chaque élément possible
    print(item. isplayName);
}

pour le liquide dans liquidsIngredient. iquids{
    //Affiche le nom d'affichage de chaque liquide possible
    print(liquide. isplayName);
}

pour le liquide dans <minecraft:water_bucket>.liquides {
    //Imprime le liquide contenu, c'est-à-dire l'eau.
    //Peut ne pas fonctionner pour chaque élément, cependant.
    print(liquid.displayName);
}
```

### Transformez un ingrédient lors de la fabrication

Parfois, vous voulez qu'un objet ne soit pas consommé lors de l'artisanat, mais qu'il reçoive des dégâts ou renvoie un objet complètement différent.  
C'est à quoi servent les transformateurs d'élément.

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

### Conditions de l'ingrédient

Parfois, vous voulez que votre ingrédient ait une étiquette spécifique ou ne fonctionne que si (non) endommagés. Ces conditions peuvent être ajoutées à vos ingrédients en utilisant les éléments suivants :

```zenscript
Article val = <minecraft:apple>;

//Article ne sera accepté qu'avec au moins 1 point de dégât
var conditionedItem = item. nlyDamaged();

//L'objet ne sera accepté qu'avec au moins les points de dégâts spécifiés
conditionedItem = objet. nlyDamageAtLeast(10);

//L'objet ne sera accepté qu'avec au maximum les points de dégâts spécifiés
condiedItem = objet. nlyDamageAtMost(100);

//L'objet ne sera accepté qu'avec des points de dégâts supérieurs ou égaux au premier et au second entier ou égaux.
conditionedItem = item.onlyDamageBetween(10,100);

//L'élément ne sera accepté qu'avec le tag spécifié. L'élément peut avoir plus de balises / autres que celles spécifiées, elles sont ignorées lorsque cochées.
//Si vous voulez que JEI affiche la balise dans l'écran de recette, vous devrez ajouter une balise en utilisant "withTag(tag)"
conditionedItem = item. nlyWithTag({display: {Name: "Tomato"}});

//L'objet ne sera accepté qu'avec le tag spécifié. L'élément peut avoir plus de balises / autres que celles spécifiées, elles sont ignorées lorsque cochées.
//Note : Cela peut ne pas fonctionner avec tous les ingrédients, mais cela fonctionnera pour les éléments. Pro côté à utiliser est que JEI affichera les tags dans la recette!
conditionedItem = item.withTag({display: {Name: "Tomato"}});

//L'objet ne sera accepté que si dans une pile d'au moins le montant spécifié. Principalement utilisé en combinaison avec le transformateur de consommation.
//Notez que si vous ajoutez seulement ceci, il ne consommera toujours qu'un seul objet par métier.
conditionedItem = item.onlyStack(32);
```

### Correspondance

Si vous voulez vérifier si un IItemStack correspond à votre IIngredient, vous pouvez utiliser la méthode de correspondance. Cela retournera un booléen. Si l'ingrédient représente un liquide, il vérifiera si l'article est un contenant valide pour ce liquide.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

Vous pouvez également faire correspondre deux objets Igredient, auquel cas vous devrez utiliser le ```dans``` opérateur:

```zenscript
lingots val = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
or val = <ore:ingotIron>;
ingotGold = <minecraft:gold_ingot>;

//vrai comme l'ingrédient des lingots a <minecraft:gold_ingot>
lingots a ingotGold ;

//false car <minecraft:iron_ingot> ne peut pas être trouvé dans <ore:ingotGold>
oreIngot a des lingots;
```