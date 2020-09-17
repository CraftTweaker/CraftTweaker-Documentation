### Clase

```zenscript
importar mods.roots.Flower.th;
```

#### Métodos

```zenscript
void removeRecipe(
  nombre de cadena // El nombre de la receta que desea eliminar
);
```

* * *

```zenscript
anular addRecipeBlockState(
  nombre de cadena, // El nombre de la receta que estás agregando
  estado de IBlockState // El estado del bloque de la flor
);
```

* * *

```zenscript
void addRecipeBlock(
  nombre de cadena, // El nombre de la receta que estás añadiendo
  bloque IBlock, // El bloque de la flor a ser colocado
  int meta // El meta del estado del bloque de flores
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.Flower th;

// Elimina la receta por defecto para el león
Flower.removeRecipe("dandelion");

// Añade una flor blanca de Botania usando el estado del bloque
Flowercth. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Añade una flor magenta de Botania usando el bloque + meta
Flower.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Notas

Actualmente no se ha probado con flores de doble altura.