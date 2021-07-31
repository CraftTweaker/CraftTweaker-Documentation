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

Crea un nuovo fertilizzante. Questo si può usare per fa crescere le colture più velocemente.

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Rimuovere Fertilizzanti

`Fertilizer.remove(id);`

- `id` &lt;string> L'id del fertilizzante. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.

Questo si può usare per rimuovere un fertilizzante.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Modificare i Tick del Fertilizzante

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> L'id del fertilizzante. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `minTick` &lt;int> Il nuovo quantitativo minimo di tick aggiunti dal fertilizzante.
- `maxTick` &lt;int> Il nuovo quantitativo massimo di tick aggiunti dal fertilizzante.

Questo modificherà il tasso di tick di crescita aggiunti dal fertilizzante.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Modificare gli Ingredienti del Fertilizzante

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;string> L'id del fertilizzante. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> Il nuovo elemento da usare per il fertilizzante.

Imposta l'elemento ingredienti che è il fertilizzante.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Ottenere Tutti gli ID

`Fertilizer.getAllIds();`

- Restituisce: &lt;string[]> Un insieme di tutti gli id dei fertilizzanti noti al momento in cui questo è eseguito.

Questo ti darà un insieme di tutti gli id dei fertilizzanti al momento.

```zenscript
// Log all ids to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Rimuovere Tutti i Fertilizzanti

Questo rimuoverà completamente tutti i fertilizzanti correntemente registrati. Questo è utile se vuoi ricreare tutti i dati da zero tramite gli script.

```zenscript
Fertilizer.removeAll();
```