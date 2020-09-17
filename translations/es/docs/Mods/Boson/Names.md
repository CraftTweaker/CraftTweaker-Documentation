# Nombres en el Bosón

En Minecraft, la mayoría de los objetos se identifican con nombres únicos. Por ejemplo, los elementos utilizan su nombre de registro para ser identificados de forma única y no puede existir más de un artículo con el mismo nombre de registro.

La mayoría de los nombres en Minecraft siguen una estructura rígida, identificada por una cadena con un espacio de nombres y una ruta separada por dos puntos (p. ej. `minecraft:iron_ingot`, donde `minecraft` es el namespace y `iron_ingot` es la ruta). En CraftTweaker, la mayoría de estos nombres están representados como cadenas crudas, pero dentro del Bosón esto está frío. In fact, the usage of a raw `string` may confuse people on whether a method call expects a string with a namespace or without. Por esta razón, Boson separó el uso de cadenas sin espacio de nombres y de espacios de nombres.

Las cadenas sin espacio de nombres se representan como instancias de `string`, entre todas las APIs del Boson. Para obtener más información, consulte la documentación de ZenScript.

Las cadenas con espacio de nombres se representan como instancias de `NameSpacedString`, entre todas las APIs del Boson. Para más información sobre cómo obtener estas cadenas, consulte la siguiente sección.

## `NameSpacedString` Documentación
La clase `NameSpacedString` reside en el paquete `net.thesilkminer.mc.boson.zen.naming`.

### Creando una nueva instancia
Hay dos maneras de crear un `NameSpacedString`: usando el método de fábrica o lanzando una `cadena`.

El método de fábrica es el enfoque propuesto. Debido a que es un método estático, puede ser invocado directamente en la instancia de la clase . La siguiente es la firma del método y un ejemplo de su uso:

```zenscript
function from(nameSpace as string?, path as string) as NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // equivalente a minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // utiliza el namespace predeterminado 'minecraft'
```

La manera de lanzar depende en su lugar de un cast explícito de una cadena `` a una `NameSpacedString` usando el `como` operador en ZenScript:

```zenscript
"minecraft:iron_ingot" como NameSpacedString;
```

### Propiedades
Un `NameSpacedString` proporciona acceso de solo lectura a su namespace y a su ruta a través de propiedades:

| Nombre de Propiedad  | Tipo     | Descripción                                                                                   |
| -------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `espacio del nombre` | `cadena` | Obtiene la porción del espacio de nombres de la `NameSpacedString` (por ejemplo, `minecraft`) |
| `ruta`               | `cadena` | Obtiene la porción de ruta de la `NameSpacedString` (por ejemplo, `iron_ingot`)               |

### Métodos

#### `asString`
Un `NameSpacedString` puede convertirse de nuevo en una cadena de texto `regular` usando el método `asString`. Lo siguiente es la firma del método y un ejemplo de su uso:

```zenscript
function asString() como cadena;
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // Imprime 'minecraft:iron_ingot' en el registro
```
