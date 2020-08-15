# Fonctions personnalisées

Parfois, les fonctions fournies par CT et les addons ne le feront pas. Voici comment écrire vos propres fonctions ! Vous pouvez même imbriquer les fonctions dans les fonctions

## Syntaxe de base

Généralement, vous déclarez une utilisation statique :

```zenscript
function NOM ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

Les choses entre parenthèses sont optionnelles, selon ce que vous voulez obtenir. Examinons de plus près les fonctions spécifiques.

## Fonctions statiques

Les fonctions statiques sont créées avant que le script ne soit exécuté et peuvent être accédées depuis n'importe où dans le script.  
Vous pouvez même accéder aux fonctions déclarées en dehors du script en utilisant la [référence cross-script](/AdvancedFunctions/Cross-Script_Reference).

### Fonctions du vide

Les fonctions du vide sont des fonctions qui ne retourneront aucune valeur.

```zenscript
//appelle la fonction tens() sans arguments
tens();

//appelle la fonction realTens() avec la chaîne "Hello World!" comme argument
realTens("Bonjour le monde ! );


//crate la fonction tens() sans arguments nécessaires
fonction tens(){
    //Applique la fonction realTens() avec "" comme argument
    realTens("");
}


//crée la fonction realTens() avec une chaîne requise comme argument
fonction realTens(a as string){
    //affiche l'argument 10 fois
    pour i dans 1 à 11{
        print(a);
    }
}
```

### Fonction de retour

Vous pouvez également spécifier une valeur qui doit être retournée par une fonction. Il est recommandé d'utiliser le mot clé `comme` pour définir le type de retour.

```zenscript
//calls add function with 1 and 99 as parameters
val result = add(1,99);
print(result);

//vous pouvez placer la fonction add à l'intérieur de la fonction print aussi
print(add(2,64));

//définit la fonction add() avec a et b comme paramètres (les deux sont définis comme des entiers ! et définit le type de retour à Integer
fonction add(a comme int, comme int) comme int{
    //retourne la somme de a et b
    retourne a+b;
}
```

## Fonctions en tant que variables

Vous pouvez également utiliser des fonctions comme des variables. Dans ce cas, ils seront créés en tant que classes séparées. En dehors de cela, ils fonctionnent à peu près la même chose que les fonctions statiques, vous les appelez par leur nom de variable.  
Vous pouvez même les utiliser comme [variables globales](/AdvancedFunctions/Global_Static_Variables/) de cette façon.

Si vous avez besoin de lancer la méthode (comme vous le faites pour les globals), vous pouvez utiliser ceci :

    ajout global en tant que function(int, int)int = function (a as int, b as int) comme int {
        return a + b;
    };
    
    print(addition(1,2));