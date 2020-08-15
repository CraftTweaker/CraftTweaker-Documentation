# `Clase nativa`

Una `NativeClass` identifica la instancia de una clase del entorno backend que está detrás de ZenScript. En el caso de CraftTweaker, `NativeClass` representa por lo tanto una clase Java.

## Detalles de la clase
La clase está situada en el paquete `zenscriptx.reflect` , convirtiendo `zenscriptx.reflect.NativeClass` en el nombre cualificado para importar.

## Crear una nueva instancia
La única forma posible de crear una nueva instancia de `NativeClass` es a través de uno de los dos métodos estáticos, que toma o el nombre de la clase o un objeto a inspeccionar. El snippe que sigue muestra las firmas de los dos métodos que pueden utilizar:

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Ambos métodos están permitidos para retornar `null` (como se muestra en `?` al final del tipo) porque existe la posibilidad de que algunas clases no existan o no tengan una contraparte del backend. De hecho, algunos arreglos asociativos en particular pueden ser no representables en el backend y requieren que algunos arreglos se utilicen correctamente.

Los siguientes son algunos ejemplos del uso de los dos métodos de fábrica:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # devuelve la clase nativa con el nombre dado
NativeClass. romZen(<blockstate:minecraft:pumpkin>); # devuelve la clase NativeClass que coincide con la clase IBlockState de ZenScript
NativeClass. yName("123"); # devuelve null porque no puede existir ninguna clase nativa con ese nombre
```

## Propiedades
Una `NativeClass` proporciona acceso de solo lectura a un determinado conjunto de propiedades, como se describe en la siguiente tabla:

| Nombre de Propiedad | Tipo     | Descripción                                                                                                                                                                   |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`        | `cadena` | Nombre "Más corto" que se puede utilizar para referirse a la clase (por ejemplo, `ItemStack` para `el más crafttweaker. pi.item.ItemStack`, `String` para `java.lang.String`) |
| `nombre calificado` | `cadena` | Nombre completo que identifica esta clase de forma única en el entorno del backend (por ejemplo, `crafttweaker.api.item.ItemStack` o `java.lang.String`)                      |

## Métodos
`NativeClass` también proporciona acceso a un único método que permite la conversión al equivalente de ZenScript (consulte [`Clase`](/Mods/Boson/Reflection/Class/) para más información). La firma del método es la siguiente:

```zenscript
function toClass() como Class?;
```

El método puede devolver `null` ya que no todas las clases nativas pueden tener una representación en ZenScript. De hecho, hay algunas partes del backend que no están expuestas a usuarios de ZenScript, como `org.apache.commons. ang3.BitField`, que por lo tanto no puede ser representado a través de un objeto de ZenScript `Class`.
