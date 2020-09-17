# Un Primer sobre Interfaces Funcionales

De acuerdo con la especificación del lenguaje Java 8, una interfaz funcional en Java es:

> Una interfaz funcional es una interfaz que tiene un solo método abstracto (aparte de los métodos de `Objeto`), y representa así un único contrato de función. Este método "single" puede tomar la forma de múltiples métodos abstractos con firmas equivalentes sobreescribibles heredadas de superinterfaces; en este caso, los métodos heredados representan lógicamente un único método.
> 
> Para una interfaz I, dejar `M` ser el conjunto de métodos `abstract` que son miembros de I que no tienen la misma firma que cualquier `método de instancia` público de la clase `Object`. Entonces soy una *interfaz funcional* si existe un método `m` en `M` para el cual ambas cosas son verdaderas:
> 
> - La firma de `m` es una subfirma ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) de cada método de firma en `M`.
> - `m` es devuelto sustituible ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) por cada método en `M`.
> 
> [Fuente](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, siendo un lenguaje de programación similar a Java que interactúa con un backend de Java, tiene una definición similar.

## Una simplificación
La definición anterior es demasiado precisa y complicada, lo que cabe esperar de una especificación formal del idioma. Una versión más simplificada para el desarrollador podría ser la siguiente:

> Una interfaz `I` se llama *interfaz funcional* si define solo un método abstracto.

Esta definición también es aceptada por el propio ZenScript.

## El uso práctico
Hasta ahora, la documentación anterior se ha basado más en "qué" que en "por qué". Las interfaces funcionales pueden parecer un gimmick , pero son particularmente útiles, ya que en ZenScript permiten *Funciones puras* (i. . Las cosas que creas con la función ``se pasarán al código Java sin requerir shenanigans extraños. Esto es algo que definimos como "lambda".

Examples of applications of these interfaces are the [Recipe Functions](/Vanilla/Recipes/Crafting/Recipe_Functions/) that can be passed to recipes to change the output or input dynamically: `IRecipeFunction` and `IRecipeAction` are in fact two functional interfaces.

## El problema y su solución
Las Interfaces Funcionales que están disponibles en el lenguaje ZenScript son demasiado específicas. Por un lado, esto permite funciones finamente fabricadas para ciertos parámetros; por otra parte, esto limita severamente las posibilidades de lo que puede hacer el desarrollador.

Por esta razón, el Proyecto ZenScriptX decidió proporcionar un conjunto de interfaces funcionales de propósito general que pueden recibir una cantidad determinada de parámetros de entrada y salida otra cosa, permitiendo una interoperabilidad más fácil con las API basadas en Java. Una lista completa de las interfaces funcionales disponibles puede encontrarse [en esta página](/Mods/Boson/Functions/List/), junto con todos sus argumentos y tipos de retorno.

## Un aviso rápido
Tenga en cuenta que en esta documentación nos hemos referido principalmente a la interoperabilidad entre ZenScript y Java. Esto es porque ZenScript ya proporciona soporte para funciones de orden superior (i.e. almacenando funciones en una variable, llamándolas, pasándolos como parámetros, etc.) sin requerir ninguna interfaz funcional intermedio. Por esta razón, el siguiente código no sería válido en ZenScript:

```zenscript
val fun as Function = function (input as IIngredient) as IItemStack {
    if (input instanceof ItemStack) return input as ItemStack;
    return null;
} as Function;

print(divertido. pply(<minecraft:stick>).commandString); # no compile
```

Esto sucede porque los métodos funcionales no están expuestos a ZenScript, sino sólo al backend de Java. Para encontrar un ejemplo de un uso real de estas interfaces funcionales, consulte la página [documentación de secuencias](/Mods/Boson/Sequences/Docs/).


