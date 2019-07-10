# Eigene Funktionen

Manchmal reichen die Funktionen von CraftTweaker und dessen Addons einfach nicht aus. Deswegen kannst du auch eigene Funktionen schreiben! Du kannst sogar Funktionen in Funktionen verschachteln.

## Standard-Syntax

Normalerweise definiert man eine Funktion in etwa so:

```Java
function NAME ([argumente[as typ]]) [as returnTyp]{
    [Statements]
    [return WERT;]
}
```

Die Dinge in den eckigen Klammern sind optional. Schauen wir uns ein paar bestimmte Funktionen an:

## Statische Funktionen

Statische Funktionen werden bereitgestellt, bevor das Skript gestartet wird und es kann von überall drauf zugegriffen werden.  
Du kannst sogar auch auf Funktionen zugreifen, welche [außerhalb des Skriptes definiert](Cross-Script_Reference) wurden.

### Funktion ohne Rückgabewert

Funktionen ohne Rückgabewert geben, wie der Name es sagt, keinen Wert zurück.

```Java
//ruft die Funktion tens() ohne Parameter auf
tens();

//ruft die Funktion realTens() mit der Zeichenkette "Hello World!" als Parameter auf
realTens("Hello World!");


//erstellt die Funktion tens() ohne Parameter
function tens(){
    //Ruft die Funktion realTens() auf mit "" als Parameter
    realTens("");
}


//erstellt die Funktion realTens() mit einer benötigten Zeichenkette als Parameter
function realTens(a as string){
    //gibt den Parameter 10 mal aus
    for i in 1 to 11{
        print(a);
    }
}
```

### Funktion mit Rückgabewert

Du kannst auch einen Rückgabewert definieren, welcher beim ausführen der Funktion zurückgegeben wird. Wir empfehlen dir dazu mit dem Schlüsselwort `as` den Rückgabetyp zu definieren.

```Java
//ruft die Funktion add mit 1 und 99 als Parameter auf
val result = add(1,99);
print(result);

//du kannst die add-Funktion auch in die print-Funktion setzen
print(add(2,64));

//definiert die Funktion add() mit a und b als Parameter vom Typ Integer und setzt den Typ des Rückgabewerts auf Integer
function add(a as int,b as int) as int{
    //gebe die summe von a und b zurück
    return a+b;
}
```

## Funktionen als Variablen

Du kannst Funktionen auch wie Variablen verwenden. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));