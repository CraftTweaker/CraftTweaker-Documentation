# Cultivos

Ruta de la clase: `mods.botanypots.Crop`

## Usar

Para usar, importa la clase con `import mods.botanypots.Crop;` al principio de tu script.

## Crear un recorte

`Crop.create(id, semilla, pantalla, tickRate, categorías);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `semilla` <[IIngrediente](/vanilla/api/items/IIngredient)> El objeto utilizado para plantar el cultivo.
- `mostrar` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El bloque a mostrar al procesar el recorte.
- `tasa de tickrate` &lt;int> Uno de los factores para cuánto tarda un cultivo en crecer.
- `categories` &lt;string[]> Un arreglo de categorías del suelo en las que se puede cultivar este cultivo.

Esto se puede utilizar para crear un nuevo cultivo. Ten en cuenta que las gotas deben ser añadidas por separado.

```zenscript
Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## Eliminar un recorte

`Crop.remove(id);`

- `id` &lt;cadena> El id del recorte a eliminar. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.

Elimina un cultivo basado en su id.

```zenscript
Crop.remove("botanypots:crop/trigo");
```

## Establecer elemento de semilla

`Semilla de cultivo(id, semilla);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `semilla` <[IIngrediente](/vanilla/api/items/IIngredient)> El objeto utilizado para plantar el cultivo.

Establece el objeto usado para plantar el cultivo.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## Establecer Bloque de Pantalla

`Crop.setDisplay(id, estado);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `mostrar` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El bloque a mostrar al procesar el recorte.

Establece el bloque renderizado para el recorte.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Establecer tasa de timbre

`Crop.setTickRate(id, tickRate);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `tasa de tickRate` &lt;int> La tasa de tick actualizada. Uno de los factores para el tiempo que tarda un cultivo.

Establece el factor de ticks de cultivo.

```zenscript
Crop.setTickRate("botanypots:crop/trigo", 5000);
```

## Cambiando categorías de cultivos

Cambia las categorías asociadas con el cultivo. Las categorías se utilizan para hacer coincidir los suelos válidos con el cultivo.

### Añadir una categoría a un recorte

`Crop.addCategory(id, categoríasToAñadir);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `categoriesToAdd` &lt;cadena[]> Un array de categorías para asociar con el recorte.

```zenscript
Categoría("botanypots:crop/trigo", ["piedra", "nieve"]);
```

### Quitar una categoría de un recorte

`Crop.removeCategory(id, categoríasToRemove);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `categoriesToRemover` &lt;cadena[]> Un array de categorías para disociar con el recorte.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Borrar todas las categorías de un recorte

`Crop.clearCategories(id);`

- `id` &lt;cadena> El id del recorte. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.

```zenscript
Crop.clearCategories("botanypots:crop/trigo");
```

## Recortar gotas

### Añadiendo Srops

`Crop.addDrop(id, gota, oportunidad, min, max);`

- `id` &lt;cadena> El id del recorte al que añadir una caída. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `soltar` <[ItemStack](/vanilla/api/items/IItemStack)> El objeto a soltar.
- `oportunidad` &lt;flotar> La probabilidad de que caiga.
- `min` &lt;int> La cantidad mínima de ese artículo a dar.
- `máximo` &lt;int> La cantidad máxima de ese elemento a dar.

Esto añade una nueva caída potencial al cultivo.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Eliminando gotas

`Crop.removeDrop(id, toRemove);`

- `id` &lt;cadena> El id del recorte del que se eliminará una gota. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `toRemove` <[IIngrediente](/vanilla/api/items/IIngredient)> El ingrediente contra el que coincidir para su eliminación

Elimina cualquier gota que tenga un objeto coincidente.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Obteniendo todos los Ids

`Crop.getAllIds();`

- Devuelve: &lt;string[]> Una matriz con todos los ID de recorte conocidos en el momento en que esto se ejecute.

Esto te dará una matriz de todos los cultivos conocidos en ese momento.

```zenscript
// Registrar todos los ids en el archivo crafttweaker.log
para cropId en Crop.getAllIds() {
    println(cropId);
}
```

## Eliminando todos los cultivos

Esto eliminará por completo todos los cultivos actualmente registrados. Esto es útil para si desea recrear todos los datos de scratch a través de scripts.

```zenscript
Eliminar todo();
```
