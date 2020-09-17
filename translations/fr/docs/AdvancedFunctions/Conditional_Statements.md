# Instructions conditionnelles

Vous pouvez inclure du code qui ne sera exécuté que si certains critères sont remplis (ou s'ils ne le sont pas). C'est pour cela que vous avez besoin d'instructions conditionnelles.

## Si

Une déclaration d'information est la première partie d'une déclaration conditionnelle. Il déclare la condition qui doit être vraie pour l'exécution du code suivant. Attention, vous avez besoin de DEUX ÉQUALS lorsque vous comparez des valeurs (c'est parce qu'une valeur égale est pour déclarer des valeurs !)

```zenscript
test val = 0;

if(test == 0){ //true
    print("Le test est zéro !");
}
```

## Sinon

Une autre déclaration peut être ajoutée à la fin d'une déclaration conditionnelle pour déclarer ce qui sera exécuté lorsque la condition d'iF est égale à false.

```zenscript
var test = 0;

if(test == 0){//true
    //sera exécuté lorsque le test est égal à 0
    print("Le test est zéro ! );
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero! );
}

test = 1
if(test == 0){//false
    //sera exécuté lorsque le test est égal à 0
    print("Maintenant, le test est nul ! );
} else {
    //will be executed when test is not equal to 0
    print("Now le test n'est PAS nul ! );
}

```

## Choses à vérifier

Les calculs supportés sont `+`+ </code> ,`-`,`*`,`/`,`mod`,`concaténation(~)`

Les opérandes supportées sont `OR(|)`, `ET(&)`, `XOR(^)`

```zenscript
//Vous pouvez vérifier pour:


//Valeurs de nombre
valent a = 0 comme int;
if(a==0){print("NumVal");

//Valeurs de nombre calculées
val b = 1;
val c = 5;
//Tous évaluent à true
if(b+c==6){print("Num1! );}
if(b*c==5){print("Num2!");}
if(b/c==0. ){print("Num3 ! );}

//OR, XOR, AND
val d = "Bonjour";
val e = "Monde";
val f = d~e; //f = "HelloWorld", la Tilde concatène juste une chose à une autre

//|(OR) signifie, tant qu'un des critères est satisfait, il évalue à vrai
if(d=="Bonjour" | e == "Bonjour"){print("OR1! );} //true
if(d=="Bonjour" | e == "Monde"){print("OR2! );} //true

//^(XOR) signifie, SEULEMENT UN critère peut être rempli. sinon il évalue à faux
if(d=="Bonjour" ^ e == "Bonjour"){print("XOR1! );} //true
if(d=="Bonjour" ^ e == "Monde"){print("XOR2! );} //false

//&(AND) signifie que les deux critères doivent être remplis. sinon il évalue à faux
if(d=="Bonjour" & e == "Bonjour"){print("AND1! );} //false
if(d=="Bonjour" & e == "Monde"){print("AND2!");} //true
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

| Nom               | jeton        | Explication                                                                                   | Exemple       |
| ----------------- | ------------ | --------------------------------------------------------------------------------------------- | ------------- |
| Non               | `!`          | Inverse un booléen                                                                            | !faux         |
| Pas égal          | `!=`         | Vérifie si la valeur avant et après n'est pas égale                                           | 1 != 2        |
| Égale             | `==`         | Vérifie si la valeur avant et après est égale                                                 | 1 == 1        |
| Supérieur à       | `>`       | Vérifie si la valeur antérieure est supérieure à après                                        | 1 > 2         |
| Supérieur ou égal | `>=`      | Vérifie si la valeur antérieure est supérieure ou égale à après                               | 1 >= 1        |
| Plus petit que    | `<`       | Vérifie si la valeur antérieure est inférieure à après                                        | 1 < 2         |
| Inférieur ou égal | `<=`      | Vérifie si la valeur antérieure est inférieure ou égale à après                               | 1 <= 1        |
| ET                | `&`      | Vérifie si les deux, la valeur avant et après sont vraies, faux si l'un ou les deux sont faux | vrai & vrai   |
| OU                | `&#124;` | Vérifie si la valeur avant ou après est vraie. Vrai, est vrai les deux sont vraies            | vrai \| vrai |
| XOR               | `^`          | Vérifie si la valeur avant ou après est vraie, faux si les deux ou aucun n'est vrai           | vrai ^ faux   |

## L'opérateur entrant/a

L'opérateur `in` et le `ont` vérifie si quelque chose est dans quelque chose.  
D'abord vous avez besoin de la liste que vous voulez enregistrer, puis le `dans`/`a` alors la valeur que vous voulez vérifier. `en` et `a` sont le même mot clé pour ZS, mais dans la plupart des cas, les gens utilisent `a` pour vérifier si une collection contient un élément et dans les boucles car cela représente la grammaire anglaise.

### in/has loadedMods

Vous pouvez vérifier, si un mod est chargé en vérifiant s'il est dans la liste des mods chargés

```zenscript
//Tandis que les vérifications peuvent être utilisées dans
if(loadedMods dans "mcp"){
    print("Minecraft Coder Pack chargé");
}

//La plupart des gens préfèrent utiliser
if(loadedMods a "mcp"){
    print("Minecraft Coder Pack chargé");
}
```

### In/has Igredient

Vous pouvez également vérifier si un élément correspond à une définition en comparant deux Igredients.  
Avec celui-ci, vous devez être un peu prudent car vous ne confondez pas les deux entrées :  
Ce n'est vrai que lorsque l'Ingredeint APRÈS l' `dans` peut aussi être trouvé complètement dans celui AVANT les `dans`.  
Dans la plupart des cas, vous utiliserez le `a` mot clé à la place car son intention est plus claire et il fait exactement la même chose.

```zenscript
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Les lingots de fer sont dans le oreDic");
}

if(<ore:ingotIron> a <minecraft:iron_ingot>){
    print("Les lingots de fer sont dans le oreDic");
}
```

This is only then true, when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts. dd(redstone, glowstone);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, et redstone se compose seulement de redstone.
if(redstone a allDusts) {

}
```