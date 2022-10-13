# Operaciones

A veces escribir números no sirve Sometimes you need some calculation.  
Remember that you can use more than two numbers at one, `1+1+1+1` would work fine as well.

## Consejo rápido

When unexpected results happen in a calculation, it is very well possible that you used two different types.  
For example `13 % 6.5` returns 1, even though the correct result is 0. ¿Por qué? ZenScript siempre hace operaciones con dos variables del mismo tipo. Para esto, convierte el segundo tipo para que sea el mismo que el primero. En este ejemplo, el calculo realizado fue ` 13 % 6 `, ya que el segundo número (un double) fue convertido para ser del mismo tipo que el primero (un int).

Siempre deberías comprobar que las dos variables (y los tipos) que usas sean el mismo, ante la duda usa ` print ` para añadir el resultado al log y confirmar los resultados.

## Operadores de Aritmética

Seguramente ya los habrás visto alguna vez, pero volvamos a verlos.

| Operador | Asignaoperador | Función  | Ejemplo |
| -------- | -------------- | -------- | ------- |
| `+`      | `+=`           | Suma     | 1+2     |
| `-`      | `-=`           | Resta    | 2-1     |
| `*`      | `*=`           | Producto | 1*1     |
| `/`      | `/=`           | División | 2/2     |
| `%`      | `%=`           | Módulo   | 13 % 6  |

## Concatenar

Engancha una cosa al final de la otra.

```zenscript
//Añade "Hola Mundo" al log
print("Hola" ~ " "~ "Mundo);
```

## Resultados de una operación

La mayoría de operaciones acaban con un resultado. ¿Qué hacemos con esto?

### Asignar una variable.

Hay 3 maneras de asignar un valor a una variable.

```zenscript
var prueba = 0;
//Opción 1:
// Da el valor 3 a prueba (1+2)
prueba = 1+2;

//Opción 2:
//Da el valor 5 a prueba (3+2)
prueba = prueba + 2

//Opción 3:
//Da el valor 2 a prueba (5-3)
prueba -= 3;
```

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### Usando el resultado

Siempre puedes usar el resultado de una operación como argumento de una función o códigos condicionales

```zenscript
//Añade 4 al log
print(3+1);
//Elimina la receta de crafteo para el quinto elemento del Array (array[4])
recipes.remove(array[3+1]);

//
if (3 + 1 == 2*2) { 
   print ("He usado una operación");
}
```
