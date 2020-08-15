# ZenClasses

Lo sto mettendo qui in modo che solo coloro che vogliono sapere almeno alcune cose su ZS lo troveranno.

Una ZenClass è essenzialmente una classe java ma è possibile definirla dall'interno di ZS.  
Se pensi che 'Questo non è davvero adatto al tema di un linguaggio di scripting' hai ragione.  
Ecco perché solo coloro che sono in grado di pasticciare con esso dovrebbe mai trovare questo.

## Parole Chiave

Queste sono parole chiave che possono essere trovate nel corpo della classe e inizieranno una certa azione, come l'aggiunta di un membro alla classe.

| Nome           | Descrizione                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Inizia una nuova classe, deve essere seguita dal nome.                                                                                            |
| var/val        | Crea una variabile di istanza, è stata usata l'ultima parola chiave del val.                                                                      |
| statico        | Crea una variabile di classe (statica). Non possono essere finali.                                                                                |
| zenConstructor | Crea un costruttore per la classe.                                                                                                                |
| funzione       | Crea un metodo di istanza. Non c'è modo di creare metodi statici, come si può fare al di fuori della classe.                                      |
| questo         | Riferimento all'oggetto in cui ci troviamo. Utilizzabile solo nei metodi e nei costruttori. Usato se un parametro nasconde un campo, per esempio. |

## Esempio

Un esempio commentato:

```zenscript
<br />//Crea una classe chiamata 'name', puoi anche accedervi usando scripts.scriptPath.name


zenClass name {

    //Ogni variabile necessita di un set di tipi. 
    //Le variabili non devono essere inizializzate, ma se lo fai, l'inizializzazione è come in Java.


    //Statiche sono inizializzate in <clinit>, cioè quando la classe è definita per la prima volta.
    myStatic statico come stringa = "value";
    statico otherStatic come stringa = "value";

    //Se un'istanza varaible ha un inizializzatore, verrà inizializzata dopo prima della prima chiamata del costruttore.
    val nonStatic come stringa = "123";

    //Se una variabile di istanza non ha inizializzatore, è possibile inizializzarla nel costruttore se necessario, anche se definitivo.
    val nonStaticTwo come stringa;


    //A constructor requires all parameters (explicitly typed)
    zenConstructor(parameter as string, parameter2 as string) {
        print("TETETETE");
        print(parametro);


        nonStaticTwo = parametro2;
    }


    //È possibile avere diversi costruttori, ma non c'è modo di costruzione di catenamento.
    zenConstructor(parametro come stringa) {
        print("FFFFFF");
    }


    //Si consiglia di indicare esplicitamente anche i tipi di reso del metodo.
    function myMethod(arg as string, arg1 as string) as string {
        return "value" + arg ~ arg1;
    }

}



//Si chiama un costruttore chiamando il tipo di classe/nome
var test = nome ("NOPE");
test = name("nope", "noper");
print(test. yMethod("one", "two"));

print("");

//È possibile chiamare le statiche utilizzando il tipo di classe/nome
print(name. yStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//Puoi anche chiamare la statica usando un'istanza di classe.
ttt.myStatic = "1";
print(ttt.myStatic);
```