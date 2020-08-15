### Clase

```zenscript
importar mods.roots.Ritual;
```

#### Métodos

```zenscript
anular modifyRitual(
  nombre de cadena, // el nombre del ritual cuyos ingredientes desea modificar
  entradas IIngredient[] // una lista de cinco ingredientes (no más, ni menos)
);
```

* * *

### Ejemplos

```zenscript
importar mods.roots.Ritual;

// Cambia los ingredientes necesarios para realizar el ritual de la pared de viento
Ritual. odifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <roots:cloud_berry> , <minecraft:web>]);
```