# Documentación de clase

Una `secuencia` es una lista de elementos en los que se puede operar y se evalúa perezosamente. Consulte la página [Concepto](/Mods/Boson/Sequences/Concept/) para más información.

## Detalles de la clase
Siendo parte del Proyecto ZenScriptX, el nombre completo para la clase es `zenscriptx.sequence.Sequence`.

## Crear una nueva instancia
Consulte la página [Obteniendo secuencias](/Mods/Boson/Sequences/Obtaining/).

## Métodos
Los distintos métodos disponibles en una secuencia se pueden dividir en cuatro categorías:

- Métodos de terminal
- Métodos perezosos de cambio de tipo
- Métodos perezosos intermedios
- Métodos de búsqueda intermedios

Cada categoría tiene su propio comportamiento y peculiaridades, que se describen en la categoría respectiva.

Además, en cada firma de métodos, las letras `T` y `R` hacen referencia a los tipos genéricos que definen la secuencia. En particular, `T` identifica el tipo de la secuencia actual, mientras que `R` identifica el tipo de la nueva secuencia que es devuelta en caso de que los métodos perezosos cambien el tipo.

Para ahorrar en el espacio, los métodos se presentarán en un solo fragmento en la categoría correspondiente con un comentario arriba indicando lo que se supone que debe hacer el método. como se muestra en el siguiente fragmento de ejemplo.

```zenscript
# este método hace algo
método de función (argumento como int, argument2 como bool) como doble;

# este método hace algo más, y puede devolver null
function method2() como bool?;
```

Por último, pero no menos importante, consulte la [lista de interfaces funcionales](/Mods/Boson/Functions/List/) si encuentra cualquier tipo no primitivo (e. . `Predicar<T>` o `Función<T, R>`).

### Métodos de terminal
Los métodos de terminal son métodos que no retornan una instancia de `Sequence` , sino cualquier otro tipo de datos, tal como `int`, `bool`, o incluso nada (`void`). Además, también pueden potencialmente causar la evaluación de todo el contenido de la `secuencia` , aunque esto no es necesario, ya que algunos métodos también pueden terminar la ejecución tan pronto como ciertas condiciones sean cumplidas. Sin embargo, no se puede hacer esta garantía.

También es imposible continuar operando en una `secuencia` después de que se ha llamado a un método de terminal, a menos que la secuencia se guardara previamente en una variable antes de la invocación del método terminal.

