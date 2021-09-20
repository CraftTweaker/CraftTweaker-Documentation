# Bedingte Anweisungen

Manche Codezeilen sollten nur ausgeführt werden, wenn bestimmte Kriterien erfüllt werden (oder auch nicht). Für sowas gibt es bedingte Anweisungen.

## If (Wenn)

Eine bedingte Anweisung beginnt immer mit einer If-Abfrage. Sie prüft, ob das gegebene Statement wahr (true) ist und führt ggf. den folgenden Code in der Klammer aus. **Be careful, you need TWO EQUALS when comparing values! (Eso es porque un igual se interpreta como una declaración de una variable)</p>

```zenscript
val prueba = 0;

if (prueba == 0) { //Verdadero
    print("Prueba es igual a cero");
}
```

## Else (Ansonsten)

Ein Else-Statement kann an eine If-Abfrage angehängt werden und wird ausgeführt, falls die Abfrage nicht true (false) ergibt.

```zenscript
var Prueba = 0;

if (Prueba == 0) { //verdadero
    //Se ejecutará cuando prueba es igual a 0
    print("Prueba es cero");
} else {
    //Se ejecutará cuando prueba NO es igual a 0
    print("Prueba NO es cero");
}

Prueba = 1;
if (Prueba == 0) { //falso
    //Se ejecutará cuando prueba es igual a 0
    print("Ahora, prueba es cero");
} else {
    //will be executed when Prueba is not equal to 0
    print("Ahora, prueba no es 0");
}

// Por tanto en nuestro log veremos:
Prueba es cero
Ahora, prueba no es 0

```

## Dinge, die man überprüfen kann

Berechnungen: `+`,`-`,`*`,`/`,`mod`,`verkettung(~)`

Operadores posibles son  `Lógico OR(||)`, `Lógico AND(&&)`, `deBits OR(|)`, `deBits AND(&)`, and `deBits XOR(^)`

```zenscript
//Puedes comparar:

//Valores númericos
val a = 0 as int;
if (a == 0){ print("a es igual a cero");}

//Valores númericos con operaciones

//Todas son ciertas
if (b+c == 6) { print("¡Número Uno!"); } // Matze Knop estará orgulloso
if (b*c == 5) { print("¡Número dos!"); }
if (b/c == 0.2) { print("¡Número tres"); }

//Operadores condicionales (||), (^), (&&)
||: Con sólo que uno de los parámetros sea cierto, se ejecutará el bloque condicional
^: Sólo uno puede ser cierto, de otro modo no ocurrirá nada
&& Todos los parámetros deben ser ciertos.

val d = "Hola";
val e = "Mundo";
val f = d~e; //f = "HolaMundo", ~ concadena los strings

if (d == "Hola" || e == "Hola") { print("OR1!"); }        //cierto
if (d == "Hola" || e == "Mundo") { print("OR2!"); }        //cierto

if (d == "Hola" ^ e == "Hola") { print("XOR1!"); }        //cierto
if (d == "Hola" ^ e == "Mundo") { print("XOR2!"); }        //falso

if (d == "Hola" && e == "Hola") { print("AND1!"); }       //falso
if (d == "Hola" && e == "Mundo") { print("AND2!"); }       //cierto
```

## Der ? ?

Die ganze Zeit überall If/Else schreiben zu müssen kann schnell nervig werden. Besonders wenn du nur kleinere entweder/oder-Bedingungen benötigst. Für solche Fälle wurde der `?`-Operator implementiert. Er funktioniert genau wie ein If/Else-Statement, für welches man weniger Code benötigt. Se usa así: `boolean ? if : else`

```zenscript
val switchy = false;

//gibt den Status aus
print("Switchy is " ~ switchy);

//wenn switchy true ergibt, vInt = 1, ansonsten vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Gibt "Hallo" aus, wenn switchy true ist, ansonsten "Tschüss"
print(switchy ? print("Tschüss") : print("Hallo"); "Hallo" : "Tschüss");

//Gibt "Tschüss" aus, wenn switchy true ergibt, ansonsten "Hallo"
switchy ?

```

## Operatoren

