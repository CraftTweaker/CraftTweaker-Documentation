### Clase

```zenscript
importar mods.roots.Bark;
```

#### Métodos

```zenscript
void addRecipe(
  nombre de cadena, // el nombre de la receta
  ItemStack woodLog, // el itemstack equivalente al registro de madera roto
  ItemStack corteza // el itemstack del tipo de corteza que este registro produce (incluyendo el contador de pila)
);
```

* * *

```zenscript
vacíe removeRecipe(
  ItemStack corta // la pila de elementos del tipo de corteza a eliminar (excluyendo tamaño de pila de tamaño)
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.Bark;

// producirá 2 arenas de un bloque de melon roto por un cuchillo.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// Elimina la corteza de madera salvaje de la lista predeterminada
Bark.removeRecipe(<roots:bark_wildwood>);
```