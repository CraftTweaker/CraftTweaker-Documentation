### Clase

```zenscript
importar mods.roots.RunicShears;
```

#### Métodos

```zenscript
vacía addRecipe(
  nombre de cadena, // el nombre de la receta que se está creando
  ItemStack outputDrop, // la salida de artículo obtenida al procesar el ItemStack
  reemplazo de ItemStack, // el bloque (como una pila de items) que reemplaza el bloque con el que se interactúa al cortar
  ItemStack inputBlock, // el bloque que debe ser cortado
  ItemStack jeiDisplayItem // el objeto que debe ser mostrado en JEI para esta receta
);
```

* * *

```zenscript
anular añadidoEntityRecipe(
  nombre de cadena, // el nombre de la receta para el esquilmado
  ItemStack outputDrop, // el elemento que es soltado al fragmentar la entidad especificada
  entidad IEntityDefinition // la entidad que va a ser cortada para obtener el tiempo de enfriamiento de int
  // el número de ticks (segundos multiplicados por 20) toma hasta que la entidad puede ser esparcida de nuevo
);
```

* * *

```zenscript
anular removeRecipe(
  Salida ItemStack // la salida del pila de elementos que desea eliminar
);
```

* * *

### Ejemplos

```zenscript
importar mods.roots. unicShears;

// Crea una receta que obtiene la verruga de los ladrillos rojos
// y luego convierte los ladrillos en ladrillos normales
RunicShears. ddRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Crea una receta que obtiene huevos de pollos con un enfriamiento de 2 minutos
RunicShears. ddEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Elimina todas las recetas (ambas entidades & bloque) que dan cuero fey
Tijeras. emoveRecipe(<roots:fey_leather>);
```

### Notas

Ten en cuenta que la función `removeRecipe` intentará remover cualquier receta (tanto el esparcimiento rónico de bloques como de entidades) que coincida con la salida deseada.