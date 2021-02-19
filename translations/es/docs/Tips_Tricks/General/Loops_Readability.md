# Usar Bucles para hacer que tu archivo se vea mejor 

## El problema 

Todos lo habremos visto: Archivos con más de 500 líneas donde dice 500 veces lo mismo: `recipes.remove(item1);recipes.remove(item2),...`  
No sólo es un palo para el que escribe, pero también vas a estar horas para intentar ver dónde tienes un error dentro de ésas 500 líneas cuando tu error es: `error in recipes.zs: null` 

## La solución

Cuando estés escribiendo la misma línea o acción más de 10 veces, con solo un parámetro cambiando, utilitza un bucle.

Así que ahora, en vez de escribir todo muchas veces, declaramos un ` Array ` que contenga todos los items o parámetros y repetimos la misma acción por cada miembro del ` Array. `

```zenscript
import crafttweaker.item.IIngredient;

val Array = [
    item1,
    item2,
    item3,
    ...
] as IIngredient[];


for item in Array{
    recipes.remove(item);
}
```

## Ventajas:

- Tu script es más práctico para el que lo lee.
- Sabes exactamente dónde está el error.
- Los cambios a última hora són fáciles de aplicar porque lo único que tienes que hacer es añadir o borrar un item y una coma. 

## Desventajas:

- Sólo funciona cuando cambia un parámetro o dos.
- Podría ser que todo dejara de funcionar por, yo que sé, darle un tipo que no toca a tu Array.
- Cualquier error en el Array hará que todo el Array falle y ninguna acción será ejecutada.
- Sería posible que recibieras mensajes de error debido a que el Array no fue creado de la forma correcta.