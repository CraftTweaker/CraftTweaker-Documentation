# Soils

Ruta de la clase: `mods.botanypots.Soil`

## Usar

Para usar, importa la clase con `import mods.botanypots.Soil;` al principio de tu script.

## Creando nuevos suelos

`Soil.create(id, ingrediente, displayState, tickRate, categorías);`

- `id` &lt;cadena> El id del nuevo suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `ingrediente` <[IIngrediente](/vanilla/api/items/IIngredient)> El ingrediente utilizado para determinar qué artículos/bloques se utilizan para colocar la tierra en una maceta.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar en el suelo de la maceta.
- `tarifa de tickRate` &lt;int> La tarifa de tick para el suelo.
- `categories` &lt;string[]> Una matriz de categorías asociadas con el nuevo suelo.

Crea una nueva entrada al suelo que los jugadores pueden usar en la poza de botanía.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## Eliminando un suelo

`Suelo.remove(id);`

- `id` &lt;cadena> El id del suelo a remover. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.

Elimina un suelo de los datos del juego.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Cambio de Tick de suelo

`Soil.setTicks(id, tickRate);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `tickRate` &lt;int> La nueva tasa de tick para el suelo.

Cambia la tasa de garrapatos de un suelo determinado.

```zenscript
Soil.setTicks("botanypots:suelo/hierba", 1300);
```

## Cambiando el ingrediente del suelo

`Suelo.setIngredient(id, ingrediente);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `ingrediente` <[IIngrediente](/vanilla/api/items/IIngredient)> El ingrediente utilizado para determinar qué artículos/bloques se utilizan para colocar la tierra en una maceta.

Cambia los objetos utilizados para colocar la tierra en la maceta de botanía.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Cambiando pantalla de suelo

`Soil.setDisplayState(id, displayState);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> El estado del bloque a mostrar en el suelo de la maceta.

Cambia el bloque mostrado para el suelo.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Cambiando las categorías del suelo

Cambia las categorías asociadas con el suelo. Estos se utilizan para combinar los cultivos con los suelos válidos.

### Añadir una categoría a un suelo

`Soil.addCategory(id, categoríasToAñadir);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `categoriesToAdd` &lt;cadena[]> Un array de categorías para asociar con el suelo.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["bother"]);
```

### Quitar una categoría de un suelo

`Soil.removeCategory(id, categoríasToRemove);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `categoriesToRemover` &lt;cadena[]> Un array de categorías para disociar con el suelo.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Borrar todas las categorías de un suelo

`Suelo.clearCategories(id);`

- `id` &lt;cadena> El id del suelo. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.

```zenscript
Soil.clearCategories("botanypots:suelo/granja");
```

## Obteniendo todos los Ids

`Soil.getAllIds();`

- Devuelve: &lt;string[]> Una matriz con todos los ids de suelo conocidos en el momento en que esto es ran.

Esto le dará una variedad de todos los identificadores de tierra conocidos en ese momento.

```zenscript
// Registrar todos los ids en el archivo crafttweaker.log
para soilId en Soil.getAllIds() {
    println(soilId);
}
```

## Eliminando todo el suelo

Esto eliminará completamente todos los suelos actualmente registrados. Esto es útil para si desea recrear todos los datos de scratch a través de scripts.

```zenscript
Suelo.removeTo();
```
