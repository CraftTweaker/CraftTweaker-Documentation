# Suelo

Ruta de la clase: `mods.botanypots.Soil`

## Use

Para usar, importa la clase con `import mods.botanypots.Soil;` al inicio de tu script.

## Creando Nuevos Suelos

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;string> El ID del nuevo suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> El ingrediente usado para determinar que elementos/bloques son usados para colocar el suelo en una maceta.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar para el suelo en la maceta.
- `growthModifier` &lt;float> Modifies the time a crop takes to grow. 1f = instant growth. 0 = normal growth. -1f = never grows. 0.15 = 15% faster, -0.15 = 15% slower.
- `categories` &lt;string[]> Una colección de categorías asociadas con el nuevo suelo.

Crea una nueva entrada de suelo que los jugadores pueden usar en la maceta botánica.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## Removiendo Un Suelo

`Soil.remove(id);`

- `id` &lt;cadena> El ID del suelo a remover. This is a namespaced id an must be in the valid `namespace:path` format.

Remueve un suelo de los datos del juego.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Changing Soil Growth Modifier

`Soil.setGrowthModifier(id, tickRate);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `growthModifier` &lt;float> Modifies the time a crop takes to grow. 1f = instant growth. 0 = normal growth. -1f = never grows. 0.15 = 15% faster, -0.15 = 15% slower.

Changes the growth modifier of a given soil.

```zenscript
Soil.setGrowthModifier("botanypots:soil/grass", 0.15);
```

## Cambiando el Ingrediente del Suelo

`Soil.setIngredient(id, ingredient);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> El ingrediente usado para determinar que elementos/bloques son usados para colocar el suelo en una maceta.

Cambia los objetos utilizados para colocar el suelo en la maceta botánica.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Cambiando la Visualización del Suelo

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar para el suelo en la maceta.

Cambia el bloque mostrado para el suelo.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Cambiando las Categorías del Suelo

Cambia las categorías asociadas con el suelo. Estos se utilizan para combinar cultivos con suelos válidos.

### Añadir una Categoría a un Suelo

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToAdd` &lt;string[]> Una colección de categorías para asociar con el suelo.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Quitar una Categoría de un Suelo.

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToRemove` &lt;string[]> Una colección de categorías para desasociar con el suelo.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Borrar Todas las Categorías de un Suelo

`Soil.clearCategories(id);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.

```zenscript
Soil.clearCategories("botanypots:soil/farmland");
```

## Getting All Ids

`Soil.getAllIds();`

- Devuelve: &lt;string[]> Una colección de todos los IDs de suelo conocidos en el momento que esto es ejecutado.

Esto te dará una colección de todos los IDs de suelo conocidos en ese momento.

```zenscript
// Log all ids to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Eliminar Todos los Suelos

Esto eliminará completamente todos los suelos actualmente registrados. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Soil.removeAll();
```
