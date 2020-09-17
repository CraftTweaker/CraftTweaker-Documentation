# Macchine

GTCE memorizza tutte le ricette in una `RecipeMap`. Per ottenerli, è necessario importare `mods.gregtech.recipe.RecipeMap` al tuo codice.

Le ricette sono classificate nelle loro macchine, chiamano `RecipeMap.getByName(nomemacchina)` per ottenere ricette specifiche e costruttore.

## Elenco delle macchine disponibili

- Compressore: `compressore`
- Estrattore: `estrattore`
- Macerator: `macerator`
- Impianto di lavaggio minerale: `orewasher`
- Centrifuga termica: `termal_centrifuga`
- Fornace: `forno`
- Microonde: `microonde`
- Macchina assemblatrice: `assemblatore`
- Forming press: `forming_press`
- Canner: `fluid_canner`
- Forno ad arco plasmatico: `plasma_arc_furnace`
- Forno ad arco: `arc_furnace`
- Macchina per setacciatura: `sifter`
- Precision laser engraver: `laser_engraver`
- Miscelatrice: `mixer`
- Autoclave: `autoclave`
- Separatore elettromagnetico: `elettromagnetico_separatore`
- Polarizer: `polarizer`
- Bagno di Chemi: `chimico_bagno`
- Macchina da birra: `birrificio`
- Riscaldatore di fluidi: `fluid_heater`
- Distilleria: `distilleria`
- Fermentatore: `fermentatore`
- Solidificatore di fluidi: `fluid_solidificatore`
- Estrattore di fluidi: `fluid_extractor`
- Centrifuga: `centrifuga`
- Elettrolyzer: `elettrolizzatore`
- Blast furnace: `blast_furnace`
- Compressore Implo: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Reattore chimico: `chimico_reattore`
- Torre Disti: `distillation_tower`
- Unità cracker: `cracker`
- Forno pirolisso: `pyro`
- Wiremill: `wiremill`
- Cursore metallico: `metal_bender`
- Ferro ferro: `lega_smelter`
- Canning macchina: `canner`
- Lathe: `lathe`
- Macchina da taglio a blocchi: `taglia_sega`
- Estrusore: `estrusore`
- Forgia martello: `forge_hammer`
- Imballatrice: `packer`
- Disimballatrice: `unpacker`
- Diesel gen: `diesel_generator`
- Turbina a gas: `turbina`
- Turbina a vapore: `steam_turbine`
- Generatore di plasma: `plasma_generator`

**Non ancora attuato:**

- Produttore Uu-mater: `uuamplifier`
- Generatore termico: `thermal_generator`
- Generatore semi-fluido: `semi_fluid_generator`
- Reattore fusione: `fusion_reattore`

**Primitive Blast Furnace** *utilizza una sintassi diversa dalle normali ricette.* Per esempio:

```zenscript
import mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Furnace
PBFRecipeBuilder.start()
    . nput(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>. irstItem * 1)
    .duration(250)
    . uelAmount(2)
    .buildAndRegister();

//Remove recipes from PBF
import mods.gregtech.recipe. ecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Informazioni del costruttore

Dopo aver ricevuto un'istanza di `RecipeMap`, è possibile definire le ricette utilizzando il loro costruttore.

Metodo di compilazione chiamata:

```zenscript
recipeMap.recipeBuilder()
```

È un po 'come `Stream<T>` in Java, con completamente funzionalmente per controllare il comportamento della tua ricetta.

Esempio per EBF:

```zenscript
// Fornace elettrico di Esplosione
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace. ecipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    . luidInputs([<liquid:oxygen> * 500])
    . utputs(<ore:ingotSteel>.firstItem * 1)
    . ropertia ("temperatura", 1000) //questa è una temperatura minima alla quale l'oggetto sarà fuso
    . uration(40)
    .EUt(120)
    .buildAndRegister();
```

Alcune proprietà assegnabili al metodo `.property()`:

| Nome        | Descrizione                                                   |
| ----------- | ------------------------------------------------------------- |
| esplosivi   | Compressore di Implosione, quantità di esplosivi              |
| circuito    | Macchine integrate configurabili. Configurazione del circuito |
| temperatura | Fornace Esplosiva. Temperatura minima prescritta.             |

Questi non sono **ANNO IMPLEMENTATO:**

| Nome          | Descrizione                                              |
| ------------- | -------------------------------------------------------- |
| amplificatore | Amplificatore UU. Quantità di amplificatore UU superata. |
| eu_to_start | Reattore di fusione, UE per avviare la fusione           |

Lo usi proprio come la "temperatura":

```zenscript
.property("circuit", X)//, dove X è la configurazione del circuito integrato
.property("esplosivi", Y)//, dove Y è la quantità di esplosivi necessari per fare un lavoro di ricetta
```

Metodi più utili:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 è 100%) // (itemstack, intitial output chance, tier output chance boost
. uration() // in ticks
.notConsumable(X) // where X is a CT id. Funziona come .inputs, ma l'elemento non viene consumato
.hidden() // se la ricetta è nascosta dal JEI
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 è 100%) // non valido per ogni macchina. alcuni di loro usano quel metodo. Il più notevole è il maceratore
.EUt() // UE per tick
```

## Rimozione

La rimozione di una ricetta è fatta per istanza di ricetta stessa, quindi è necessario trovare una ricetta prima.

Esempio:

```zenscript
val compressore come RecipeMap = RecipeMap.getByName("compressore");

// findRecipe(long voltage, IItemHandlerInput modificabili, IMultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```