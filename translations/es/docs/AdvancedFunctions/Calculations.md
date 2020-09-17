# Calculaciones

A veces escribir números no lo cortará. A veces se necesita algún cálculo.  
Recuerda que puedes usar más de dos números en uno, `1+1+1+1` también funcionaría bien.

## Un consejo

Cuando ocurren resultados inesperados en un cálculo, es muy posible que usted haya utilizado dos tipos diferentes.  
Por ejemplo `13 % 6.5` devuelve 1, aunque el resultado correcto sea 0. ¿Por qué? ZenScript realiza siempre sus cálculos con dos variables del mismo tipo. Para esto, convierte el 2do tipo para que coincida con el primero. En este ejemplo, el cálculo realizado fue `13 % 6`, ya que el segundo número (un doble) se convirtió para que coincidiera con el primero (un entero).

Siempre tenga cuidado con los dos tipos de variable que utiliza y cuando tenga dudas, simplemente utilice una función de impresión para imprimir la salida al registro y confirmar los resultados.

## Operadores Arithméticos

Estoy bastante seguro de que todos ustedes ya los conocen, ¿verdad?

| Token | Tokenassign | Función        | Ejemplo |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Adicional      | 1+2     |
| `-`   | `-=`        | Suscripción    | 2-1     |
| `*`   | `*=`        | Multiplicación | 1*1     |
| `/`   | `/=`        | División       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concatenación

Pon una cosa en la y la otra

```zenscript
//prints "Hola Mundo"
print("Hola" ~ " " ~ "Mundo");
```

## Resultados del cálculo

Un cálculo generalmente termina con un resultado. ¿Qué hacer con esto?

### Asignando una variable

Hay dos maneras de asignar un valor a una variable:

```zenscript
var test = 0;

//Opción 1:
//asigna prueba con el valor 3 (1+2)
prueba = 1+2;

//Opción 2:
//assigna prueba con 5 (3+2)
test = prueba + 2;

//Opción 3:
//asigna prueba con 2 (5-3)
prueba -= 3;
```

La opción 1 y 2 asigna la variable de retorno usando el token `=` .  
Esta es probablemente la forma más fácil para los principiantes y la única si desea asignar una variable no utilizada en el cálculo.

La opción 3 asigna la variable antes de la `-=` con el resultado de una resta normal.  
Todos los operadores de esta página tienen sus respectivos tokens de asignación, compruebe la tabla anterior.

### Utilizar el resultado de otra manera

Siempre puede utilizar el resultado de un cálculo en una función o una sentencia condicional:

```zenscript
//prints 4
print(3+1);

//elimina el elemento del arreglo[4]
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("¡Utilizado un cálculo!")}
```