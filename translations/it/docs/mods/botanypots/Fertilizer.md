# Fertilizzanti

Percorso classe: `mods.botanypots.Fertilizer`

## Uso

Per usare, importa la classe con `import mods.botanypots.Fertilizer;` all'inizio del tuo script.

## Creare Fertilizzanti

`Fertilizer.create(id, ingredient, minTick, maxTick);`

- `id` &lt;string> L'id del nuovo fertilizzante. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> L'elemento usato per il fertilizzante.
- `minTick` &lt;int> Il quantitativo minimo di tick aggiunti dal fertilizzante.
- `maxTick` &lt;int> Il quantitativo massimo di tick aggiunti dal fertilizzante.

Crea un nuovo fertilizzante. These can be used to grow crops faster.

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Removing Fertilizers

`Fertilizer.remove(id);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.

This can be used to remove a fertilizer.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Changing Fertilizer Ticks

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.
- `minTick` &lt;int> The new minimum amount of ticks added by the fertilizer.
- `maxTick` &lt;int> The new maximum amount of ticks added by the fertilizer.

This will change the growth tick range added by the fertilizer.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Changing Fertilizer Ingredients

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;string> The id of the fertilizer. This is a namespaced id an must be in the valid `namespace:path` format.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The new item to be used for the fertilizer.

Sets the ingredient item that is the fertilizer.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Getting All Ids

`Fertilizer.getAllIds();`

- Returns: &lt;string[]> An array of all known fertilizer ids at the time this is ran.

This will give you an array of all the known fertilizer ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Removing All Fertilizers

This will completely remove all the fertilizers currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Fertilizer.removeAll();
```