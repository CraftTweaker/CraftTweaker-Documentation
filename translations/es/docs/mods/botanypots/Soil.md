# Suelo

Ruta de la clase: `mods.botanypots.Soil`

## Use

Para usar, importa la clase con `import mods.botanypots.Soil;` al inicio de tu script.

## Creando Nuevos Suelos

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;string> El ID del nuevo suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> El ingrediente usado para determinar que elementos/bloques son usados para colocar el suelo en una maceta.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar para el suelo en la maceta.
- `tickRate` &lt;int> La tasa de tick para el suelo.
- `categories` &lt;string[]> Una colección de categorías asociadas con el nuevo suelo.

Crea una nueva entrada de suelo que los jugadores pueden usar en la maceta botánica.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## Removiendo Un Suelo

`Soil.remove(id);`

- `id` &lt;cadena> El ID del suelo a remover. This is a namespaced id an must be in the valid `namespace:path` format.

Remueve un suelo de los datos del juego.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Cambiando la Tasa de Tick del Suelo

`Soil.setTicks(id, tickRate);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `tickRate` &lt;int> La nueva tasa de tick para el suelo.

Cambia la tasa de tick de un suelo determinado.

```zenscript
Soil.setTicks("botanypots:soil/grass", 1300);
```

## Cambiando el Ingrediente del Suelo

`Soil.setIngredient(id, ingredient);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> El ingrediente usado para determinar que elementos/bloques son usados para colocar el suelo en una maceta.

Changes the items used to put the soil into the botany pot.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Changing Soil Display

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar para el suelo en la maceta.

Changes the block displayed for the soil.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Changing Soil Categories

Changes the categories associated with the soil. These are used to match crops to valid soils.

### Add a Category to a Soil

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToAdd` &lt;string[]> An array of categories to associate with the soil.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Remove a Category From a Soil

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.
- `categoriesToRemove` &lt;string[]> An array of categories to dissociate with the soil.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Clear All Categories From a Soil

`Soil.clearCategories(id);`

- `id` &lt;string> El ID del suelo. This is a namespaced id an must be in the valid `namespace:path` format.

```zenscript
Soil.clearCategories("botanypots:soil/farmland");
```

## Getting All Ids

`Soil.getAllIds();`

- Returns: &lt;string[]> An array of all known soil ids at the time this is ran.

This will give you an array of all the known soil ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Removing All Soil

This will completely remove all the soils currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Soil.removeAll();
```