Du kannst folgende Operatoren verwenden. Alle gegebenen Beispiele ergeben true.

| Nombre              | Zeichen      | Erklärung                                                                                                                                                                    | Beispiel          |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Nicht               | `!`          | Invertiert ein Boolean (true/false)                                                                                                                                          | !false            |
| Nicht gleich        | `!=`         | Prüft, ob der Wert davor und danach nicht gleich ist                                                                                                                         | 1 != 2            |
| Gleich              | `==`         | Prüft, ob der Wert davor und danach gleich ist                                                                                                                               | 1 == 1            |
| Größer als          | `>
`      | Prüft, ob der Wert davor größer ist als der Wert danach                                                                                                                      | 2 > 1             |
| Größer oder gleich  | `>=`      | Prüft, ob der Wert davor größer oder gleich groß wie der Wert danach ist                                                                                                     | 1 >= 1            |
| Menor que           | `<
`      | Prüft, ob der Wert davor kleiner ist als der Wert danach                                                                                                                     | 1 < 2             |
| Kleiner oder gleich | `<=
`     | Prüft, ob der Wert davor kleiner oder gleich klein wie der Wert danach ist                                                                                                   | 1 <= 1            |
| Y Lógico            | `&&` | Comprueba si los dos booleans a cada lado del operador son ciertos.                                                                                                          | true && true      |
| O Lógico            | `\|\|`     | Comprueba que uno de los dos booleans a cada lado sea cierto                                                                                                                 | false \|\| true |
| XOR de bits         | `^`          | Comprueba si uno de los dos valores es verdadero, devuelve falso si los dos o ninguno de los son verdaderos                                                                  | true ^ false      |
| AND de bits         | `&`      | Realiza una operacion AND de bits en los dos valores Ver [esto](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para mas informacion | true && true      |
| OR de bits          | `\|`        | Realiza una operacion OR de bits en los dos valores Ver [esto](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para mas informacion  | false \|\| true |

### Diferencia entre `|` y `||` (y `&` y `&&`)

La diferencia entre el individual y el doble, sin contar semántica, es que el doble ejecuta comprueba antes y despues de cada condicion que todo vaya bien, y puede acabar antes - a esto se le llama cortocircuito. Sin embargo, el individual pasa por toda la cadena de condiciones, incluso si la primera cancelaría la cadena entera. This not only saves resources, but also allows for easier scripting such as **null checks** and chained conditions.

```zenscript
var a = 5;
var item = ... as IItemStack;

// Even though a is 5, it still goes through all of the conditions listed
if (a == 5 | a == 3 | a == 10 | a == -1) {
    ...
}

// Even though a is 5 and the condition is impossible (a variable can't be both 3 and 5), it still goes through all of the conditions listed
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// Checks if item is not null before accessing variables from item
if (!isNull(item) && item.amount == 1) {
    ...
}

// Comprueba si el objeto es nulo al mismo momento que accede a una variable del objeto, y en caso de ser nulo obtendríamos un error.
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## Der in/has-Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` y `has` son la misma palabra clave en ZS, pero en la mayoria de los casos la gente usa `has` para comprobar si una lista contiene un objeto y `in` en loops, ya que esto representa la gramática en ingles.

### in/has + loadedMods

Puedes comprobar si un mod esta instalado comprobando si esta en la lista de loadedMods

```zenscript
//Aunque comprobaciones pueden usar in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack instalado");
}
//La mayoría de la gente prefiere usar has
if (loadedMods has "mcp") {
    print("Minecraft Coder Pack instalado");
}

```

### IIngredient in/has

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredient AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
//Comprueba si el lingote de hierro esta en el oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Los lingotes de hierro están en el oreDict apropriado");
}
// Lo mismo que arriba
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("Los lingotes de hierro están en el oreDict apropriado");
}
```

This is only true when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val todosPolvos = <ore:dustAll>;
todosPolvos.add(redstone, glowstone);

//Cierto porque redstone se encuentra dentro de todosPolvos
if (todosPolvos has redstone) {
}

//Falso porque todosPolvos contiene redstone y glowstone, y la variable redstone solo contiene redstone.
if (redstone has todosPolvos) {

}
```