# Usa bucles para hacer que tu script se vea mejor

## Problema

Todos lo hemos visto: Scripts con más de 500 líneas donde dice 500 veces `recetas.remove(item1);recipes.remove(item2),...`  
No sólo es un dolor para escribir, pero es posible que pases horas depurando un poco de error tipográfico cuando la única excepción que obtienes es `error en las recetas. : nulo`

## Solución

My rule of thumb: When writing the exactly same command more than 10 times, with only 1 Parameter changing, I'll use a loop.

Así que, en lugar de teclear siempre las funciones, declaro una matriz que contiene todos los elementos y iterar a través de ésta.

```zenscript
importar crafttweaker.item.IIngredient;

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

## Ventajas

- Tu script se hace (en mi opinión) más fácil de leer
- Sabes exactamente dónde está tu script
- Los cambios de último minuto son realmente fáciles ya que todo lo que necesitas hacer es añadir o quitar el elemento de la matriz.

## Desventajas

- Solo funciona cuando solo hay unos pocos parámetros cambiando
- Podrías programar tu script sin saberlo, por ejemplo, emitiendo la matriz erróneamente
- Un error en la matriz hace que toda la matriz falle y no se hará nada en absoluto.
- Es posible que reciba mensajes de error crípticos debido a que la matriz ha sido creada de forma incorrecta.