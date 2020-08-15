# El ladrón del corchete

El Bracket Handler es la única manera de obtener una etiqueta.

## Síntesis
La sintaxis de este manejador de soportes es extremadamente fácil de seguir, y al mismo tiempo permite una gran variedad de posibilidades en las que debería ser devuelta por el manejador de corchetes.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

En el fragmento de código de arriba, las partes en todos los mayúsculas son los bits personalizables por el desarrollador y representan el objetivo que será devuelto.

`TYPE` identifica el [tipo de etiqueta](/Mods/Boson/Tags/TagType/) que se creará. El tipo debe ser uno de los mnemónicos que identifiquen un tipo de etiqueta. Consulte la página enlazada para ver una lista de tipos de etiquetas válidos.

`NAMESPACE` identifica el espacio del nombre de una etiqueta, es decir, el ID del mod que posee la etiqueta. In most cases, the namespace will be either `forge` or `minecraft`, but it is also possible to use other name spaces, e.g. for mod-specific tags.

`NAME` representa el nombre de la etiqueta que debe ser obtenida.

Consulte la sección Comportamiento para saber qué regresa este manejador de brazos.

## Comportamiento
Diferentemente de otros manejadores de brazos presentes en CraftTweaker, el comportamiento de este manejador de corchetes difiere de acuerdo al cual el cargador está procesando el script en el que se encuentra el manejador de corchetes.

### El cargador de etiquetas ``
Si el manejador de corchetes es referenciado en un script cargado por el cargador [`tags`](/Mods/Boson/Loaders/Tags/), devolverá un [`Etiqueta`](/Mods/Boson/Tags/Tag/). Esto permite la manipulación de los elementos que están contenidos en la etiqueta misma. Consulte la documentación de la clase para obtener más información.

### El cargador de `preinit`
Si el manejador de corchetes es referenciado en un script cargado por el cargador `preinit` , lanzará una excepción, ya que las etiquetas se cargan más tarde en el ciclo de vida de Minecraft, es decir, justo antes de que se registren las recetas.

### Cada otro cargador
Si el manejador de corchetes es referenciado en un script cargado por cualquiera de los otros cargadores, incluyendo el predeterminado `recipeevent` uno, entonces devolverá un [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/). Esto no permite manipular el contenido de la etiqueta, pero permite que la etiqueta se utilice en recetas y otros métodos invocaciones que requieren una instancia de [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) como parámetro.

## Uso de ejemplo

Este primer ejemplo demuestra el uso de un `TagIngredient` para añadir una nueva receta. Tenga en cuenta el uso de la etiqueta `items` tipo :

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recetas.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

Este segundo ejemplo muestra la manipulación de una `Etiqueta` de tipo `bloques`:

```zenscript
#loader tags
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" as NameSpacedString);
```
