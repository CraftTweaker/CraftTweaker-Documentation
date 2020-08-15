# `Etiqueta`

Un `Tag` es la representación del objeto de lo que se almacena dentro de una etiqueta real dentro del juego. You can only access this data from within the [`tags` loader](/Mods/Boson/Loaders/Tags/). Para obtener más información sobre las etiquetas y cómo obtenerlas, consulte a [esta página](/Mods/Boson/Tags/Concept/).

## Detalles de la clase
La clase está situada en el paquete `net.thesilkminer.mc.boson.zen.tag` , haciendo que `net.thesilkminer.mc.boson.zen.tag.Tag` su nombre completo para importar.

## Crear una nueva instancia
Consulte [la documentación del manejador de corchetes](/Mods/Boson/Tags/BracketHandler/).

## Propiedades
Una etiqueta `` proporciona acceso de solo lectura a un determinado conjunto de propiedades, como se describe en la siguiente tabla:

| Nombre de Propiedad | Tipo                                        | Descripción                                                           |
| ------------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| `nombre`            | [`NombreEspacioCadena`](/Mods/Boson/Names/) | Nombre que identifica esta etiqueta de forma única                    |
| `tipo`              | [`TagType`](/Mods/Boson/Tags/TagType/)      | El tipo de esta etiqueta                                              |
| `elementos`         | `[T]` (donde `T` es un tipo genérico)       | Una lista de sólo lectura de los elementos actualmente en la etiqueta |

## Métodos

### Adicional
Añadir elementos a una etiqueta se puede hacer a través de un triplete de métodos, cuyas firmas están en el fragmento que sigue:

```zenscript
function add(elements... as NameSpacedString) as void;
function addAll(elements as any[]) as void;
function addFrom(other as Tag) as void;
```

`añadir` es un llamado "método varg", significando que puede aceptar tantos argumentos como se desee, siempre que sean todos del mismo tipo , i. . `NameSpacedString`s. Esto le permite especificar el nombre del registro del elemento que desea añadir a la etiqueta y la implementación de la etiqueta misma intentará convertir el nombre dado al objeto real.

`addAll`, por otra parte, acepta un array de elementos e intentos de añadirlos todos a la etiqueta dada. El array está marcado como `any[]` debido a la falta de soporte genérico en esta entrada de método. Sin embargo, intentando añadir elementos no compatibles a una etiqueta (por ejemplo, añadir bloques a una etiqueta de sólo ítem) dará como resultado que se lleve a cabo una operación sin opción.

`addFrom` añade todos los contenidos de una etiqueta al otro a través de una referencia de etiquetas, significa que cualquier modificación realizada a la segunda etiqueta también sucede a la primera. Tenga en cuenta que esta operación solo tiene éxito si los tipos de etiquetas coinciden, de lo contrario se llevará a cabo una operación no-op.

