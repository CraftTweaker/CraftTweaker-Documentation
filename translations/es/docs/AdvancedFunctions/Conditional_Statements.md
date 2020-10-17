# Declaraciones condicionales

Es posible que quieras incluir código que sólo se ejecutará si se cumplen ciertos criterios (o si no se cumplen). Para eso se necesitan declaraciones condicionales.

## Si

Una declaración sif es la primera parte de una declaración condicional. Declara la condición que debe ser verdadera para que se ejecute el siguiente código. **¡Ten cuidado, necesitas DOS EQUALES al comparar valores! (¡Eso es porque una igual es para declarar valores!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("¡Prueba es cero!");
}
```

## Otra

Se puede añadir otra sentencia al final de una sentencia condicional para declarar lo que se ejecutará cuando la condición if-condition sea igual a falsa.

```zenscript
var test = 0;

if (test == 0) { //true
    ///será ejecutado cuando la prueba sea igual a 0
    print("¡Prueba es cero! );
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero! );
}

prueba = 1;
if (test == 0) { //false
    ///será ejecutado cuando la prueba sea igual a 0
    print("Ahora, ¡prueba es cero! );
} else {
    //será ejecutado cuando la prueba no sea igual a 0
    print("Ahora, ¡prueba NO es cero! );
}

```

## Cosas a buscar

Los cálculos soportados son `+`,`-`,`*`,`/`,`mod`,`concatenación(~)`

Las Operaciones soportadas son `Operaciones lógicas (||)`, `Ármacos lógicos (&&)`, `OR(|)`, `AND(&)`, y `XOR(^) en sentido estricto`

```zenscript
//You can check for:


//Number values
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Calculado valores numéricos
val b = 1;
val c = 5;
//All evaluate to true
if (b+c == 6) { print("Num1! ); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0. ) { print("Num3! ); }

//OR, XOR, AND
val d = "Hola";
val e = "Mundo";
val f = d~e; //f = "HelloWorld", el Tilde simplemente concatena una cosa a otra

//||(OR) significa, mientras se cumpla uno de los criterios, se evalúa a verdadero
if (d == "Hola" || e == "Hola") { print("OR1! ); } //true
if (d == "Hola" || e == "Mundo") { print("OR2! ); } //true

//^(XOR) significa, SÓLO un criterio puede ser cumplido, de lo contrario evalúa a false
if (d == "Hola" ^ e == "Hola") { print("XOR1! ); } //true
if (d == "Hola" ^ e == "Mundo") { print("XOR2! ); } //false

//&&(AND) significa, ambos criterios deben cumplirse, de lo contrario evalúa a false
if (d == "Hola" && e == "Hola") { print("AND1! ); } //false
if (d == "Hola" && e == "Mundo") { print("AND2! ); } //true
```

## ¿El ? Operador

Sin duda, escribir siempre una estructura if/else puede ser molesto. Específicamente si usted sólo quiere hacer una o una condición. Es por eso que el operador `?` fue implementado. Sigue la misma lógica que una sentencia si/no, sólo es mucho menos código requerido. Syntax: `boolean ? si: si no,`

```zenscript
val switchy = false;

//prints switchy state
print("Switchy is " ~ switchy);

///if switchy is true, vInt = 1, otherwise vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Imprime "Hola" si el switchy está listo, de lo contrario imprime "Por"
print(switchy ? print("Bye") : print("Hello"); "Hello" : "Bye");

//Prints "Bye" if switchy is true, otherwise prints "Hello"
switchy ?

```

## Operadores

Puede utilizar estos operadores. Todos los ejemplos dados se evalúan a verdad.

| Nombre        | token        | Explicación                                                                                                                                                              | Example                |
| ------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| No            | `!`          | Invierte un booleano                                                                                                                                                     | !falso                 |
| No es igual   | `!=`         | Comprueba si el valor antes y después no es igual                                                                                                                        | 1 != 2                 |
| Igual         | `==`         | Comprueba si el valor antes y después son iguales                                                                                                                        | 1 == 1                 |
| Mayor que     | `>`       | Comprueba si el valor antes es mayor que después                                                                                                                         | 1 > 2                  |
| Mayor o Igual | `>=`      | Comprueba si el valor antes es mayor o igual después de                                                                                                                  | 1 >= 1                 |
| Menor que     | `<`       | Comprueba si el valor anterior es menor que después                                                                                                                      | 1 < 2                  |
| Menor o igual | `<=`      | Comprueba si el valor anterior es menor o igual después de                                                                                                               | 1 <= 1                 |
| Y lógico      | `&&` | Comprueba si los valores anteriores y posteriores son verdaderos, falso si uno o ambos son falsos                                                                        | verdadero && verdadero |
| Lógica O      | `\|\|`     | Comprueba si el valor anterior o posterior es verdadero, falso si ninguno es verdadero                                                                                   | falso \|\| verdadero |
| Bitwise XOR   | `^`          | Comprueba si uno de los valores anteriores o posteriores es verdadero, falso si ambos o ninguno son verdaderos                                                           | verdadero ^ falso      |
| Y Bitwise     | `&`      | Realiza una operación AND en el antes y después de valores. Mira [este](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para más | verdadero && verdadero |
| O Bitwise     | `\|`        | Realiza una operación OR en el antes y después de valores. Mira [este](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para más  | falso \|\| verdadero |

### Diferencia entre `|` y `||` (y `&` y `&&`)

La principal diferencia entre el único y el doble, con la semántica aparte, es que el doble realiza un chequeo después de cada condición y sale temprano - esto se llama cortocircuito. Sin embargo, el único pasa por toda la cadena de condiciones, incluso si el primero hubiera cancelado toda la condición. Esto no solo guarda recursos, sino que también permite un scripting más fácil, como las comprobaciones de null **** y condiciones encadenadas.

```zenscript
var a = 5;
var item = ... como ItemStack;

// A pesar de que a es 5, todavía pasa por todas las condiciones listadas
if (a == 5 | a == 3 | a == 10 | a == -1) {
...
}

// Aunque a es 5 y la condición es imposible (una variable no puede ser 3 y 5), todavía pasa por todas las condiciones listadas
if (a == 3 & a < 2 & a > 8 & a == 5) {
... 
}

// Comprueba si el elemento no es nulo antes de acceder a variables desde el elemento
if (!isNull(item) && item.amount == 1) {
...
}

// Comprueba si el elemento no es nulo al acceder a variables desde un elemento potencialmente nulo, arrojando un error si el elemento es nulo
if (! sNull(item) & item. mount == 1) {
...
}
```

## El operador In/Tiene

El `en` y el `tiene` operador comprobar si algo está en algo.  
Primero necesitas la lista que quieres registrar, entonces el `en`/`tiene` entonces el valor que desea comprobar. `en` y `tiene` son la misma palabra clave para ZS, pero en la mayoría de los casos la gente usa `tiene` para comprobar si una colección contiene un objeto y bucles de entrada ya que esto representa la gramática inglesa.

### en/tiene cargadoMods

Puede comprobar, si se carga un mod comprobando si está en la lista de cargados

```zenscript
//While contiene verificaciones pueden usarse en
if (loadedMods en "mcp") {
    print("Minecraft Coder Pack cargado");
}

//La mayoría de la gente prefiere usar tiene
if (loadedMods tiene "mcp") {
    print("Minecraft Coder Pack cargado");
}
```

### en/tiene IIngredient

También puede comprobar si un elemento coincide con una definición comparando dos IIngredients.  
Con este tienes que tener un poco de cuidado para no confundir las dos entradas:  
Esto solo es cierto cuando el IIngrediente AFTRA `en` también se puede encontrar completamente en el que BEFORE el `en`.  
En la mayoría de los casos usará el `tiene` palabra clave en su lugar ya que su intención es más clara y hace exactamente lo mismo.

```zenscript
// Comprueba si el lingote de hierro está en el oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Los lingotes de hierro están en el oreDict derecho");
}

// Preferido, la misma función que la anterior
si (<ore:ingotIron> tiene <minecraft:iron_ingot>) { 
    print("Los lingotes de hierro están en el oreDict derecho");
}
```

Esto solo es cierto cuando TODOS los artículos coincidentes del IIngrediente que `tiene` también se pueden encontrar en el IIngrediente `tiene`: Di que tenemos un IIngrediente que contiene todos los escurros (e. . polvo de redstone y brillante):

```zenscript
val redstone = <minecraft:redstone>;
val brillo de piedra = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts. dd(piedra roja, piedra brillante);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and brlowstone, y redstone sólo consiste en redstone.
if (redstone tiene todos los Polvo) {

}
```