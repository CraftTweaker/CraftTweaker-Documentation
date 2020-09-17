# Material

## Paket anrufen

Das `mods.gregtech.material` Paket enthält alle Klassen, die du benötigst, um Materialien zu behandeln.

## Material Objekt

Ein Objekt von `mods.gregtech.material.Material` repräsentiert ein Material in GregTech, mit einigen nützlichen Mitgliedern, mit denen du umgehen kannst.

Eigenschaften:

| Name               | Type                                 | Beschreibung                                        |
| ------------------ | ------------------------------------ | --------------------------------------------------- |
| farben             | int                                  | Farbe des Materials im RGB-Format                   |
| chemikalFormula    | string                               | Chemische Formel dieses Materials                   |
| iconset            | Materialsymbol Set                   | Symbolsatz für diese Meta-Elemente-Erzeugung        |
| komponenten        | Unveränderliche Liste<materialstack> | Liste dieser Materialkomponente                     |
| generationFlagsRaw | long                                 | Erzeugungsflaggen dieses Materials (siehe MatFlags) |
| element            | Element                              | Element dieses Materials besteht aus                |

Getriebe:

| Name            | Type   | Beschreibung                              |
| --------------- | ------ | ----------------------------------------- |
| radioactive     | bool   | Wahr, wenn dieses Material radioaktiv ist |
| protons         | long   |                                           |
| Neutronen       | long   |                                           |
| masse           | long   |                                           |
| dichte          | long   |                                           |
| camelCaseString | string |                                           |
| unlocalizedName | string |                                           |
| localizedName   | string | Nur Client-Seite                          |
| name            | string | Name in der Materialregistry              |

Methoden:

| Name (Parameter)              | Beschreibung                   |
| ----------------------------- | ------------------------------ |
| addFlags(String... flagnamen) | Generierungsflaggen hinzufügen |
| hasFlag(String flagname)      | Hat eine Generationsflagge     |

`Materialstapel` kann von `Material * Nummer`erstellt werden, genauso wie [Ingredientenmenge](/Vanilla/Variable_Types/IIngredient.md) oder FluidStack.

### FluidMaterial

`FluidMaterial` ist ein Material, das Flüssigkeitsmerkmale enthält. Seine Superklasse ist `Material` so sind alle Mitglieder in `Material` immer noch verfügbar.

Eigenschaften:

| Name            | Type | Beschreibung |
| --------------- | ---- | ------------ |
| fluidtemperatur | int  |              |

Getriebe:

| Name      | Type                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------- | ----------------------- |
| hasFluid  | bool                                                       |                         |
| hasPlasma | bool                                                       |                         |
| isGaseous | bool                                                       |                         |
| flüssig   | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | Material Flüssigkeit    |
| Plasma    | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | materieller Plasmafluid |

### Staubmaterial

`Staubmaterial` ist ein Material, das Staubmerkmale enthält. Seine Superklasse ist `FluidMaterial` also sind alle Mitglieder in `FluidMaterial` immer noch verfügbar.

Eigenschaften:

| Name                   | Type          | Beschreibung                                                                                                                                                                                          |
| ---------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier          | int           | Multiplikator des Erzes während der Mazeration                                                                                                                                                        |
| byProductMultiplikator | int           | Ausgabemengenmultiplikator bei Pulverisierung                                                                                                                                                         |
| smeltingMultiplikator  | int           | Schmelzmenge Multiplikator während des Vanille-Gegenstands schmelzen                                                                                                                                  |
| directSmelting         | SolidMaterial | Material, zu dem das Schmelzen von diesem Materialerz führen wird                                                                                                                                     |
| gewaschen              | FluidMaterial | Material, in dem das Erz dieses Materials gewaschen werden sollte, um zusätzliche Leistung zu erbringen                                                                                               |
| separatedInto          | Staubmaterial | Während der elektromagnetischen Trennung wird dieses Material Erz auf dieses Material und das von diesem Feld angegebene Material getrennt                                                            |
| brennzeit              | int           | Die Verbrennungszeit dieses Materials bei der Verwendung als Brennstoff im Ofenschmelzen, Null oder negativer Wert deutet darauf hin, dass dieses Material nicht als Brennstoff verwendet werden kann |

Getriebe:

| Name          | Type                 | Beschreibung                                                 |
| ------------- | -------------------- | ------------------------------------------------------------ |
| oreByProdukte | Liste<fluidmaterial> | Erzliste nach Produkten                                      |
| abruf Level   | int                  | Werkzeug Level benötigt um Block dieses Materials zu sammeln |

### SolidMaterial