Lo siguiente es una lista de ejemplos:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# add elements via registry name
tag. dd("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# añade elementos a través de sus instancias reales
tag. ddAll([<buildcraft:iron_ingot>] as ItemStack[]);

# add another tag via a tag reference
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Reemplazo
Los elementos de una etiqueta pueden ser reemplazados completamente, lo que significa que todos los contenidos se borran primero, entonces los elementos dados son añadidos al contenido de la etiqueta. Esto también se consigue a través de un triplet de métodos, cuyas firmas están en el fragmento que sigue:

```zenscript
function replace(elements... as NameSpacedString) as void;
function replaceAll(elements as any[]) as void;
function replaceWith(other as Tag) as void;
```

`reemplazar` es un llamado "método varg", significando que puede aceptar tantos argumentos como se desee, siempre que todos sean del mismo tipo, i. . `NameSpacedString`s. Esto le permite especificar el nombre del registro del elemento que desea utilizar para reemplazar el contenido de la etiqueta y la propia implementación de la etiqueta intentará convertir el nombre dado al objeto actual.

`reemplaza All`, por otro lado, acepta un array de elementos e intentos de reemplazar el contenido de la etiqueta dada por el array. El array está marcado como `any[]` debido a la falta de soporte genérico en esta entrada de método. Sin embargo, intentando pasar elementos no compatibles a una etiqueta (digamos, los bloques a una etiqueta de sólo ítem) resultarán en una operación no-op realizada.

`reemplaza` el contenido de la etiqueta dada por una referencia de etiqueta al otro, significa que cualquier modificación realizada a la segunda etiqueta también sucede a la primera. Tenga en cuenta que esta operación solo tiene éxito si los tipos de etiquetas coinciden, de lo contrario se llevará a cabo una operación no-op.

Lo siguiente es una lista de ejemplos:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# reemplazar elementos vía nombre de registro
tag. eplace("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# replace elements via their actual instances
tag. eplaceAll([<buildcraft:iron_ingot>] as IItemStack[]);

# reemplazar otra etiqueta mediante una referencia de etiqueta
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Eliminar
La eliminación de elementos de una etiqueta se puede hacer a través de un triplete de métodos, cuyas firmas están en el fragmento que sigue:

```zenscript
function remove(elements... as NameSpacedString) as void;
function removeAll(elements as any[]) as void;
function removeFrom(other as Tag) as void;
```

`remove` es un llamado "método varg", significando que puede aceptar tantos argumentos como se desee, siempre que todos sean del mismo tipo, i. . `NameSpacedString`s. Esto le permite especificar el nombre del registro del elemento que desea eliminar de la etiqueta y la implementación de la etiqueta misma intentará convertir el nombre dado al objeto real.

`removeAll`, por otra parte, acepta una matriz de elementos e intenta eliminarlos todos de la etiqueta dada. El array está marcado como `any[]` debido a la falta de soporte genérico en esta entrada de método. Sin embargo, intentando eliminar elementos no compatibles de una etiqueta (digamos, la eliminación de bloques de una etiqueta sólo de item) hará que una operación no-op sea llevada a cabo.

`removeFrom` elimina la segunda etiqueta de la lista de referencias de etiquetas de la primera etiqueta. Esto eliminará los elementos que la segunda etiqueta lleva de la lista de los primeros, aunque la segunda etiqueta no tendrá su contenido limpiado. Tenga en cuenta que esta operación sólo tiene éxito si los tipos de etiquetas coinciden, de lo contrario se llevará a cabo una operación no-op.

Lo siguiente es una lista de ejemplos:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# eliminar elementos mediante la etiqueta de nombre de registro
. emove("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# elimina elementos a través de sus instancias reales
tag. emoveAll([<buildcraft:iron_ingot>] as IItemStack[]);

# remove a tag reference
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Limpiando
También puede borrar el contenido de una etiqueta a través de un único método. Esto eliminará todos los elementos y todas las referencias de etiquetas almacenadas en la etiqueta y es equivalente a reemplazar una etiqueta por contenido vacío. Esto puede hacerse a través de un método que tiene la siguiente firma:

```zenscript
function clear() como vacío;
```

El siguiente es un ejemplo:

```zenscript
<tag-items:forge:ingots>.clear();
```

## Soporte adicional
Las etiquetas también ofrecen soporte adicional para ciertas características de ZenScript.

### Consultando
Al usar la `tiene` sintaxis, es posible preguntar si una etiqueta contiene o no un objeto determinado. De hecho, una etiqueta puede ser vista como una colección de elementos:

```zenscript
val isContained = TAG tiene ELEMENT;
```

`TAG` representa la instancia de etiqueta a consultar. `ELEMENT` representa la instancia del elemento que puede querer consultar para comprobar si está contenido en la etiqueta o no.

Ten en cuenta que mientras las etiquetas soportan la consulta de cualquier cosa (acepta de forma efectiva `cualquier`), usando un elemento que no es de el tipo que se almacena en la etiqueta no tiene efecto y simplemente cortocircuitará la evaluación a `falso`.

### Iterando
Las etiquetas también soportan iteración a través de un bucle iterativo for , usando un bucle normal `for` buop. De esta manera se elimina la necesidad de consultar los elementos mediante una llamada a `elementos` , lo que resulta en código más limpio.

Dado que las etiquetas son efectivamente un conjunto, el orden de iteración no se conserva y puede diferir entre diferentes ejecuciones del iterador . Por esta razón, sólo se soportan iteradores de un solo elemento (es decir, no se puede solicitar un índice de iteración cuando se itera).

La sintaxis a usar es la siguiente:

```zenscript
para VARNAME en TAG {
}
```

`VARNAME` representa el nombre de la variable que se actualizará en cada bucle. `TAG` es la instancia de etiqueta en la que buclar.

## Operador de sobrecarga
Las etiquetas también proporcionan cierta sobrecarga de los operadores ZenScript normales, para que ciertas operaciones puedan hacerse fácilmente y con menos caracteres. Cada sección contiene una tabla de ciertos sobrecargas de operador que están disponibles, con el significado correspondiente. En todas las tablas, `TAG` representa la instancia de la etiqueta destino, considerando que `ARGx` representa el argumento *x*-th que debe ser proporcionado.

### Operadores unarios
Los operadores unarios son operadores que se aplican a la etiqueta misma y no toman ningún argumento.

| Operador | Síntesis | Equivalente al método | Notas |
| -------- | -------- | --------------------- | ----- |
| `-`      | `-TAG`   | `limpiar`             | \-   |

### Operadores binarios
Los operadores binarios son operadores infijos que se aplican entre la etiqueta y un argumento. Los operadores están listados aquí en orden de prioridad (superior significa que se aplicará primero).

**IMPORTANTE**: a menos que se indique lo contrario, todos los operadores **mutan** la etiqueta que se pasa a la sobrecarga, lo que significa que cambian su contenido. Consideremos el siguiente ejemplo:

```zenscript
val tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] as ItemStack[];
```

Al final de este fragmento, el contenido de la etiqueta `` habrá cambiado de acuerdo con las reglas del operador. Esto **no** crea una nueva etiqueta, ni devuelve el valor de la etiqueta original. El siguiente fragmento de código no es válido:

```zenscript
val tag = <tag-items:forge:ingots>;
# NOT VALID: WILL CAUSE COMPILATION ERROR
tag = tag & [<minecraft:iron_ingot>] as ItemStack[];
```

| Operador | Tipo de argumento                           | Síntesis         | Equivalente del método | Notas                                                                              |
| -------- | ------------------------------------------- | ---------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| `+`      | `Etiqueta`                                  | `TAG + ARG1`     | `añadir de`            | \-                                                                                |
| `+`      | `una[]`                                     | `TAG + ARG1`     | `addAll`               | El tipo de array debe ser el mismo que el contenido de la etiqueta                 |
| `+`      | [`NombreEspacioCadena`](/Mods/Boson/Names/) | `TAG + ARG1`     | `añadir`               | La sobrecarga sólo acepta un argumento                                             |
| `+`      | `cualquiera`                                | `TAG + ARG1`     | `addAll`               | Atajo para un solo elemento: se aplican las mismas reglas que la versión del array |
| `~`      | `Etiqueta`                                  | `TAG ~ ARG1`     | `añadir de`            | \-                                                                                |
| `~`      | `una[]`                                     | `TAG ~ ARG1`     | `addAll`               | El tipo de array debe ser el mismo que el contenido de la etiqueta                 |
| `~`      | [`NombreEspacioCadena`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `añadir`               | La sobrecarga sólo acepta un argumento                                             |
| `~`      | `cualquiera`                                | `TAG ~ ARG1`     | `addAll`               | Atajo para un solo elemento: se aplican las mismas reglas que la versión del array |
| `&`  | `Etiqueta`                                  | `TAG & ARG1` | `añadir de`            | \-                                                                                |
| `&`  | `una[]`                                     | `TAG & ARG1` | `addAll`               | El tipo de array debe ser el mismo que el contenido de la etiqueta                 |
| `&`  | [`NombreEspacioCadena`](/Mods/Boson/Names/) | `TAG & ARG1` | `añadir`               | La sobrecarga sólo acepta un argumento                                             |
| `&`  | `cualquiera`                                | `TAG & ARG1` | `addAll`               | Atajo para un solo elemento: se aplican las mismas reglas que la versión del array |
| `-`      | `Etiqueta`                                  | `TAG - ARG1`     | `eliminar de`          | \-                                                                                |
| `-`      | `una[]`                                     | `TAG - ARG1`     | `eliminar todo`        | El tipo de array debe ser el mismo que el contenido de la etiqueta                 |
| `-`      | [`NombreEspacioCadena`](/Mods/Boson/Names/) | `TAG - ARG1`     | `eliminar`             | La sobrecarga sólo acepta un argumento                                             |
| `-`      | `cualquiera`                                | `TAG - ARG1`     | `eliminar todo`        | Atajo para un solo elemento: se aplican las mismas reglas que la versión del array |
| `==`     | `Etiqueta`                                  | `TAG == ARG1`    | \-                    | Actúa como verificación de igualdad, coincidiendo con el contenido; no muta `TAG`  |
| `()`     | \-                                         | `TAG()`          | `elementos`            | \-                                                                                |
