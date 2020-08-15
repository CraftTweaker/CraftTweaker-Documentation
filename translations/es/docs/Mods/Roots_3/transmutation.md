### Clase

```zenscript
importar mods.roots.Transmutation;
```

#### Métodos

```zenscript
void removeRecipe(
  nombre de cadena // el nombre de la receta que está siendo eliminada
);
```

* * *

```zenscript
anular addBlockToBlockRecipe(
  nombre de cadena, // el nombre de la receta que se está añadiendo (debe ser único)
  IBlockState state1, // el estado inicial del bloque como se define como un estado de bloque
  estado IBlockState 2 // el estado que el estado inicial debe ser convertido en
);
```

* * *

```zenscript
anular addBlockToItemRecipe(
  nombre de cadena, // el nombre de la receta que se está añadiendo (debe ser único)
  Estado del IBlockState, // el estado inicial que se busca cuando se convierte (como un estado de bloque)
  IItemStack pila // la pila de elementos que sustituye el estado de bloque
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.Transmutation;

// Elimina la receta predeterminada de caldera de agua de mar a melon
Transmutation.removeRecipe("pumpkin_melon");

// Añade una receta que convierte la piedra final en bloques óseos
Transmutación. ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>, <blockstate:minecraft:bone_block:axis=y> );

// Añade una receta que convierte la hierba alta por defecto en bolas de nieve
Transmutación. ddBlockToItemReccipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### Notas

**Nota: las funciones de estado complejas no son actualmente accesibles a través de CraftTweaker (es decir, comprobar alrededores).**

Es posible encontrar la información sobre el bloque y sus variantes y estados usando la funcionalidad de depuración de F3 y apuntando a él. En el lado derecho de la pantalla se mostrará el nombre del registro del bloque, y luego cualquier estado debajo de eso.

Por ejemplo, `hueso_bloque` tiene lo siguiente:

    ejes: y

Esto puede convertirse en un estado de bloqueo reemplazando la `:` por `=` así: `eje=y`, lo que significa que el estado de bloque final (para un bloque de huesos hacia arriba) sería `<blockstate:minecraft:bone_block:axis=y>`.