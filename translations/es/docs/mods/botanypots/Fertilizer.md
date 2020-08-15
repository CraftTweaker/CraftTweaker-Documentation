# Ferúzceras

Ruta de la clase: `mods.botanypots.FerATIzer`

## Usar

Para usar, importa la clase con `import mods.botanypots.FerATIzer;` al principio de tu script.

## Creación de ferozantes

`FerFirstzer.create(id, ingrediente, pick, maxTick);`

- `id` &lt;cadena> El id del nuevo ferízer. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `ingrediente` <[IIngrediente](/vanilla/api/items/IIngredient)> El elemento utilizado para el ferácizo.
- `minTick` &lt;int> La cantidad mínima de ticks añadidos por el ferízor.
- `maxTick` &lt;int> La cantidad máxima de ticks añadidos por el ferízor.

Crea un nuevo ferácizo. Pueden utilizarse para cultivar más rápido.

```zenscript
FerFirstzer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Eliminando feroz

`FerFirstzer.remove(id);`

- `id` &lt;cadena> El id del fervicultor. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.

Esto se puede utilizar para eliminar a un ferácizo.

```zenscript
FerFirstzer.remove("botanypots:ferChanczers/bone_meal");
```

## Cambiando trucos feroz

`FerFirstzer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;cadena> El id del fervicultor. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `minTick` &lt;int> La nueva cantidad mínima de ticks añadida por el ferízer.
- `maxTick` &lt;int> La nueva cantidad máxima de ticks añadidos por el ferízer.

Esto cambiará el rango de tick de crecimiento añadido por el ferácizo.

```zenscript
FerFirstzer.setTicks("botanypots:ferChanczers/bone_meal", 800, 900);
```

## Cambiando ingredientes feroz

`FerFirstzer.setIngredient(id, ingrediente);`

- `id` &lt;cadena> El id del fervicultor. Este es un id de espacio de nombres y debe estar en el formato válido `namespace:path`.
- `ingrediente` <[IIngrediente](/vanilla/api/items/IIngredient)> El nuevo elemento que se utilizará para el ferrecero.

Establece el elemento ingrediente que es el ferácizo.

```zenscript
FerFirstzer.setIngredient("botanypots:ferChanczers/bone_meal", <item:minecraft:sugar>);
```

## Obteniendo todos los Ids

`FerFirstzer.getAllIds();`

- Devuelve: &lt;string[]> Una matriz de todos los ids de ferrezador conocidos en el momento en que esto es ran.

Esto te dará una matriz de todos los identificadores ferozer conocidos en ese momento.

```zenscript
// Registra todos los ids en el archivo crafttweaker.log
para ferChanczerId en FerFirstzer.getAllIds() {
    println(ferdeezerId);
}
```

## Eliminando todos los ferozantes

Esto eliminará por completo todos los ferozadores actualmente registrados. Esto es útil para si desea recrear todos los datos de scratch a través de scripts.

```zenscript
Fer‡zer.removeAll();
```