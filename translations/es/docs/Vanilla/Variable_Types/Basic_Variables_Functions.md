# Función básica de la variable

Los tipos de variables más básicos de ZenScript son Strings, Integers y booleans.

## Más tipos individuales

`true == true` Puedes comprobar si dos valores son iguales.  
`"Hola" != "Mundo"` También puede comprobar si dos valores son desiguales.

## Cadenas

Las cadenas proporcionan alguna funcionalidad

`"Hello".length` Devuelve la longitud de la cadena como int.  
`"Hola"[1]` Devuelve el carácter en el índice dado de la cadena como otra cadena.  
`"Hola" en "Hell"` comprueba si la cadena antes de `en` contiene la cadena después de ella como booleana. Puedes reemplazar el `in` por `tiene` si te gusta mejor.  
`"Hola" ~ "lo " + "Mundo"` También puede añadir/concatenar cadenas. `string += "assignAdd"` también puede utilizar los operadores assignAdd/assignConcatenate.

Aparte de estos, ¡todos los métodos que están disponibles para [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) y no utilizan el tipo `carácter` también están disponibles para las cadenas ZenScript!  
Esto incluye:

- a minúsculas
- toUpperCase
- getBytes
- hashCode
- prácticas
- isEmpty
- a Array
- recortar
- dividir

## Enteros

Los enteros proporcionan alguna funcionalidad

`+-*/%` operadores matemáticos básicos (revise la página [tipos de variable](/Vanilla/Variable_Types/Variable_Types)). También puede utilizar los tokens de asignación del operador  
`0 a 10` Devuelve un rango entero que va de 0 a 10.  
`1~10` Concatena los enteros (devuelve "110").

## Booleanos

Los booleanos proporcionan alguna funcionalidad

`true ~ false` Concatena los booleanos (devuelve "truefalse").  
`& | ^` operadores booleanos (y/o/xor).

## Array/ArrayLists

Arrays y ArrayLists proporcionan funciones comunes

`array[1]` devuelve el elemento en el índice dado.  
`array[1] = "Hola"` Establece el elemento en el índice dado.  
`array.length` devuelve la longitud del array