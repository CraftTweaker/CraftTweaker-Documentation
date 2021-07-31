# Operaciones

A veces escribir números no sirve A veces, necesitas realizar alguna operación.   
Acuerdate que puedes usar mas de dos números a la vez ` 1+1+1+1 ` funcionaría igual.

## Consejo rápido

Cuando hay resultados inesperados en una operación, es muy posible que hayas usado dos tipos diferentes.   
Por ejemplo, `13 % 6.5` devuelve 1, aunque el resultado correcto es 0. ¿Por qué? ZenScript siempre hace operaciones con dos variables del mismo tipo. Para esto, convierte el segundo tipo para que sea el mismo que el primero. En este ejemplo, el calculo realizado fue ` 13 % 6 `, ya que el segundo número (un double) fue convertido para ser del mismo tipo que el primero (un int).

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

Las opciones 1 y 2 dan el valor de la variable usando el operador ` = .`   
Estas son probablemente las maneras más fáciles para principiantes y la única manera si quieres darle un valor a una variable que no se usa en la operación.

La opción 3 le da el valor a la variable antes de ` -= ` con el resultado de una resta normal.   
Todos los operadores tienen su asignaOperador respectivos, en la tabla encima.

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