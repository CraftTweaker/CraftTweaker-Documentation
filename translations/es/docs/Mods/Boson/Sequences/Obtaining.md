# Obteniendo `secuencia`s

## Resumen
Obtener una `secuencia` es un proceso de dos pasos: primero es necesario obtener una referencia a un constructor de secuencia de el tipo correcto, entonces invocar al constructor pasando una lista de elementos del tipo dado o un array listo para el tipo dado completará el proceso de construcción.

Algunas integraciones de CraftTweaker también pueden proporcionar una manera de obtener una `secuencia` directamente o a través de un método. En este caso, no hay necesidad de hacer ninguna invocación del constructor. Por otro lado, el tipo genérico no se especificará explícitamente, requiriendo al usuario que haga una nota mental del tipo de devolución.

## Paso 1: El Constructor
Referir un constructor de `secuencia` se hace a través de un manejador de corchetes especial, que tiene la siguiente sintaxis:

```zenscript
<sequence:CLASSNAME>
```

En el fragmento de arriba, `CLASSNAME` representa el nombre corto o completamente calificado de la clase para la que esta secuencia será genérica. En palabras más simples, eso definirá qué tipo de elementos podrá almacenar la secuencia cuando se invoca el constructor.

Consideremos los dos ejemplos siguientes:

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

La expresión de secuencia marcada con `# 1` devolverá una referencia a un constructor para una secuencia que será capaz de mantener instancias de `ItemStack`. Tenga en cuenta que esto requiere que la clase sea importada en el script actual para funcionar.

La expresión de secuencia marcada con `# 2` devolverá una referencia a un constructor para una secuencia que será capaz de mantener cualquier tipo de `IIngredient`, significa que aceptará `ItemStack`s, pero también `IOreDictEntr`ies o cualquier otro personalizado `IIngredient` implementación.

**IMPORTANTE:** Este tipo inicial solo influirá en el tipo de secuencia actual. Siempre es posible cambiar el tipo almacenado en esta secuencia más tarde a través de cualquier llamada `Sequence`-type-converting calls, tal como `mapa`. Hay más información disponible en la [documentación de la clase](/Mods/Boson/Sequences/Docs/).

## Paso 2: invocando al Constructor
Puesto que los manejadores de corchetes no invocan al constructor, sino que simplemente lo refieren, ahora es necesario invocar directamente al constructor . Esto puede hacerse a través de una sintaxis de invocación de método normal, excepto que se hace sobre un manejador de corchetes y no sobre un nombre de método.

El constructor de una secuencia es un vararg, lo que significa que puede aceptar cualquier cantidad de argumentos, siempre y cuando sean todos del tipo genérico dado en la referencia del constructor. E.g., the bracket handler `<sequence:IItemStack>` will not be able to accept a `<ore:ingotCopper>` in its constructor, since an `IOreDictEntry` is not an `IItemStack`.

Es posible no proporcionar argumentos al constructor, en cuyo caso la secuencia estará vacía.

También es posible proporcionar una matriz en sí misma o una referencia a una matriz, ya sea en forma de método o variable. En este caso, el array sólo será aceptado si el tipo coincide con `CLASSNAME[]`, donde `CLASSNAME` es el nombre del tipo de objetos en la secuencia. Tenga en cuenta que este comportamiento **puede requerir** una bandera experimental para ser habilitada. Consulte el [Preprocesador de banderas experimentales](/Mods/Boson/Preprocessor/Exp/) para más información.

Lo siguiente es un fragmento de código que muestra cómo se aplica lo anterior en el código.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val sequenceOfrecpes = <sequence:ICraftingRecipe>(recetas. ll); # requiere que -Esao sea especificado
```

## ¿Qué sigue?
Ahora que la `secuencia` ha sido construida, consulte [la documentación de la clase](/Mods/Boson/Sequences/Docs/) para una lista de métodos soportados.
