# ZenClasses

Ich setze das hier so, dass nur diejenigen, die zumindest einige Dinge auf ZS wissen wollen, es finden werden.

Eine ZenClass ist im Wesentlichen eine Java-Klasse, aber Sie können sie innerhalb von ZS definieren.  
Wenn du denkst 'Das passt nicht wirklich zum Thema einer Skriptsprache', dann hast du Recht.  
Aus diesem Grund sollten nur diejenigen gefunden werden, die mit ihm durcheinander kommen können.

## Stichwörter

Dies sind Schlüsselwörter, die im Körper der Klasse gefunden werden können und sie werden eine bestimmte Aktion auslösen, wie zum Beispiel ein Mitglied zur Klasse hinzuzufügen.

| Name           | Beschreibung                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Startet eine neue Klasse, muss der Name folgen.                                                                                                                 |
| var/val        | Erzeugt eine Instanzvariable, das Endergebnis des Valt-Schlüsselwortes wurde verwendet.                                                                         |
| statisch       | Erstellt eine Klasse (static) Variable. Sie können nicht endgültig sein.                                                                                        |
| zenConstructor | Erstellt einen Konstruktor für die Klasse.                                                                                                                      |
| funktion       | Erstellt eine Instanzmethode. Es gibt keine Möglichkeit, statische Methoden zu erstellen, wie Sie das auch außerhalb der Klasse tun können.                     |
| dieses         | Bezugnahme auf das Objekt, in dem wir uns gerade befinden. Nur in Methoden und Konstruktoren verwendbar. Wird verwendet, wenn ein Parameter ein Feld versteckt. |

## Beispiel

Ein kommentiertes Beispiel:

```zenscript
<br /><br />//Creates a class named 'name', you can also access it using scripts.scriptPath.name


zenClass name {

    //Each variable needs a type set. 
    //Variablen müssen nicht initialisiert werden, aber wenn Sie dies tun, ist die Initialisierung wie in Java.


    //Statics werden in <clinit>initialisiert, d.h. wenn die Klasse zuerst definiert wurde.
    static myStatic as string = "value";
    statisch otherStatic als string = "value";

    //Wenn eine Instanz varaible einen Initialisierer hat, wird sie vor dem ersten Konstruktor initialisiert.
    val nonstatic als string = "123";

    //Falls eine Instanzvariable keinen Initialisierer hat, können Sie sie gegebenenfalls im Konstruktor initialisieren, auch wenn sie endgültig ist.
    val nonStaticTwo als String;


    //Ein Konstruktor benötigt alle Parameter (explizit eingegeben)
    zenConstructor(Parameter als String, parameter2 als string) {
        print("TETETETE");
        print(parameter);


        nonStaticTwo = parameter2;
    }


    //Sie können mehrere Konstruktoren haben, aber es gibt keine Möglichkeit zur Verkettung von Konstruktoren.
    zenConstructor(parameter as string) {
        print("FFFFFF");
    }


    //Es wird empfohlen, explizit auch die Rückgabetypen der Methode anzugeben.
    Funktion myMethod(arg as string, arg1 as string) als string {
        return "value" + arg ~ arg1;
    }

}



//Sie rufen einen Konstruktor auf, indem Sie den Klassentyp/Namen
var test = name("NOPE");
test = name("nope", "noper");
print(test. yMethod("one", "two"));

print("");

//Sie können mit dem Klassentyp/Name
print(name statics aufrufen. yStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//Sie können auch Statics mit Hilfe einer Klasseninstanz aufrufen.
ttt.myStatic = "1";
print(ttt.myStatic);
```