`SolidMaterial` ist ein Material, das solide Eigenschaften aufweist. Seine Superklasse ist `DustMaterial` , so dass alle Mitglieder in `DustMaterial` noch verfügbar sind.

Eigenschaften:

| Name           | Type          | Beschreibung                                                                                                                |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial | Das hier angegebene Material wird als Handle für die Herstellung des Werkzeugs aus diesem Material benötigt                 |
| macerateInto   | Staubmaterial | Wenn ein Element dieses Materials bearbeitet wird, ergibt sich in diesem Feld spezifiziertes Material, standardmäßig selbst |

Getriebe:

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Beschreibung
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      float
    </td>
    
    <td>
      Geschwindigkeit der Werkzeuge aus diesem Material, Standard 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      toolHaltbarkeit
    </td>
    
    <td>
      int
    </td>
    
    <td>
      Haltbarkeit von Werkzeugen aus diesem Material, 0 für Materialien, die nicht für Werkzeuge verwendet werden können
    </td>
  </tr>
  
  <tr>
    <td>
      tool-Verzauberungen
    </td>
    
    <td>
      Liste<enchantmentdata>
    </td>
    
    <td>
      Verzauberung für Werkzeuge aus diesem Material
    </td>
  </tr>
</table>

### IngotMaterial

`IngotMaterial` ist ein mterielles Material, das Barren Features enthält. Die Superklasse ist `SolidMaterial` , so dass alle Mitglieder in `SolidMaterial` noch verfügbar sind.

Bargeldmaterialien können als Draht, Kabel und Flüssigkeitsrohr verwendet werden. Diese Eigenschaften können von `setCableProperties(lange Spannung, Int baseAmperage, int lossPerBlock)` und `setFluidPipeProperties(int Durchsatz, int maxtemperatur, boolean gasProof)` eingestellt werden.

Zum Beispiel:

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 verlu/block
```

## Verzauberungsdaten

`gregtech.mods.EnchantmentData` können in `SolidMaterial#toolEnchantments`gefunden werden. Sie sind eine interne Speicherung einer Verzauberung mit Leveln.

Sie können in `crafttweaker.enchantments.IEnchantmentDefinition` eingegeben werden, indem Sie `Verzauberung` erhalten und Level ist verfügbar mit `Level` getter.

Um eine Verzauberung für Werkzeuge in `SolidMaterial`hinzuzufügen, rufen Sie einfach `addToolEnchantment(IVerzauberung)`auf, um einen CraftTweaker Verzauberungsdatentyp hinzuzufügen.

Beispiel für ein Fortune-I-Material:

```zenscript
var material = MaterialRegistry.get("Iron"); // Ändere Eisenmaterial
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // Erstelle ein Verzauberungsobjekt und füge es hinzu
```

## Materialgenerierung Flaggen

Diese Flaggen sind für Materialien anwendbar.

