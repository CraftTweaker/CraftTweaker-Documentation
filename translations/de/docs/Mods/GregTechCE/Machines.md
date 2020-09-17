# Maschinen

GTCE speichert alle Rezepte in einer `RecipeMap`. Um diese zu erhalten, musst du `mods.gregtech.recipe.RecipeMap` in deinen Code importieren.

Rezepte werden in ihre Maschinen kategorisiert, rufen Sie `RecipeMap.getByName(machineName)` auf, um bestimmte Rezepte und Builder zu erhalten.

## Liste der verfügbaren Maschinen

- Kompressor: `Kompressor`
- Extraktor: `Extraktor`
- Macerator: `macerator`
- Erzwäschanlage: `Erzwäscher`
- Thermische Zentrifuge: `thermal_centrifuge`
- Ofen: `Ofen`
- Mikrowelle: `Mikrowelle`
- Montagemaschine: `Assembler`
- Formpresse: `forming_press`
- Flüssigkeitscanner: `fluid_canner`
- Plasmabogenofen: `Plasma_arc_ofen`
- Bogen-Ofen: `arc_ofen`
- Sifting Maschine: `sifter`
- Precision laser engraver: `laser_engraver`
- Mischmaschine: `Mixer`
- Autoclave: `autoclave`
- Elektromagnetische Separator: `elektromagnetischer Separator`
- Polarizer: `polarizer`
- Chemiebade: `chemisches Bad`
- Braumaschine: `Brauer`
- Flüssigkeitsheizung: `fluid_heater`
- Brennerei: `Brennerei`
- Fermenter: `Gärer`
- Flüssigkeitsstarrator: `fluid_solidifier`
- Flüssigkeitsextraktor: `fluid_extraktor`
- Zentrifuge: `Zentrifuge`
- Elektrolyzer: `Elektrolyzer`
- Hochofen: `Blast_Ofen`
- Impo-Kompressor: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Chemischer Reaktor: `chemischer Reaktor`
- Distanzturm: `Destillation_Turm`
- Cracker Einheit: `Cracker`
- Pyrolyseöfen: `pyro`
- Wiremill: `Drahtmühle`
- Metallbänker: `metal_bender`
- Legierungsschmelz: `alloy_smelter`
- Konservenmaschine: `canner`
- Lathe: `lathe`
- Blockschneidemaschine: `cutting_saw`
- Extruder: `Extruder`
- Schmiedehammer: `forge_hammer`
- Verpackungsmaschine: `Packer`
- Entpackmaschine: `Entpacker`
- Diesel gen: `diesel_generator`
- Gasturbin: `gas_turbine`
- Dampfturbine: `Dampfturbine`
- Plasmagenerator: `Plasma_Generator`

**Noch nicht implementiert:**

- Uu-mater-Produzent: `uuamplifier`
- Wärmegenerator: `Thermal_Generator`
- Halbflüssigkeitsgenerator: `Halbflüssigkeitsgenerator`
- Fusionsreaktor: `fusion_reactor`

**Primitive Blast Furnace** *uses different syntax from normal recipes.* For example:

```zenscript
import mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Ofen
PBFRecipeBuilder.start()
    . nput(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>. irstItem * 1)
    .Dauer(250)
    . uelAmount(2)
    .buildAndRegister();

//Rezepte von PBF entfernen
importieren mods.gregtech.recipe. ecipeMaps;

für das Rezept in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Builder-Informationen

Nachdem du eine Instanz von `RecipeMap`erhalten hast, kannst du Rezepte mit deren Builder definieren.

Builder-Methode:

```zenscript
recipeMap.recipeBuilder()
```

Es ist ein bisschen wie `Stream<T>` in Java, mit voll funktionsfähigem Zugriff auf das Verhalten Ihres Rezeptes.

Beispiel für EBF:

```zenscript
// Elektro-Sprengöfen
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_öfen. ecipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    . luidInputs([<liquid:oxygen> * 500])
    . utputs(<ore:ingotSteel>.firstItem * 1)
    . roperty("temperature", 1000) //Dies ist eine minimale Temperatur, bei der das Element geschmolzen wird
    . uration(40)
    .EUt(120)
    .buildAndRegister();
```

Einige der Eigenschaften, die der `.property()` Methode zugewiesen werden können:

| Name       | Beschreibung                                                                   |
| ---------- | ------------------------------------------------------------------------------ |
| explosive  | Implosionskompressor, Menge an Sprengstoff                                     |
| schaltung  | Integrierte Schaltkreis konfigurierbare Maschinen. Konfiguration der Schaltung |
| Temperatur | Explosionsöfen. Mindesttemperatur erforderlich.                                |

Diese sind **NICHT IMPLEMENTIERT JET:**

| Name       | Beschreibung                                       |
| ---------- | -------------------------------------------------- |
| verstärker | UU-Verstärker. Betrag des UU Amplifier ausgegeben. |
| zum Start  | Fusionsreaktor, EU zum Beginn der Fusion           |

Du verwendest es genau wie die "Temperatur":

```zenscript
.property("circuit", X)//, wobei X die integrierte Schaltungskonfiguration
.property("explosives", Y)//, wobei Y die Menge an Sprengstoffen ist, die benötigt wird, um ein Rezept zu bearbeiten
```

Weitere nützliche Methoden:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 ist 100%) // (Itemstack, intiale Ausgabechance, Statusausgabechance steigern
. uration() // in ticks
.notConsumable(X) // wobei X eine CT-ID ist. Funktioniert als .inputs, aber das Element wird nicht konsumiert
.hidden() // wenn das Rezept vor dem JEI
versteckt wird. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 ist 100%) // nicht für jede Maschine gültig. einige von ihnen verwenden diese Methode. Der bemerkenswerteste ist Makerator
.EUt() // EU pro Tick
```

## Entfernen

Das Entfernen eines Rezeptes geschieht durch Rezeptinstanz selbst, also musst du zuerst ein Rezept finden.

Beispiel:

```zenscript
val compressor as RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(long voltage, IItemHandlerModiable inputs, IMultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```