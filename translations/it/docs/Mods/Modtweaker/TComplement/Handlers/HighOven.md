# HighOven

La confezione HighOven permette di aggiungere / rimuovere combustibili, riscaldare ricette e mescolare ricette al forno alto.

## Importazione del pacchetto

Importa il pacchetto usando

```zenscript
import mods.tcomplement.highoven.HighOven;
```

## Carburanti

È possibile aggiungere e rimuovere combustibili accettati dal forno alto.

### Rimozione dei combustibili

```zenscript
// HighOven.removeFuel(IIngredient fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Aggiunta di combustibili

```zenscript
// HighOven.addFuel(IIngredient fuel, int time, int rate);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `carburante` è il carburante da aggiungere (supporta trasformatori, NBT e contenitori di fluidi)
+ `time` is how long the fuel lasts, in seconds
+ `rate` è l'aumento di temperatura del forno alto quando viene utilizzato quel combustibile, in gradi al secondo

## Sovrascrittura Di Fusione

È possibile aggiungere e rimuovere override di fusione per il Forno Alto. Sovrascrittura di fusione, beh, sovrascrivi il comportamento di fusione predefinito nel Forno Alto. Gli oggetti normalmente si comportano come nella fonderia, le sovrascritture possono ridefinire il fluido di uscita e la temperatura di fusione (solo per l'Alto Forno).

### Rimozione override

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack output, @Optional IItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Aggiunta override

Questo è più interessante. Sovrascrittura specifica un nuovo comportamento per gli oggetti nel forno alto

```zenscript
// HighOven.addMeltingOverride(output ILiquidStack, input IIngrediente, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `output` il liquido e la quantità da produrre
+ `inserisci` l'IIngrediente per fondere. Supporta trasformatori, oreditto ecc.
+ `temp` (facoltativo) la temperatura minima per iniziare a fondere nel Forno alto, in Kelvin. Se non definito, lasciare il calcolo al forno alto

## Ricette di calore

Ricette di calore trasformano un fluido in un altro nel serbatoio del forno alto, a condizione che la temperatura del forno alto sia abbastanza alta.

### Rimozione ricette di calore

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `output` è l'output per il quale le ricette dovrebbero essere disabilitate
+ `input` è opzionalmente gli input con cui filtrare le ricette. Se non specificato (o `null`), tutte le ricette che producono l'output fornito saranno disabilitate. Altrimenti, solo la ricetta con l'input dato è disabilitata.

*NOTA*: questo metodo **non** disabilita le ricette di calore aggiunte da ModTweaker usando il metodo successivo.

### Aggiungere ricette di calore

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `produce` il liquido in pruduce, e in quale quantità
+ `input` il liquido da consumare e in quale quantità, per produrre la quantità in uscita
+ `temp` la temperatura minima elevata del forno, in Kelvin.

*Nota*: la velocità effettiva delle scale delle ricette termiche con temperatura in eccesso

## Mescola ricette

Mescolare ricette permettono di fare una sorta di alchimia o lega. Quando una pila si scioglie nel forno alto, se produce il fluido giusto *e* gli ossidanti corretti, riduttori e purificatori sono nei loro slot dedicati, quindi viene prodotto un fluido diverso.

Poiché quelle ricette sono complicate, l'aggiunta o la modifica di quelle esistenti utilizza una speciale classe Zen.

### Rimozione ricette mix

Questa è la parte facile per ricette mix

```zenscript
// HighOven.removeMixRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // disabilita qualsiasi ricetta di mix di produzione di acciaio
```

Gli argomenti sono gli stessi di `removeHeatRecipe()` e la corrispondenza funziona allo stesso modo. Analogamente a `removeHeatRecipe()`, questo metodo non rimuoverà le ricette aggiunte da ModTweaker.

### Aggiungere ricette mix

Per aggiungere una ricetta mix, devi usare un `MixRecipeBuilder`. Si può ottenere uno utilizzando

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `output` è il fluido e la quantità da produrre
+ `input` è il fluido e la quantità da consumare
+ `temp` è la temperatura minima del forno alto per la ricetta da lavorare, a Kelvin

Once you have a `MixRecipeBuilder`, you should add oxidizers, reducers and purifiers to it, and then register it.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

For a detailed documentation of what you can do with a `MixRecipeBuilder`, see its documentation.

NOTA*: Una volta che hai usato un MixRecipeBuilder ``, puoi continuare a modificarlo e riutilizzarlo. Permette di aggiungere facilmente le variazioni delle ricette.

**ATTENZIONE**: Se nessun oggetto produce il fluido di ingresso quando si scioglie nella fonderia, la ricetta non sarà visibile in JEI.

### Ricetta mix tweaking

Per modificare le ricette di mix esistenti (**inclusi** quelle aggiunte da ModTweaker), è possibile utilizzare un `MixRecipeManager`:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

Come al solito, non specificare l'input (o fornire `null`) risulta in un comportamento wildcard in cui tutti gli input saranno accettati.

Una volta che hai un `MixRecipeManager` che rappresenta un set particolare di ricetta mix, puoi impedire che alcuni ossidanti/riduttori/purificatori vengano aggiunti a quelle ricette, *o* provano ad aggiungere nuovi additivi. Le rimozioni hanno la priorità sulle aggiunte.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

Il comportamento potrebbe essere un po 'sorprendente a volte. Quando si disabilita un additivo, qualsiasi aggiunta di additivi che permetterebbe ciò che si disabilita verrà annullato. Per esempio, se aggiungi un mazzo di oggetti usando un singolo `OreDictEntry`, poi prova a rimuovere uno specifico `IItemStack`, impedirà che la voce venga aggiunta.

Questo perché iternally, `OreDictEntry` vengono aggiunti come-is e non vengono convertiti in singoli elementi. L'unico modo per disabilitare il `ItemStack` che si desidera vietare è quello di impedire che l'intera voce venga registrata, altrimenti la voce permetterebbe la voce.

Se si desidera effettivamente aggiungere una voce oredict tranne alcuni elementi, dovrai farlo manualmente iterando il contenuto di `OreDictEntry` e quindi rimuovendo gli elementi specifici (o non aggiungendoli in primo luogo).