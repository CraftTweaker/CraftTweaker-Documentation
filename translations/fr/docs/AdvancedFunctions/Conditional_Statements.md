# Instructions conditionnelles

Vous pouvez inclure du code qui ne sera exécuté que si certains critères sont remplis (ou s'ils ne le sont pas). C'est pour cela que vous avez besoin d'instructions conditionnelles.

## Si

Une déclaration d'information est la première partie d'une déclaration conditionnelle. Il déclare la condition qui doit être vraie pour l'exécution du code suivant. **Attention, vous avez besoin de DEUX ÉQUALS lors de la comparaison des valeurs ! (C'est parce qu'un égal est pour déclarer des valeurs!)**

```zenscript
test val = 0;

if (test == 0) { //true
    print("Le test est zéro !");
}
```

## Sinon

Une autre déclaration peut être ajoutée à la fin d'une déclaration conditionnelle pour déclarer ce qui sera exécuté lorsque la condition d'iF est égale à false.

```zenscript
var test = 0;

if (test == 0) { //true
    //sera exécuté lorsque le test est égal à 0
    print("Le test est zéro ! );
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero! );
}

test = 1;
if (test == 0) { //false
    //sera exécuté lorsque le test est égal à 0
    print("Maintenant, le test est nul ! );
} else {
    //will be executed when test is not equal to 0
    print("Now le test n'est PAS nul ! );
}

```

## Choses à vérifier

Les calculs supportés sont `+`+ </code> ,`-`,`*`,`/`,`mod`,`concaténation(~)`

Les opérandes supportées sont `Logical OR(||)`, `Logical AND(&&)`, `Bitwise OR(|)`, `Bitwise ET(&)`, et `Bitwise XOR(^)`

```zenscript
//Vous pouvez vérifier pour:


//Valeurs de nombre
valent a = 0 comme int;
if (a == 0) { print("NumVal"); }

//Valeurs de nombre calculées
val b = 1;
val c = 5;
//Tout évaluer à vrai
if (b+c == 6) { print("Num1! ); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0. ) { print("Num3! ); }

//OR, XOR, AND
val d = "Bonjour";
val e = "Monde";
val f = d~e; //f = "HelloWorld", la Tilde concatène juste une chose à une autre

//||(OR) signifie, aussi longtemps qu'un des critères est rempli, il évalue à vrai
si (d == "Bonjour" || e == "Bonjour") { print("OR1! ); } //true
if (d == "Bonjour" || e == "Monde") { print("OR2! ); } //true

//^(XOR) signifie, SEULEMENT UN critère peut être rempli. sinon il évalue à faux
si (d == "Bonjour" ^ e == "Bonjour") { print("XOR1! ); } //true
if (d == "Hello" ^ e == "World") { print("XOR2! ); } //false

//&&(AND) signifie que les deux critères doivent être satisfaits. sinon il évalue à false
if (d == "Bonjour" && e == "Bonjour") { print("AND1! ); } //false
if (d == "Bonjour" && e == "Monde") { print("AND2! ); } //true
```

## Le ? Opérateur

Bien sûr, il peut être ennuyeux de toujours taper une structure si/autre. Surtout si vous voulez juste faire une ou une condition. C'est pourquoi l'opérateur `?` a été implémenté. Elle suit la même logique qu'une instruction si/autre, elle n'est requise que par beaucoup moins de code. Syntax: `boolean ? si : sinon`

```zenscript
switchy val = false;

//affiche le switchy state
print("Switchy is " ~ switchy);

//if switchy est vrai, vInt = 1, sinon vInt = 2
vInt = switchy ? 1 : 2;
print(vInt);

//Affiche "Bonjour" si switchy est stue, sinon affiche "Au revoir"
print(switchy ? print("Bye") : print("Hello"); "Hello" : "Bye");

//Prints "Bye" if switchy is true, otherwise prints "Hello"
switchy ?

```

## Opérateurs

Vous pouvez utiliser ces opérateurs. Tous les exemples donnés évaluent à vrai.

| Nom                 | jeton        | Explication                                                                                                                                                                              | Example          |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Non                 | `!`          | Inverse un booléen                                                                                                                                                                       | !faux            |
| Pas égal            | `!=`         | Vérifie si la valeur avant et après n'est pas égale                                                                                                                                      | 1 != 2           |
| Égale               | `==`         | Vérifie si la valeur avant et après est égale                                                                                                                                            | 1 == 1           |
| Supérieur à         | `>`       | Vérifie si la valeur antérieure est supérieure à après                                                                                                                                   | 1 > 2            |
| Supérieur ou égal   | `>=`      | Vérifie si la valeur antérieure est supérieure ou égale à après                                                                                                                          | 1 >= 1           |
| Inférieur à         | `<`       | Vérifie si la valeur antérieure est inférieure à après                                                                                                                                   | 1 < 2            |
| Inférieur ou égal   | `<=`      | Vérifie si la valeur antérieure est inférieure ou égale à après                                                                                                                          | 1 <= 1           |
| Logique ET          | `&&` | Vérifie si les valeurs avant et après sont vraies, faux si l'un ou les deux sont faux                                                                                                    | vrai && vrai     |
| Logique OU          | `\|\|`     | Vérifie si la valeur avant ou après est vraie, false si aucun n'est vrai                                                                                                                 | faux \|\| vrai |
| Bitwise XOR         | `^`          | Vérifie si exactement une des valeurs avant ou après est vraie, false si les deux sont vraies ou aucun n'est vrai                                                                        | vrai ^ faux      |
| Sens des bits ET    | `&`      | Effectue une opération ET bitwise sur les valeurs avant et après. Voir [ce](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) pour plus de détails | vrai && vrai     |
| Sens des Bitwise OU | `\|`        | Effectue une opération OU sur les valeurs avant et après. Voir [ce](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) pour plus de détails         | faux \|\| vrai |

### Différence entre `|` et `||` (et `&` et `&&`)

La principale différence entre le simple et le double, avec la sémantique, est que le double effectue une vérification après chaque condition et se termine tôt - c'est ce qu'on appelle court-circuit. Cependant, le simple traverse toute la chaîne de conditions, même si le premier aurait annulé la totalité de la condition. Cela permet non seulement d'enregistrer des ressources, mais aussi de faciliter les scripts tels que les **vérifications nulles** et les conditions enchaînées.

```zenscript
var a = 5;
var item = ... comme IItemStack;

// Même si a est 5, il passe toujours par toutes les conditions énumérées
si (un == 5 | a == 3 | a == 10 | a == -1) {
...
}

// Même si a est 5 et que la condition est impossible (une variable ne peut pas être à la fois 3 et 5), il passe toujours par toutes les conditions énumérées
si (un == 3 & a < & a > & a == 5) {
 
}

// Vérifie si l'élément n'est pas nul avant d'accéder aux variables depuis l'élément
if (!isNull(item) && item.amount == 1) {
...
}

// Vérifie si l'élément n'est pas nul lors de l'accès aux variables à partir d'un élément potentiellement nul, émission d'une erreur si l'élément est null
if (! sNull(item) & item. mount == 1) {
...
}
```

## L'opérateur entrant/a

L'opérateur `in` et le `ont` vérifie si quelque chose est dans quelque chose.  
D'abord vous avez besoin de la liste que vous voulez enregistrer, puis le `dans`/`a` alors la valeur que vous voulez vérifier. `en` et `a` sont le même mot clé pour ZS, mais dans la plupart des cas, les gens utilisent `a` pour vérifier si une collection contient un élément et dans les boucles car cela représente la grammaire anglaise.

### in/has loadedMods

Vous pouvez vérifier, si un mod est chargé en vérifiant s'il est dans la liste des mods chargés

```zenscript
//Tandis que contient des vérifications peuvent être utilisées dans
si (loadedMods dans "mcp") {
    print("Minecraft Coder Pack chargé");
}

//La plupart des gens préfèrent utiliser a
if (loadedMods a "mcp") {
    print("Minecraft Coder Pack chargé");
}
```

### In/has Igredient

Vous pouvez également vérifier si un élément correspond à une définition en comparant deux Igredients.  
Avec celui-ci, vous devez être un peu prudent car vous ne confondez pas les deux entrées :  
Ce n'est vrai que lorsque l'Ingrédient APRÈS l' `dans` peut aussi être trouvé complètement dans celui AVANT les `dans`.  
Dans la plupart des cas, vous utiliserez le `a` mot clé à la place car son intention est plus claire et il fait exactement la même chose.

```zenscript
// Vérifie si le lingot de fer est dans l'oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Les lingots de fer sont dans le oreDict");
}

// Préféré, la même fonction que les
précédents si (<ore:ingotIron> a <minecraft:iron_ingot>) { 
    print("Les lingots de fer sont dans le oreDict droit");
}
```

Ceci n'est vrai que lorsque TOUS les éléments correspondants de l'ingrédient APRÈS le `a` peuvent également être trouvés dans l'ingrédient AVANT `a`: Dire que nous avons un ingrédient qui contient tous les poudres (e. . la redstone et la poussière de pierre lumineuse):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
allDusts vaux = <ore:dustAll>;
allDusts. dd(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, et redstone se compose seulement de redstone.
if (redstone a allDusts) {

}
```