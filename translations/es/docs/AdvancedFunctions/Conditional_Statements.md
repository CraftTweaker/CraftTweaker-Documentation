# Declaraciones condicionales

Es posible que quieras incluir código que sólo se ejecutará si se cumplen ciertos criterios (o si no se cumplen). Para eso se necesitan declaraciones condicionales.

## Si

Una declaración sif es la primera parte de una declaración condicional. Declara la condición que debe ser verdadera para que se ejecute el siguiente código. Ten cuidado, necesitas DOS EQUALES al comparar valores (¡eso es porque una igual es para declarar valores!)

```zenscript
val test = 0;

if(test == 0){ //true
    print("¡Prueba es cero!");
}
```

## Otra

Se puede añadir otra sentencia al final de una sentencia condicional para declarar lo que se ejecutará cuando la condición if-condition sea igual a falsa.

```zenscript
var test = 0;

if(test == 0){//true
    ///will be executed when test is equal to 0
    print("Test is zero! );
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero! );
}

test = 1
if(test == 0){//false
    //will be executed when test is equal to 0
    print("Now, ¡prueba es cero! );
} else {
    //será ejecutado cuando la prueba no sea igual a 0
    print("Ahora, ¡prueba NO es cero! );
}

```

## Cosas a buscar

Los cálculos soportados son `+`,`-`,`*`,`/`,`mod`,`concatenación(~)`

Las Operaciones soportadas son `OR(|)`, `AND(&)`, `XOR(^)`

```zenscript
//Puedes comprobar:


//Número de valores
val a = 0 as int;
if(a==0){print("NumVal");

//Calculated number values
val b = 1;
val c = 5;
//All evaluate to true
if(b+c==6){print("Num1! );}
if(b*c==5){print("Num2!");}
if(b/c==0. ){print("Número 3! );}

//OR, XOR, AND
val d = "Hola";
val e = "Mundo";
val f = d~e; //f = "HelloWorld", el Tilde simplemente concatena una cosa a otra

//|(OR) significa, mientras se cumpla uno de los criterios, evalúa a verdadero
if(d=="Hola" | e == "Hola"){print("OR1! );} //true
if(d=="Hola" | e == "Mundo"){print("OR2! );} //true

//^(XOR) significa, SÓLO un criterio puede ser cumplido, de lo contrario evalúa a falso
if(d=="Hola" ^ e == "Hola"){print("XOR1! );} //true
if(d=="Hola" ^ e == "Mundo"){print("XOR2! );} //false

//&(AND) significa, ambos criterios deben cumplirse, de lo contrario evalúa a false
if(d=="Hola" & e == "Hola"){print("AND1! );} //false
if(d=="Hola" & e == "Mundo"){print("AND2!");} //true
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

| Nombre         | token        | Explicación                                                                                    | Ejemplo                 |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| No             | `!`          | Invierte un booleano                                                                           | !falso                  |
| No es igual    | `!=`         | Comprueba si el valor antes y después no es igual                                              | 1 != 2                  |
| Igual          | `==`         | Comprueba si el valor antes y después son iguales                                              | 1 == 1                  |
| Mayor que      | `>`       | Comprueba si el valor antes es mayor que después                                               | 1 > 2                   |
| Mayor o Igual  | `>=`      | Comprueba si el valor antes es mayor o igual después de                                        | 1 >= 1                  |
| Menor entonces | `<`       | Comprueba si el valor anterior es menor que después                                            | 1 < 2                   |
| Menor o igual  | `<=`      | Comprueba si el valor anterior es menor o igual después de                                     | 1 <= 1                  |
| Y              | `&`      | Comprueba si ambos, el valor antes y después son verdaderos, falso si uno o ambos son falsos   | verdadero & verdadero   |
| O              | `&#124;` | Comprueba si el valor antes o después es verdadero. Es cierto que ambos son verdaderos         | verdadero \| verdadero |
| XOR            | `^`          | Comprueba si el valor anterior o posterior es verdadero, falso si ambos o ninguno es verdadero | verdadero ^ falso       |

## El operador In/Tiene

El `en` y el `tiene` operador comprobar si algo está en algo.  
Primero necesitas la lista que quieres registrar, entonces el `en`/`tiene` entonces el valor que desea comprobar. `en` y `tiene` son la misma palabra clave para ZS, pero en la mayoría de los casos la gente usa `tiene` para comprobar si una colección contiene un objeto y bucles de entrada ya que esto representa la gramática inglesa.

### en/tiene cargadoMods

Puede comprobar, si se carga un mod comprobando si está en la lista de cargados

```zenscript
//While contiene verificaciones pueden usar en
if(loadedMods en "mcp"){
    print("Minecraft Coder Pack cargado");
}

//La mayoría de la gente prefiere usar tiene
if(loadedMods tiene "mcp"){
    print("Minecraft Coder Pack cargado");
}
```

### en/tiene IIngredient

También puede comprobar si un elemento coincide con una definición comparando dos IIngredients.  
Con este tienes que tener un poco de cuidado para no confundir las dos entradas:  
Esto solo es cierto cuando el IIngredeint AFTRA el `en` también se puede encontrar completamente en el que BEFORE el `en`.  
En la mayoría de los casos usará el `tiene` palabra clave en su lugar ya que su intención es más clara y hace exactamente lo mismo.

```zenscript
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Los lingotes de hierro están en el oreDic");
}

si(<ore:ingotIron> tiene <minecraft:iron_ingot>){
    impresión("Los lingotes de hierro están en el oreDic");
}
```

This is only then true, when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val brillo de piedra = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts. dd(piedra roja, piedra brillante);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and brlowstone, y redstone sólo consiste en redstone.
if(redstone tiene todos los Polvo) {

}
```