```zenscript
# Returns whether the given 'element' is present in the target sequence
function contains(element as T) as bool;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise throws an exception
function elementAt(index as int) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise invokes 'defaultValue'
function elementAtOrElse(index as int, defaultValue as IntFunction<T>) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise returns null
function elementAtOrNull(index as int) as T?;

# Returns the first element that matches the given predicate, or null if none matches
function find(predicate as Predicate<T>) as T?;

# Returns the last element that matches the given predicate, or null if none matches
function findLast(predicate as Predicate<T>) as T?;

# Returns the first element of this sequence, if present, otherwise throws an exception
function first() as T;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise throws an exception
function first(predicate as Predicate<T>) as T;

# Returns the first element of this sequence, if present, otherwise returns null
function firstOrNull() as T?;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise returns null
function firstOrNull(predicate as Predicate<T>) as T?;

# Returns the position at which 'element' is found within the sequence, or -1 if no such element exists in the sequence
function indexOf(element as T) as int;

# Returns the position of the first element that matches the given predicate, or -1 if none match
function indexOfFirst(predicate as Predicate<T>) as int;

# Returns the position of the last element that matches the given predicate, or -1 if none match
function indexOfLast(predicate as Predicate<T>) as int;

# Returns the last element of this sequence, if present, otherwise throws an exception
function last() as T;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise throws an exception
function last(predicate as Predicate<T>) as T;

# Returns the last position at which 'element' occurs in the sequence, or -1 if no such element exists in the sequence
function lastIndexOf(element as T) as int;

# Returns the last element of this sequence, if present, otherwise returns null
function lastOrNull() as T?;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise returns null
function lastOrNull(predicate as Predicate<T>) as T?;

# Returns the only element in this sequence, or throws an exception if the sequence doesn't have exactly one element
function single() as T;

# Returns the only element in this sequence that matches the given predicate, or throws an exception if no elements or more than one match
function single(predicate as Predicate<T>) as T;

# Returns the only element in this sequence, or null if the sequence doesn't have exactly one element
function singleOrNull() as T?;

# Returns the only element in this sequence that matches the given predicate, or null if no elements or more than one match
function singleOrNull(predicate as Predicate<T>) as T?;

# Converts this sequence to a list (not an array)
function toList() as [T];

# Returns whether all the elements inside this sequence match the given predicate, or true for empty sequences
function all(predicate as Predicate) as bool;

# Returns whether this sequence is not empty
function any() as bool;

# Returns whether at least one of the elements of this sequence match the given predicate
function any(predicate as Predicate<T>) as bool;

# Returns the amount of items that are present in this sequence
function count() as int;

# Returns the amount of items in this sequence that match the given predicate
function count(predicate as Predicate<T>) as int;

# Accumulates values starting from 'initial' and recursively applying 'operation' over the current status of 'initial' and the next element, saving the result back into 'initial'
function fold(initial as R, operation as BiFunction<R, T, R>) as R;

# Executes the given 'action' on every element of the sequence in order
function forEach(action as Consumer<T>) as void;

# Executes the given 'action' on every element of the sequence in order, providing access to the current index
function forEachIndexed(action as ObjIntConsumer<T>) as void;

# Returns the element that has the maximum value according to the given 'comparator', or null if the sequence is empty
function maxWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns the element that has the minimum value according to the given 'comparator', or null if the sequence is empty
function minWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns whether this sequence is empty
function none() as bool;

# Returns whether none of the elements of this sequence match the given predicate
function none(predicate as Predicate<T>) as bool;

# Returns the integer sum of all the elements of this sequence according to the given 'selector'
function sumBy(selector as ToIntFunction<T>) as int;

# Returns the floating point sum of all the elements of this sequence according to the given 'selector'
function sumByDouble(selector as ToDoubleFunction<T>) as double;

# Returns a string that represents the contents of the given sequence, converted to string via 'transform', separated with the given 'separator', and with the given 'prefix' and 'suffix'
# Moreover, the amount of elements can be limited via 'limit' (if different from -1), in which case a longer list will be truncated via the text in 'truncated'
function joinToString(
    separator as string,               # optional, default value: ", "
    prefix as string,                  # optional, default value: ""
    postfix as string,                 # optional, default value: ""
    limit as int,                      # optional, default value: -1
    truncated as string,               # optional, default value: "..."
    ¿transformar como función<T, String>?  # opcional, valor predeterminado: null (es decir, un `toString` simple será llamado en el objeto destino)
) como cadena;
```

### Métodos perezosos de cambio de tipo
Los métodos perezosos que cambian el tipo son métodos que retornan una `secuencia` de un tipo diferente que la original, después del resultado de una operación de conversión (e. . de `ItemStack` a `IBlockState`). Puesto que son perezosas, la evaluación del contenido de la secuencia se realizará solo en un momento posterior. cuando la transformación realmente necesita pasar debido a la invocación de un método de terminal o de un método de búsqueda intermedio.

Puesto que estos métodos son intermedios, es posible seguir usando una `secuencia` después de una invocación de estos métodos.

```zenscript
# Transforma cada elemento de esta secuencia en otro utilizando la función 'transform' dada
del mapa de la función (transformar como función<T, R>) como secuencia<R>;

# Transforma cada elemento de esta secuencia en otro usando la función 'transform' dada, proporcionando acceso al índice actual
función mapIndexed(transformación como BiFunción<int?, T, R>) como Secuencia<R>;

# Agarra cada par de elementos adyacentes dentro de la secuencia y ejecuta la función de 'transformación' dada, devolver los resultados en una secuencia
# Devuelve una secuencia vacía si la secuencia actual tiene menos de dos elementos
function zipWithNext(transformarse como BiFunction<T, T, R>) como secuencia<R>;
```

### Métodos perezosos intermedios
Métodos perezosos intermedios son métodos que retornan una `secuencia` del mismo tipo que la actual, y la evaluación de el método se diferirá hasta que se llame a un método de terminal o a un método de eager intermedio, por lo tanto el nombre "perezoso". For this exact reason, element removal or addition may (and will) not be reflected in the sequence itself up until the sequence is fully evaluated. Por esta razón, cualquier cambio en los argumentos pasados a la función puede tener efectos secundarios no deseados (especialmente para `menos` y `más` llamadas).

Puesto que estos métodos son intermedios, es posible seguir usando una `secuencia` después de una invocación de estos métodos.

