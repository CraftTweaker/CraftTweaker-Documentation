### Clase

```zenscript
importar mods.arcanearchives.GCT;
```

#### Métodos

```zenscript
void addRecipe(
  nombre de cadena, // nombre de la receta
  Salida de ItemStack, // la salida como una pila de item
  entradas IIngredient[] // las entradas como una matriz de ingredientes
);
```

* * *

```zenscript
vacía removeRecipe(
  Salida de ItemStack // la pila de elementos de salida a ser eliminada (la cantidad debe coincidir)
);
```

* * *

```zenscript
anular receta de reemplazo(
  nombre de cadena, // el nombre de la receta (debe existir ya)
  Salida de ItemStack, // la salida como una pila de item
  entradas IIngredient[] // las entradas como una matriz de ingredientes
);
```

* * *

### Ejemplos

```zenscript
import mods.arcanearchives.GCT;

// Elimina la receta para el polvo radiante
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Añade una nueva receta para el polvo radiante
GCT. ddRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Reemplaza la receta de cuarzo brillante en forma sin desordenar la pantalla GCT
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```