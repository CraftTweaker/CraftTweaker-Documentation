# ZenAnnotation

Un ZenAnnotation puede ser dado a una clase o a sus métodos para exponerlo a ZenScript

## Anotaciones de clase

Estas anotaciones se pueden dar a ZenClasses

| Anuncio                                                                  | Valor                                                                                                            | Target | Información                                                                                     |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | Nombre de la Clase Zen(por ejemplo, `crafttweaker.item.IItemStack`), puede diferir del nombre formal de la clase | Clase  | El nombre debe ser único                                                                        |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Nombre ZenType ampliado (por ejemplo, `crafttweaker.item.IItemStack`)                                            | Clase  | El nombre debe existir ya (no puedes extender algo inexistente)                                 |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                                  | Clase  | Utilizado para registrar automáticamente la clase o expansión                                   |
| [`@Lista Iterable`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Nombre de la Clase Zen del Tipo Iterable (por ejemplo, `crafttweaker.mods.IMod`)                                 | Clase  | La clase debe ser asignable a `Iterable<Type>`                                            |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Nombre de ZenClass del tipo y clave Iterable (por ejemplo, `string`, `crafttweaker.item.ItemStack`)              | Clase  | La clase debe ser asignable a `Lista<Type>`                                               |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Nombre de la Clase Zen del Tipo Iterable (por ejemplo, `crafttweaker.mods.IMod`)                                 | Clase  | La clase debe ser asignable a `Mapa<KeyType, ValueType>`                                  |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Prioridad del Manejador de Bracket (p. ej., `prioridad = 19`)                                                    | Clase  | La clase debe ser asignable a `IBracketHandler`                                                 |
| [`Solo @ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)          | El nombre del mod requerido (`isModLoaded(annotation.getValue())` necesita pasar a true)                         | Clase  | Utilizado en combinación con [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Parámetros de anotaciones

Estas anotaciones se pueden dar a los parámetros del método

| Anuncio                                                      | Target    | Información                                                                                         |
| ------------------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------- |
| `@NotNull`                                                   | Parámetro | Nada (NYI)                                                                                          |
| [`@Opcional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Parámetro | Denota un parámetro como opcional. Parámetros opcionales pueden ser omitidos al llamar a la función |

## Anotaciones de métodos

Estas anotaciones se pueden dar a los métodos (estáticos y no estáticos)

| Anuncio                                                                    | Valor                                                                                         | Target |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                                               | Método |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [Tipo de Operador](/Dev_Area/ZenOperators/)                                                   | Método |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nombre de getter (por ejemplo, "name") si se omite, se utilizará el nombre del método sin ()  | Método |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nombre del setter (por ejemplo, "name") si se omite, se utilizará el nombre del método sin () | Método |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                               | Método |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                               | Método |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                                               | Método |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                                               | Método |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | La información adicional del método para `dumpZS`                                             | Método |

## Anotaciones de campo

Estas anotaciones se pueden dar a los campos públicos (estáticos y no estáticos)

| Anuncio                                                | Target | Información                         |
| ------------------------------------------------------ | ------ | ----------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Campo  | Combina `@ZenSetter` y `@ZenGetter` |