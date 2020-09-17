# Maszyny

GTCE przechowuje wszystkie przepisy w `Receptura`. Aby je uzyskać, musisz zaimportować `mods.gregtech.recipe.RecipeMap` do swojego kodu.

Receptury są sklasyfikowane do ich maszyn, wywołaj `RecipeMap.getByName(machineName)` , aby otrzymać konkretne przepisy i budownictwo.

## Lista dostępnych maszyn

- Kompresor: `sprężarka`
- Ekstraktor: `ekstraktor`
- Macerator: `macerator`
- Pralnia rudy: `zmywarka`
- Wirówka termiczna: `thermal_centrifuge`
- Piec: `piec`
- Mikrofalowo: `mikrofalowa`
- Automat montażowy: `montażnik`
- Przyciski formowania: `forming_press`
- Powierzchnia płynów: `płyn nawierzchni`
- Piec łukowy plazmowy: `plasma_arc_furnace`
- Piec łukowy: `arc_furnace`
- Maszyny do rozbijania: `sifter`
- Precision laser engraver: `laser_engraver`
- Maszyna mieszająca: `miksera`
- Autoclave: `autoclave`
- Separator elektromagnetyczny: `elektromagnetyczny_separator`
- Polarizer: `polarizer`
- Słód chemiczny: `chemical_bath`
- Maszyny browarnicze: `browarnik`
- Grzejnik cieczy: `płyn_grzejnik`
- Destylaty: `gorzelnia`
- Fermenter: `fermenter`
- Płynny stabilizator: `fluid_solidifier`
- Wyciągacz płynów: `płyn_ekstrakt`
- Wirówka: `wirówka`
- Elektrolizat: `elektrolizator`
- Duży piec: `blast_furnace`
- Sprężarka implo: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Reaktor chemiczny: `chemiczny_reaktor`
- Wieża destrukcyjna: `destylacja_wieża`
- Jednostka krakująca: `kraker`
- Piec pirolityczny: `pyro`
- Wiremll: `walcownia w`
- Metalowy nadajnik: `metal_bender`
- Stop hutni: `stop_hutnik`
- Maszyna do puszkowania: `canner`
- Lathe: `lathe`
- Zablokuj urządzenie cięcia: `cutting_piła`
- Wytłaczaczacz: `wytłaczacz`
- Młot kuźni: `forge_hammer`
- Maszyna pakująca: `pakująca`
- Maszyny do rozpakowywania: `unpacker`
- Diesel gen: `diesel_generator`
- Turbina gazowa: `gaz_turbina`
- Turbina parowa: `steam_turbine`
- Generator plazmowy: `plazma_generator`

**Jeszcze nie zaimplementowano:**

- Producent matrycy: `wzmacniacz`
- Generator termiczny: `thermal_generator`
- Generator półpłynów: `semi_fluid_generator`
- Reaktor syntezy: `fusion_reaktor`

**Prymitywny Piec wielki** *używa innej składni niż normalne przepisy.* Na przykład:

```zenscript
importuj mods.gregtech.recipe.PBFRecipeBuilder;

//Prymitywny Piłkarz
PBFRecipeBuilder.start()
    . nput(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>. istItem * 1)
    .duration(250)
    . uelAmount(2)
    .buildAndRegister();

//Usuń przepisy z PBF
importuje mods.gregtech.recipe. ecipeMaps;

dla receptury w RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Informacje konstrukcyjne

Po otrzymaniu instancji `RecipeMap`możesz zdefiniować receptury używając ich konstruktora.

Metoda wywoływania konstruktora:

```zenscript
Konstruktor receptury ()
```

Jest to trochę takie jak `Stream<T>` w Java, z pełną funkcjonalnością w celu kontrolowania zachowania receptury.

Przykład EBF:

```zenscript
// Electric Blast_furnace
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace. ecipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    . luidInputs([<liquid:oxygen> * 500])
    . utputs(<ore:ingotSteel>.firstItem * 1)
    . Interoperacyjność ("temperatura", 1000) //jest to minimalna temperatura, przy której przedmiot zostanie przetopiony
    . uration(40)
    .EUt(120)
    .buildAndRegister();
```

Niektóre właściwości przypisywane do metody `.property()`:

| Nazwisko            | Opis                                                     |
| ------------------- | -------------------------------------------------------- |
| materiały wybuchowe | Kompresor implozy, ilość materiałów wybuchowych          |
| obwód               | Zintegrowane maszyny konfigurowalne. Konfiguracja obwodu |
| temperatura         | Piec wielki. Minimalne wymagania dotyczące temperatury.  |

Te są **NIEZAIMPLEMENTOWANE ROK:**

| Nazwisko     | Opis                                                    |
| ------------ | ------------------------------------------------------- |
| wzmacniacz   | Amplifier UUU. Ilość wyprowadzonego wzmacniacza UUU.    |
| _do_startu | Reaktor syntezy jądrowej, UE rozpocznie syntezę jądrową |

Używasz tego jak "temperatura":

```zenscript
.property("circuit", X)//, gdzie X jest konfiguracją obwodu scalonego
.property("explosives", Y)//, gdzie Y jest ilością materiałów wybuchowych potrzebnych do wykonania przepisu.
```

Bardziej użyteczne metody:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
. hancedOutput(<itemstack>, 0–10000, 0–10000) (10000 to 100%) // (itemstack, intitial output szansa, zwiększenie szansy na wyjście poziomu
. uration() // w tickach
.notConsumable(X) // gdzie X jest identyfikatorem CT. Działa jako .inputs, ale przedmiot nie zostanie zużyty
.hidden() // jeśli przepis jest ukryty przed JEI
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 jest 100%) // nie jest ważny dla każdej maszyny. niektóre z nich stosują tę metodę. Najbardziej godny uwagi jest macerator
.EUt() // UE na tick
```

## Usuwanie

Usunięcie przepisu odbywa się za pomocą samej instancji receptury, więc musisz najpierw znaleźć przepis.

Przykład:

```zenscript
kompresor walny jako RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(długie napięcie, IItemHandlerModiable input (dane wejściowe IMultipleTankHandler/List<FluidStack> płynneInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```