```zenscript
# Elimina los primeros elementos 'n' de la cabeza de la secuencia, eliminándolos efectivamente
function drop(n as int) como Sequence<T>;

# Elimina elementos de la cabeza de la secuencia siempre y cuando el predicado devuelva 'true', evitando de forma efectiva que
la función caigan (predicar como Predicado<T>) como secuencia<T>;

# Mantiene en la secuencia sólo los elementos que coinciden con el predicado
function filter(predicate as Predicate<T>) como Sequence<T>;

# Mantiene en la secuencia sólo los elementos que coinciden con el predicado dado, proporcionando acceso al índice actual
función filtrada (predicar como BiPredicate<int?, T>) como secuencia<T>;

# Elimina de la secuencia todos los elementos que coinciden con el predicado dado
function filterNot(predicate as Predicate<T>) como Secuencia<T>;

# Mantiene en la secuencia sólo los primeros elementos 'n', sacado de la cabeza de la secuencia
función tomar (n como int) como secuencia<T>;

# Mantiene los elementos de la secuencia desde su cabeza, siempre y cuando el predicado dado devuelva 'verdadero'
function take.Ue(predicate as Predicate<T>) as Sequence<T>;

# Remueve elementos que son duplicados dentro de la secuencia actual, mantener efectivamente una sola "copia" de cada elemento
función distinct() como secuencia<T>;

# Elimina elementos que son duplicados de acuerdo con el selector dentro de la secuencia, mantener efectivamente una única "copia" de cada elemento
# K en esta instancia representa otro tipo genérico que identifica el tipo de "llave" que se utilizará para realizar esta operación
function distinctBy(selector como función<T, K>) como secuencia<T>;

# Ejecuta la 'acción' dada en cualquier elemento de la secuencia, sin terminarlo
function onEach(action as Consumer<T>) as Sequence<T>;

# Elimina los elementos dados de la secuencia, si están presentes
function menos (elementos como T[]) como secuencia<T>;

# Elimina el elemento dado de la secuencia ONCE, si está presente, efectivamente recortando la cantidad de duplicados de ese elemento por 1
función menos Element(elemento T) como secuencia<T>;

# Añade los elementos dados al final de la secuencia
function plus(elements as T[]) as Sequence<T>;

# Añade el elemento dado al final de la secuencia
function plusElement(element as T) como secuencia<T>;

# Devuelve la secuencia actual (efectivamente un "do-nada")
function asSequence() como Sequence<T>;
```

### Métodos de búsqueda intermedios
Métodos de eager intermedios son métodos que retornan una `secuencia` del mismo tipo del actual, pero la evaluación del método no puede ser aplazada hasta que se llame a un método de terminal. Además, Los métodos eager pueden causar evaluación de las llamadas de toda la secuencia hasta ese punto en cualquier momento entre su invocación y la invocación del método de terminal. Por esta razón, se sugiere llamar a métodos entusiastas lo más esparcidamente posible y permitir que operen con la menor cantidad de datos posibles.

Puesto que estos métodos son intermedios, es posible seguir usando una `secuencia` después de la invocación de estos métodos.

```zenscript
# Ordena la secuencia actual con un algoritmo estable, de acuerdo a la salida de la función 'comparator' dada
function sortedWith(comparator: ToIntBiFunction<T, T>) como Secuencia<T>;
```

## Operador de sobrecarga
`Secuencia`s puede soportar sobrecarga del operador en futuras revisiones del idioma. Consulte esta documentación para mantener actualizado. Tenga en cuenta que el soporte puede requerir que se habilite una bandera especial del compilador: consulte [Preprocesador de banderas experimentales](/Mods/Boson/Preprocessor/Exp/) para más información.

## Ejemplo
El siguiente es un script de ejemplo que muestra algunos ejemplos que pueden hacerse con secuencias. Esta no es en ningún lugar una lista completa de , pero se refiere más a una referencia y una prueba de concepto.

```zenscript
# Muestra el nombre de los tres elementos dados
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName tiene "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(function (displayName) { print(displayName); });

# Muestra cómo se pueden almacenar las secuencias y llamar más tarde
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return item. isplayName tiene "Hierro"; })
            .map(function (item) { return item. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(function (message) { print(message); });


# Muestra cómo se puede repetir la conversión más de una vez
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString tiene " * "; })
    . orEach(function (b) { print(b); });

# Otro ejemplo aleatorio
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName tiene "Bed"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Muestra cómo las funciones sobrecargadas como el conteo de trabajo
print(<sequence:IItemStack>(<minecraft:redstone>). ount()); # Salida 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item. isplayName tiene "Hierro"; })); # Salidas 1

# Interoperabilidad entre ZenScriptX y Boson
<sequence:IItemStack>(<minecraft:redstone>)
    . ap(function (it) { return it. efinition; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Elemento Al agarrar elementos
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
