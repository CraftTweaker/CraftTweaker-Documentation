# Código condicional

Es posible que en algun momento quieras que una parte de código solo se ejecute si unos criterios determinados se cumplen. Para eso es lo que en programación existe el Código condicional.

## If 

Una declaración con if es la primera parte de Código condicional. Declara una condición que debe ser verdadera para que el código se ejecute. **¡Cuidado, necesitas 2 iguales para comparar dos valores!**. (Eso es porque un igual se interpreta como una declaración de una variable)</p> 

```zenscript
val prueba = 0;

if (prueba == 0) { //Verdadero
    print("Prueba es igual a cero");
}
```

## Else 

Una declaración else puede ser añadido al final de una parte de código condicional para declarar lo que debería pasar cuando el `if<code/> que viene antes es falso,  y por tanto no se ejecuta.</p>

<pre><code class="zenscript">var Prueba = 0;

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

`</pre> 

## Cosas que revisar

Los cálculos posibles son: `+`,`-`,`*`,`/`,`módulo(%)`,`concadenación(~)`

Operadores posibles son `Lógico OR(||)`, `Lógico AND(&&)`, `deBits OR(|)`, `deBits AND(&)`, and `deBits XOR(^)`

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

## El Operador ?

Es innegable que escribir un bloque if/else puede ser molesto. Especialmente si solo quieres una condicion o nada más. Por eso es por lo que el operador `?<code/> se implementó.
Tiene la misma lógica que un bloque if/else, sólo que que ocupa menos espacio.

Se usa así: <code>boolean ? if : else`

```zenscript
val cambiante = false;

//printea el valor de cambiante
print("Cambiante es " ~ cambiante);

//Si cambiante es verdadero, numero es uno, sino es dos.
val numero = cambiante ? 1 : 2;
print(numero);

//Printea hola si cambiante es verdadero, sino printea adiós.
print(cambiante ? print("Hola") : print("Adiós"); 

//Printea adiós si cambiante es verdadero, sino printea hola.
cambiante ? print("Adiós") : print("Hola");

```

## Operadores

Puedes usar estos operadores Todos los ejemplos acaban con un valor de true o verdadero

| Nombre            | Símbolo      | Explicación                                                                                                                                                                  | Ejemplo           |
| ----------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| No                | `!`          | Inverte un boolean                                                                                                                                                           | !false            |
| No igual          | `!=`         | Comprueba si los dos valores no son iguales                                                                                                                                  | 1 != 2            |
| Igual             | `==`         | Comprueba si los dos valores son iguales                                                                                                                                     | 1 == 1            |
| Mayor que         | `>
`      | Comprueba si el primer valor es mayor al segundo                                                                                                                             | 1 > 2             |
| Mayor o igual que | `>=`      | Comprueba si el primer valor es mayor o igual que el segundo                                                                                                                 | 1 >= 1            |
| Menor que         | `<
`      | Comprueba si el primer valor es menor al segundo                                                                                                                             | 1 < 2             |
| Menor o giaul que | `<=
`     | Comprueba si el primer valor es menor o igual que el segundo                                                                                                                 | 1 <= 1            |
| Y Lógico          | `&&` | Comprueba si los dos booleans a cada lado del operador son ciertos.                                                                                                          | true && true      |
| O Lógico          | `\|\|`     | Comprueba que uno de los dos booleans a cada lado sea cierto                                                                                                                 | false \|\| true |
| XOR de bits       | `^`          | Comprueba si uno de los dos valores es verdadero, devuelve falso si los dos o ninguno de los son verdaderos                                                                  | true ^ false      |
| AND de bits       | `&`      | Realiza una operacion AND de bits en los dos valores Ver [esto](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para mas informacion | true && true      |
| OR de bits        | `\|`        | Realiza una operacion OR de bits en los dos valores Ver [esto](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) para mas informacion  | false \|\| true |

### Diferencia entre `|` y `||` (y `&am` y `&&`)

La diferencia entre el individual y el doble, sin contar semántica, es que el doble ejecuta comprueba antes y despues de cada condicion que todo vaya bien, y puede acabar antes - a esto se le llama cortocircuito. However, the single goes through the entire chain of conditions, even if the first one would have cancelled the entire condition. This not only saves resources, but also allows for easier scripting such as **null checks** and chained conditions.

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

// Checks if item is not null while accessing variables from a potentially null item, throwing an error if the item is null
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## The in/has Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```zenscript
//While contains checks can use in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if (loadedMods has "mcp") {
    print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredient AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
// Checks if the iron ingot is in the oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Iron ingots are in the right oreDict");
}

// Preferred, same function as previous
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("Iron ingots are in the right oreDict");
}
```

This is only true when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if (redstone has allDusts) {

}
```