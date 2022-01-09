# Colture

Percorso classe: `mods.botanypots.Crop`

## Uso

Per usare, importa la classe con `import mods.botanypots.Crop;` all'inizio del tuo script.

## Crea Una Coltura

`Crop.create(id, seed, display, tickRate, multiplier, categories);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> L'elemento usato per piantare la coltura.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Il blocco per mostrare quando renderizzare il raccolto.
- `tickRate` &lt;int> Uno dei fattori per il tempo impiegato dalla coltura per crescere.
- `multiplier` &lt;float> Un altro fattore per quanto tempo la coltura impiega per crescere.
- `categories` &lt;string[]> Un insieme di categorie di suolo in cui può essere coltivata questa coltura.

Questo si può usare per creare una nuova coltura. Tieni a mente che le gocce devono essere aggiunte separatamente.

```zenscript
Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## Rimuovi Una Coltura

`Crop.remove(id);`

- `id` &lt;string> L'id della coltura da rimuovere. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.

Rimuove una coltura in base al suo id.

```zenscript
Crop.remove("botanypots:crop/wheat");
```

## Imposta Elemento Seme

`Crop.setSeed(id, seed);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> L'elemento usato per piantare la coltura.

Imposta l'elemento usato per piantare la coltura.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## Imposta Blocco Schermo

`Crop.setDisplay(id, state);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Il blocco per mostrare quando renderizzare il raccolto.

Imposta il blocco renderizzato per la coltura.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Imposta Tasso Tick

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `tickRate` &lt;int> Il tasso di tick aggiornato. Uno dei fattori per quanto tempo è impiegato da una coltura per crescere.

Imposta il fattore dei tick della coltura.

```zenscript
Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## Imposta Moltiplicatore di Crescita

`Crop.setGrowthModifier(id, multiplier);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `multiplier` &lt;float> Il moltiplicatore aggiornato. Un altro fattore per il tempo impiegato dalla coltura per crescere.

Imposta il moltiplicatore/modificatore di crescita per la coltura.

```zenscript
Crop.setGrowthMofieir("botanypots:crop/wheat", 1.8);
```

## Cambiare le Categorie della Coltura

Modifica le categorie associate alla coltura. Le categorie sono usate per abbinare i suoli validi alla coltura.

### Aggiungi una Categoria ad una Coltura

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `categoriesToAdd` &lt;string[]> Un insieme di categorie da associare alla coltura.

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### Rimuove una Categoria Da una Coltura

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `categoriesToRemove` &lt;string[]> Un insieme di categorie da dissociare dalla coltura.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Cancella Tutte le Categorie Da una Coltura

`Crop.clearCategories(id);`

- `id` &lt;string> L'id della coltura. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## Gocce Coltura

### Aggiungere Gocce

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> L'id della coltura a cui aggiungere una goccia. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `drop` <[IItemStack](/vanilla/api/items/IItemStack)> L'elemento da far cadere.
- `chance` &lt;float> La possibilità che cada.
- `min` &lt;int> Il minimo quantitativo da dare di quell'elemento.
- `max` &lt;int> Il massimo quantitativo di quell'elemento da dare.

Questo aggiunge una nuova goccia potenziale alla coltura.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Rimuovere Gocce

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> L'id della coltura da cui rimuovere una goccia. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> L'ingrediente contro cui abbinare per la rimozione

Rimuove ogni goccia che ha un elemento corrispondente.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Ottenere Tutti gli ID

`Crop.getAllIds();`

- Restituisce: &lt;string[]> Un insieme di tutti gli id delle colture note al momento in cui viene eseguito.

Questo ti darà un insieme di tutti gli id delle colture note al momento.

```zenscript
// Log all ids to the crafttweaker.log file
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## Rimuovere Tutte le Colture

Questo rimuoverà completamente tutte le colture correntemente registrate. Questo è utile se vuoi ricreare tutti i dati da zero tramite gli script.

```zenscript
Crop.removeAll();
```