| Name (Groß- und Kleinschreibung)  | Beschreibung                                                                                                                                                                                                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entkopplung von ELECTROLYZING     | Aktiviert das Rezept für Elektrolyzer Zersetzung                                                                                                                                                                                                                             |
| DECOMPOSITION_DESCRIPTION         | Aktiviert Zentrifuge Zersetzungsrezept Erzeugung                                                                                                                                                                                                                             |
| BURNEN                            | Füge Material hinzu, wenn sie ständig brennende Aura hat                                                                                                                                                                                                                     |
| FLAMMABLE                         | Material hinzufügen, wenn es eine Art brennbar ist                                                                                                                                                                                                                           |
| ERKLÄRUNG                         | Material hinzufügen, wenn es eine Art Sprengstoff ist                                                                                                                                                                                                                        |
| Keine Einheitlichkeit             | Füge dem Material hinzu, um seine Vereinigung vollständig zu deaktivieren                                                                                                                                                                                                    |
| KEINE RECYCLING                   | Fügen Sie Material hinzu, wenn eines seiner Gegenstände nicht recycelt werden kann, um Schnüffel zu bekommen                                                                                                                                                                 |
| Deaktivieren                      | Deaktiviert die Zersetzungsrezepterzeugung für dieses Material und alle Materialien, die es als Komponente haben                                                                                                                                                             |
| DECOMPOSITION_REQUIRES_HYDROGEN | Zersetzungsrezept erfordert Wasserstoff als zusätzlichen Eingang. Betrag ist gleich dem Eingabewert                                                                                                                                                                          |
| Platte                            | Generiere eine Platte für dieses Material, wenn es Staubmaterial ist, wird das Rezept für Staubkompressoren in die Platte erzeugt, Wenn es Metallmaterial ist, werden Biegemaschinenrezepte generiert, wenn Block gefunden wird, wird auch Schneidemaschinenrezept generiert |
| GENERATE_DENSE                    | Erzeugt eine dichte Platte.                                                                                                                                                                                                                                                  |
| Kein WORKING                      | Fügen Sie Material hinzu, wenn es mit keinem anderen Mittel bearbeitet werden kann, als zu zerschlagen oder zu schmelzen. Dies wird für beschichtete Materialien verwendet.                                                                                                  |
| Keinesfalls                       | Fügen Sie Material hinzu, wenn es nicht für normale Metallbearbeitung verwendet werden kann, da es nicht beugbar ist.                                                                                                                                                        |
| KEINE KMUs                        | Material hinzufügen, wenn es unmöglich ist es zu schmelzen                                                                                                                                                                                                                   |
| INDUCTION_LABEL                   | Fügen Sie dem Material hinzu, wenn es weniger in einem Induktionsschmelzer ausgibt.                                                                                                                                                                                          |
| Into FLUID                        | Dem Material hinzufügen, wenn es in Flüssigkeit schmilzt (und es wird auch Flüssigkeit für dieses Material generieren)                                                                                                                                                       |
| ExCLUDE_BLOCK                     |                                                                                                                                                                                                                                                                              |
| ExCLUDE_PLATE_COMPRESSOR_DESC   |                                                                                                                                                                                                                                                                              |
| CRYSTALLISIEREN                   | Wenn dieses Material kristallisierbar ist                                                                                                                                                                                                                                    |
| Länge                             |                                                                                                                                                                                                                                                                              |
| SIFTER_TITLE                      |                                                                                                                                                                                                                                                                              |
| Blöcken                           | Wann immer System Flüssigkeitsblock für dieses flüssige Material generieren soll                                                                                                                                                                                             |
| PLASMA                            | Füge diese Fahne hinzu, um die Plasmaerzeugung für dieses Material zu aktivieren                                                                                                                                                                                             |
| STATE_GAS                         | Markiert den Materialzustand als Gas                                                                                                                                                                                                                                         |
| Drehung                           |                                                                                                                                                                                                                                                                              |
| GENERATE_GEAR                     |                                                                                                                                                                                                                                                                              |
| LONG_ROD                          |                                                                                                                                                                                                                                                                              |
| MORTAR_GRINDABLE                  | Wenn dieses Material mit einem einfachen Mörser schleifbar ist                                                                                                                                                                                                               |

## Material Icon Set

Icon-Sets sind in `mods.gregtech.material.MaterialIconSet` verfügbar.

- KEIN
- METALLIC
- DULL
- MAGNETIC
- QUARTZ
- DIAMONT
- EMERALD
- SHINY
- SHARDS
- ROUGH
- FEHLER
- SAND
- FLINT
- RUBY
- LAPIS
- PUNKT
- FLUID
- GAS
- LIGNITE
- OPAL
- GLASS
- WOOOD
- LEAF
- Horizontale
- Vertikal
- PAPER
- NETHERSTAR

Getriebe sind `Name`.

Methoden sind `toString()`, und statische Methode `getByName(String Name)`.

## Material Registry

Die Materialregistrierung ist ein Helfer, der Materialien im Vereinheitlichungssystem erhält, auflisten und erstellen kann.

Sie können die Klasse `mods.gregtech.material.MaterialRegistry` importieren.

### Auslastung

```zenscript
#loader gregtech
importiert mods.gregtech.material.MaterialRegistry;

// Beachten Sie, dass der Rückgabetyp null sein kann, wenn nichts gefunden wurde
var material = MaterialRegistry. et(materialName);

// Alle registrierten Materialien auflisten
var materialList = Materialregistry. etAllMaterial();

// Setze die ToolHaltbarkeit auf 0, wenn der Barren nicht als Werkzeug verwendet werden kann
// Beachten Sie, dass ein @Optionaler Parameter ausgelassen werden kann und es wird durch Standard 0 ersetzt.
// Das bedeutet, dass Juwel und Bargeldmaterial standardmäßig nicht als Werkzeug verwendet werden können.
MaterialRegistry.createFluidMaterial(int metaItemSubId, String name, int color, String iconSet, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateDustMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateGemMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry. reateIngotMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### Beispiel

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val staubMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
staubMaterial. ddFlags(["GENERATE_ARE", "GENERATE_PLATE"]);

//Erzeugt ein Edelmaterial mit einem Tooltip mit der chemischen Formel
//Dies generiert automatisch ein Elektrolyzer-Rezept, um dieses Material in seine Bestandteile zu teilen.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0);

//Jedes zuvor registrierte Material kann verwendet werden - inklusive eigener Materialien.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "glänzen", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```