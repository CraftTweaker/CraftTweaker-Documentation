# `Clase`

Una clase `` identifica una única instancia de un tipo que está expuesta a ZenScript. Almost everything in ZenScript is, in fact, an instance of a class, be it an `IItemStack` (which is an instance of that class) or an array of strings (which is an instance of `string[]`).

## Detalles de la clase
La clase está situada en el paquete `zenscriptx.reflect` , convirtiendo `zenscriptx.reflect.Class` en el nombre completamente calificado para importar.

## Crear una nueva instancia
La única forma posible de crear una nueva instancia de `Class` es a través de uno de los dos métodos estáticos, que toma el nombre de la clase o un objeto para inspeccionar. El snippe que sigue muestra las firmas de los dos métodos que pueden ser utilizados:

```zenscript
function byName(name as string) as Class?;
function from(instance as any) as Class?;
```

Ambos métodos están permitidos para retornar `null` (como se muestra en `?` al final del tipo) porque existe la posibilidad de que algunas clases no tengan un equivalente de ZenScript o sean literalmente incapaces de representarse como instancias de `Clase`.

Los siguientes son algunos ejemplos del uso de los dos métodos de fábrica:

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # devuelve una clase que representa la clase
ItemStack. rom(<blockstate:minecraft:pumpkin>); # devuelve una clase que representa la clase IBlockState
Class. yName("123"); # devuelve null porque no existe ninguna clase con ese nombre (o puede existir, para el caso)
```

## Propiedades
Una clase `` proporciona acceso de solo lectura a un determinado conjunto de propiedades, como se describe en la siguiente tabla:

| Nombre de Propiedad | Tipo     | Descripción                                                                                                                                                     |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`        | `cadena` | Nombre "Más corto" que se puede utilizar para referirse a la clase (por ejemplo, `ItemStack` para `el más crafttweaker. tem.ItemStack`, `cadena` para `cadena`) |
| `nombre calificado` | `cadena` | Nombre completo que identifica esta clase de forma única en el entorno ZenScript (por ejemplo, `crafttweaker.item.IItemStack` o `string`)                       |

## Métodos
`Class` también proporciona acceso a un único método que permite la conversión al equivalente "nativo" (consulte [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) para más información). La firma del método es la siguiente:

```zenscript
function toNativeClass() como NativeClass?;
```

El método puede retornar `null` porque no todos los tipos de ZenScript pueden tener un equivalente nativo, p. ej. ciertos arreglos asociativos pueden no estar perfectamente representados en un entorno nativo, lo que requiere cierta manipulación.
