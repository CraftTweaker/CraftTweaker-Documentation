# ZenClasses

Je le mets ici donc seuls ceux qui veulent savoir au moins quelques choses sur ZS le trouveront.

Une ZenClass est essentiellement une classe java mais vous pouvez la définir à partir de ZS.  
Si vous pensez que 'Cela ne correspond pas vraiment au thème d'un langage de script', vous avez raison.  
C'est pourquoi seuls ceux qui sont capables de le gâcher devraient le trouver.

## Mots clés

Ce sont des mots-clés qui peuvent être trouvés dans le corps de la classe et ils vont lancer une certaine action, comme l'ajout d'un membre à la classe.

| Nom            | Libellé                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Démarre une nouvelle classe, doit être suivi par le nom.                                                                                                                |
| var/val        | Crée une variable d'instance, la dernière du mot-clé val a été utilisée.                                                                                                |
| statique       | Crée une variable de classe (statique). Ils ne peuvent pas être définitifs.                                                                                             |
| zenConstructor | Crée un constructeur pour la classe.                                                                                                                                    |
| fonction       | Crée une méthode d'instance. Il n'y a aucun moyen de créer des méthodes statiques, comme vous pouvez le faire en dehors de la classe.                                   |
| ce             | Référence à l'objet dans lequel nous nous trouvons. Utilisable uniquement dans les méthodes et les constructeurs. Utilisé si un paramètre masque un champ, par exemple. |

## Exemple

Un exemple commenté :

```zenscript
<br /><br />//Creates a class named 'name', you can also access it using scripts.scriptPath.name


zenClass name {

    //Each variable needs a type set. 
    //Les variables n'ont pas besoin d'être initialisées, mais si vous le faites, l'initialisation est comme en Java.


    //Les statistiques sont initialisées dans <clinit>, c'est-à-dire lorsque la classe est définie pour la première fois.
    static myStatic as string = "value";
    static otherStatic as string = "value";

    //Si une instance varaible a un initialisateur, elle sera initialisée après le premier appel du constructeur.
    val nonStatic as string = "123";

    //Si une variable d'instance n'a pas d'initialiseur, vous pouvez l'initialiser dans le constructeur si nécessaire, même si elle est définitive.
    val nonStaticTwo en tant que chaîne ;


    //Un constructeur nécessite tous les paramètres (explicitement typé)
    zenConstructor(paramètre en tant que chaîne, parameter2 comme chaîne) {
        print("TETETE");
        print(paramètre) ;


        nonStaticTwo = paramètre2;
    }


    //Vous pouvez avoir plusieurs constructeurs, mais il n'y a aucun moyen de chaîner des constructeurs.
    zenConstructor(paramètre comme chaîne) {
        print("FFFFFF");
    }


    //Il est recommandé d'indiquer explicitement les types de retour de la méthode.
    function myMethod(arg as string, arg1 as string) as string {
        return "value" + arg ~ arg1;
    }

}



//Vous appelez un constructeur en appelant le type/nom de classe
var test = name("NOPE");
test = name("nope", "noper");
print(test. yMethod("une", "deux"));

print("");

//Vous pouvez appeler statiques à l'aide de la classe type/nom
print(name. yStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//Vous pouvez également appeler des statiques à l'aide d'une instance de classe.
ttt.myStatic = "1";
print(ttt.myStatic);
```