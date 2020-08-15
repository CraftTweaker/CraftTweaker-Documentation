# El concepto

El bucle es un concepto antiguo y una de las bases de la programación: repetir el mismo conjunto de acciones sobre un grupo de elementos , mientras se filtraban algunos de ellos o se convertían conjuntos. O incluso encontrar el primer elemento en una lista que satisfaga una condición determinada o contar los elementos en un conjunto recursivamente.

En programación imperiosa y procedimental, la mayor parte de eso se ha hecho con viejos bucles viejos `para` y una serie de sentencias condicionales con su relativo `continuar` y `romper` proposiciones. Si bien esto puede parecer más sencillo de seguir, it requiere un montón de código para operaciones simples, como el filtrado y puede producir cadenas de anidación que pueden prolongarse más tiempo. Además, no expresa la intención a menos que el código lo especifique con comentarios.

Considere el siguiente código de ZenScript:

```zenscript
var TexttForMc = false;

para receta en recetas. ll {
    if (recipe.shaped) {
        val output = recetas. utput;
        if (! sNull(output)) {
            if (output. efinition.owner == "minecraft") {
                val hasData = salida. asTag;
                if (hasData) {
                    TexttForMc = true; interrumpir

                }
            }
        }
    }
}
```

Lo que hace este código no es obvio a primera vista y requiere que el usuario lea la lógica para entender. Considere este equivalente construido a través de secuencias:

```zenscript
val TexttForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe. haped; })
    .map(function (recipe) { return recipe.output; })
    . ilterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output. efinition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

Este código hace exactamente lo mismo y no sólo es más conciso, pero también transmite más significado que una cadena de sentencias anidadas `si`. Por supuesto, esto no parece una mejora general, debido a la simplicidad del código en cuestión. pero puede resultar útil para piezas de lógica más complicadas.

Otro profesional del código anterior es que la evaluación no se realiza hasta `cualquier` llamada, lo que significa que la secuencia puede ser extendida mediante llamadas de métodos adicionales a lo largo del tiempo y no se resolverá hasta que se llame un método "terminal" (i. . un método que no devuelve una `secuencia` en sí mismo). Esto resulta extremadamente útil ya que no es necesario evaluar el arreglo entero `recetas.all`.

Para comenzar y aprovechar las Secuencias, puede consultar la [documentación de la clase](/Mods/Boson/Sequences/Docs/) y [cómo obtener un](/Mods/Boson/Sequences/Obtaining/) páginas de documentación.
