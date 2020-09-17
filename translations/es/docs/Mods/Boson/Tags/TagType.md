# `TagType`

Un `TagType` identifica el tipo de elementos que se pueden almacenar dentro de un [`Tag`](/Mods/Boson/Tags/Tag/) dado. También alberga algunos datos adicionales de solo lectura que identifica un cierto conjunto de mnemonics que ayudan a identificar un tipo de una manera más amigable para el ser humano.

## Detalles de la clase
La clase está situada en el paquete `net.thesilkminer.mc.boson.zen.tag` , haciendo que `net.thesilkminer.mc.boson.zen.tag.TagType` su nombre completo para importar.

## Crear una nueva instancia
No es posible crear una nueva instancia de un tipo de etiqueta cruda de CraftTweaker. Sin embargo, es posible obtener el tipo de una `etiqueta` dada a través de sus propiedades. Consulte la documentación de [para la etiqueta ``](/Mods/Boson/Tags/Tag/) para más información.

### Instancias conocidas `TagType`
Boson por defecto ya crea un cierto conjunto de tipos de etiquetas, que puede utilizarse en [manejadores de corchetes](/Mods/Boson/Tags/BracketHandler/) para obtener instancias de `Tag`s o `TagIngredient`s. Estas mnemonicas están escritas en la tabla que sigue:

| Mnemónico | Objetos almacenados                                 |
| --------- | --------------------------------------------------- |
| `bloques` | [`Estado de IBlock`](/Vanilla/Blocks/IBlockState/)  |
| `fluidos` | (no accesible actualmente a través de CraftTweaker) |
| `objetos` | [`IItemStack`](/Vanilla/Items/IItemStack/)          |

## Propiedades
Un `TagType` proporciona acceso de solo lectura a un determinado conjunto de propiedades, como se describe en la siguiente tabla:

| Nombre de Propiedad    | Tipo                                                                  | Descripción                                                                                       |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `directoryName`        | `cadena`                                                              | Nombre del directorio donde las etiquetas JSONs están en un paquete de datos                      |
| `nombre`               | `cadena`                                                              | Mnemónico que identifica el tipo de etiqueta dado; usado en manejadores de corchetes de etiquetas |
| `classType`            | [`Clase`](/Mods/Boson/Reflection/Class/)                              | Tipo de objetos almacenados en la etiqueta                                                        |
| `función convertidora` | [`Función<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Convierte nombres en elementos de etiquetas                                                       |
