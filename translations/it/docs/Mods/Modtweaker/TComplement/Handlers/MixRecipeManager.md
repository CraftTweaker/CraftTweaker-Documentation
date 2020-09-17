# MixRecipeManager

Un `MixRecipeManager` viene utilizzato per modificare la ricetta del mix di forno ad alto livello, inclusi quelli aggiunti da ModTweaker.

## Importazione del pacchetto

Meglio essere sicuri che spiacenti e importare il pacchetto

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;
```

## Ottenere un `MixRecipeManager`

Il gestore `HighOven` può darti un `MixRecipeManager`:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `output` è l'output della ricetta del mix da modificare
+ `input` (facoltativo) è l'input della ricetta del mix da modificare. Se `null` o non specificato, qualsiasi ricetta di mix che produce l'output sarà influenzata

## Rimozione degli additivi

È possibile utilizzare un `MixRecipeManager` per rimuovere alcuni additivi dalla ricetta di mix interessata. Attenzione, perché le rimozioni sono sempre applicate. Questo significa che in qualsiasi modo per aggiungere un additivo che aggiungerebbe un additivo che si rimuove sarà evitato.

Questo può avere risultati sorprendenti con voci oreditte. Dal momento che le voci di oredict vengono aggiunte come-è alla ricetta di mix (non è ampliato ad una lista di `IItemStack` ma cercato quando si controlla le ricette), rimuovendo un elemento bloccherà tutte le voci oredict a cui appartiene.

In generale, se si rimuove qualcosa di specifico (diciamo, un `IItemStack` con trasformatori), ma un'aggiunta aggiuntiva (singola) permetterebbe quello che hai rimosso più altre cose (diciamo, un più generico `IItemStack`), l'intera aggiunta sarà annullata, impedendo che altre cose siano accettate dalla High Oven.

| Metodo                                     | Informazioni                                                      |
| ------------------------------------------ | ----------------------------------------------------------------- |
| `removeOxidizer(IIngredient oxidizer)`     | Rimuovere preventivamente l'ossidante dalla MixRecipe interessata |
| `removeReducer(Riduttore di IIngrediente)` | Rimuovere il riduttore dal MixRecipe interessato                  |
| `removePurifier(IIngredient reducer)`      | Rimuovere il purificatore dal MixRecipe interessato               |


Tutti questi metodi restituiscono la stessa istanza che sono stati chiamati uno, consentendo la catena di metodo.

## Aggiunta di additivi all'esistente MixRecipe

È possibile aggiungere additivi a tutte le miscele di ricetta abbinati al `MixRecipeManager`. Attenzione, poiché le rimozioni hanno la priorità (vedi sopra).

| Metodo                                                          | Informazioni                                                                        |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)` | Aggiungi l'ossidatore con la possibilità di consumo specificata (in percentuale)    |
| `addReducer(@NotNull IIngredient Riduttore, int consumeChance)` | Aggiungi il riduttore con la possibilità di consumare (in percentuale)              |
| `addPurifier(@NotNull IIngredient purifier, int consumeChance)` | Aggiungi il purificatore con la possibilità di consumo specificata (in percentuale) |


Tutti questi metodi restituiscono la stessa istanza che sono stati chiamati uno, consentendo la catena di metodo.

## Attenzione

La creazione di un `MixRecipeManager` che non corrisponde a nessuna ricetta mix non attiverà alcun avvertimento, perché non c'è modo di dire quali ricette di mescolanza saranno aggiunte (l'analisi di script avviene prima della registrazione della ricetta di miscelazione). Se sei `MixRecipeManager` non ha effetto, prima controlla che corrisponda effettivamente a una ricetta di mix