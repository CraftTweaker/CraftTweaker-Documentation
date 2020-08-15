# Suoli

Percorso classe: `mods.botanypots.Soil`

## Uso

Per usare, importa la classe con `import mods.botanypots.Soil;` all'inizio del tuo script.

## Creare Nuovi Suoli

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;string> L'id del nuovo suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> L'ingrediente usato per determinare quali elementi/blocchi sono usati per mettere il suolo in un vaso.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Lo stato del blocco da mostrare per il suolo nel vaso.
- `growthModifier` &lt;float> Modifica il tempo di crescita di un raccolto. 1f = crescita istantanea. 0 = crescita normale. -1f = non cresce mai. 0,15 = 15% più veloce, -0,15 = 15% più lentamente.
- `categories` &lt;string[]> Un insieme di categorie associate al nuovo suolo.

Crea una nuova voce del suolo che i giocatori possano usare nel vaso botanico.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## Rimuovere Un Suolo

`Soil.remove(id);`

- `id` &lt;string> L'id del suolo da rimuovere. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.

Rimuove un suolo dai dati del gioco.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Modificatore Di Crescita Del Terreno

`Soil.setGrowthModifier(id, tickRate);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `growthModifier` &lt;float> Modifica il tempo di crescita di un raccolto. 1f = crescita istantanea. 0 = crescita normale. -1f = non cresce mai. 0,15 = 15% più veloce, -0,15 = 15% più lentamente.

Cambia il modificatore di crescita di un dato terreno.

```zenscript
Soil.setGrowthModifier("botanypots:suolo/erba", 0.15);
```

## Modificare Ingrediente del Suolo

`Soil.setIngredient(id, ingredient);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> L'ingrediente usato per determinare quali elementi/blocchi sono usati per mettere il suolo in un vaso.

Modifica gli elementi usati per mettere il suolo nel vaso botanico.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Modificare Visualizzazione Suolo

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Lo stato del blocco da mostrare per il suolo nel vaso.

Modifica il blocco mostrato per il suolo.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Modificare Categorie del Suolo

Modifica le categorie associate al suolo. Questi sono usati per abbinare le colture a suoli validi.

### Aggiungi una Categoria ad un Suolo

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `categoriesToAdd` &lt;string[]> Un insieme di categorie da associare al suolo.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Rimuovi una Categoria Da un Suolo

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.
- `categoriesToRemove` &lt;string[]> Un insieme di categorie da dissociare dal suolo.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Cancella Tutte le Categorie Da un Suolo

`Soil.clearCategories(id);`

- `id` &lt;string> L'id del suolo. Questo è un id spaziato dai nomi e deve essere nel formato valido `namespace:path`.

```zenscript
Soil.clearCategories("botanypots:soil/farmland");
```

## Ottenere Tutti gli ID

`Soil.getAllIds();`

- Restituisce: &lt;string[]> Un insieme di tutti gli id dei suoli noti al momento in cui viene eseguito.

Questo ti darà un insieme di tutti gli id dei suoli noti al momento.

```zenscript
// Log all ids to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Rimuovere Tutti i Suoli

Questo rimuoverà completamente tutti i suoli correntemente registrati. Questo è utile se vuoi ricreare tutti i dati da zero tramite gli script.

```zenscript
Soil.removeAll();
```
