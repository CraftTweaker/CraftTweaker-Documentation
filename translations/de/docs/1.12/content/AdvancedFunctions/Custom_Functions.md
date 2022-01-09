# Eigene Funktionen

Manchmal reichen die Funktionen von CraftTweaker und dessen Addons einfach nicht aus. Deswegen kannst du auch eigene Funktionen schreiben! Du kannst sogar Funktionen in Funktionen verschachteln.

## Standard-Syntax
Normalerweise definiert man eine Funktion in etwa so:

```zenscript
function NAME ([argumente[as typ]]) [as returnTyp]{
    [Statements]
    [return WERT;]
}
```

Die Dinge in den eckigen Klammern sind optional. Schauen wir uns ein paar bestimmte Funktionen an:


## Statische Funktionen
Static functions are created before the script is run and can be accessed from anywhere in the script.  
You can even access functions declared outside the script using the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference).


### Funktion ohne Rückgabewert

Funktionen ohne Rückgabewert geben, wie der Name es sagt, keinen Wert zurück.

```zenscript
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

```zenscript
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

## Default arguments

You can also set some parameters default value. These parameters can be ignored and use default value when you call the function.

```zenscript
function name(a as int, b as int = 2, c as int = 3) as void {
    print(a + b + c);
}

name(1); // print 6 [1 + 2 (default) + 3 (default)] 
name(1, 3); // print 7 [1 + 3 + 3 (default)] 
name(1, 1, 4); // print 6 [1 + 1 + 4] 
```

* You can use bracket handlers and functions for default arguments. But variables are not allowed.
* Once a parameter has a default argument, the parameters after it also require a default argument.

## Functions as variables
You can also use functions like variables. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:
```
global addition as function(int, int)int = function (a as int, b as int) as int {
    return a + b;
};

print(addition(1,2));
```