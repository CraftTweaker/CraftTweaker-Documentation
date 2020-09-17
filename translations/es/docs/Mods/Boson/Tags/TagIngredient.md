# `TagIngrediente`

Un `TagIngredient` es una implementación `IIngrediente` que le permite usar un [`Tag`](/Mods/Boson/Tags/Tag/) en recetas. Solo puede acceder a estos datos desde fuera del cargador de etiquetas [``](/Mods/Boson/Loaders/Tags/). Para más información sobre las etiquetas y cómo obtenerlas, consulte [esta página](/Mods/Boson/Tags/Concept/).

## Detalles de la clase
La clase está situada en el paquete `net.thesilkminer.mc.boson.zen.tag` , haciendo que `net.thesilkminer.mc.boson.zen.tag.TagIngredient` su nombre completamente calificado para importar.

## Crear una nueva instancia
Consulte [la documentación del manejador de corchetes](/Mods/Boson/Tags/BracketHandler/).

## `IIngredientes`
Puesto que `TagIngredient` es un `IIngrediente`, proporciona acceso a todas las propiedades y métodos de esa interfaz. Consulte a [`la página de documentación de IIngredient`](/Vanilla/Variable_Types/IIngredient/) para más detalles. Esta página de documentación solo describe las adiciones y rarezas que son particulares de esta clase.

## Propiedades
Un `TagIngredient` proporciona acceso de solo lectura a un conjunto adicional de propiedades, como se describe en la siguiente tabla:

| Nombre de Propiedad | Tipo                                        | Descripción                                                            |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| `tagName`           | [`NombreEspacioCadena`](/Mods/Boson/Names/) | Nombre que identifica la etiqueta a la que se refiere este ingrediente |

## Ejemplo

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
