# Materiale

## Chiamare il pacchetto

Il pacchetto `mods.gregtech.material` contiene tutte le classi che dovrai gestire con i materiali.

## Oggetto Materiale

Un oggetto di `mods.gregtech.material.Material` rappresenta un materiale in GregTech, con alcuni membri utili che puoi affrontare.

Proprietà:

| Nome                | Tipo                         | Descrizione                                                       |
| ------------------- | ---------------------------- | ----------------------------------------------------------------- |
| colore              | int                          | Colore del materiale in formato RGB                               |
| chimicoFormula      | stringa                      | Formula chimica di questo materiale                               |
| iconSet             | MaterialIconSet              | Set di icone per questa generazione di meta-elementi di materiale |
| componenti          | ImmutableList<materialstack> | Elenco di questo componente materiale                             |
| generazioneFlagsRaw | lungo                        | Bandiere di generazione di questo materiale (Vedi MatFlags)       |
| elemento            | Elemento                     | Elemento di questo materiale costituito da:                       |

Getter:

| Nome            | Tipo    | Descrizione                            |
| --------------- | ------- | -------------------------------------- |
| radioactive     | bool    | Vero se questo materiale è radioattivo |
| protons         | lungo   |                                        |
| neutroni        | lungo   |                                        |
| massa           | lungo   |                                        |
| densità         | lungo   |                                        |
| camelCaseString | stringa |                                        |
| unlocalizedName | stringa |                                        |
| localizedName   | stringa | Solo lato client                       |
| nome            | stringa | Nome nel registro delle materie        |

Metodi:

| Nome (Parametri)              | Descrizione                    |
| ----------------------------- | ------------------------------ |
| addFlags(String... flagNames) | Aggiungi flag di generazione   |
| hasFlag(String flagName)      | Ha una bandiera di generazione |

`MaterialStack` può essere creato da `materiale * numero`, come [Quantità di ingrediente](/Vanilla/Variable_Types/IIngredient.md) o FluidStack.

### FluidMaterial

`FluidMaterial` è un materiale che contiene caratteristiche fluide. La sua superclasse è `Materiale` quindi tutti i membri in `Materiale` sono ancora disponibili.

Proprietà:

| Nome             | Tipo | Descrizione |
| ---------------- | ---- | ----------- |
| fluidTemperatura | int  |             |

Getter:

| Nome      | Tipo                                                 | Descrizione             |
| --------- | ---------------------------------------------------- | ----------------------- |
| hasFluid  | bool                                                 |                         |
| hasPlasma | bool                                                 |                         |
| isGaseous | bool                                                 |                         |
| fluido    | [Definizione](/Vanilla/Liquids/ILiquidDefinition.md) | fluido materiale        |
| plasma    | [Definizione](/Vanilla/Liquids/ILiquidDefinition.md) | materiale plasma fluido |

### PolvereMateriale

`DustMaterial` è un materiale che contiene caratteristiche di polvere. La sua superclasse è `FluidMaterial` quindi tutti i membri in `FluidMaterial` sono ancora disponibili.

Proprietà:

| Nome                   | Tipo             | Descrizione                                                                                                                                                                                       |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier          | int              | Moltiplicatore della quantità di minerale frantumato durante la macerazione                                                                                                                       |
| daProductMultiplier    | int              | Moltiplicatore di quantità in uscita di Byproducts durante la polverizzazione                                                                                                                     |
| smeltingMoltiplicatore | int              | Moltiplicatore di quantità di elemento di fusione durante la fusione dell'elemento di vaniglia                                                                                                    |
| directSmelting         | SolidMaterial    | Materiale a cui la fusione di questo minerale materiale risulterà                                                                                                                                 |
| washedIn               | FluidMaterial    | Materiale in cui il minerale di questo materiale dovrebbe essere lavato per dare uscita supplementare                                                                                             |
| separatedInto          | PolvereMateriale | Durante la separazione elettromagnetica, questo minerale materiale sarà separato su questo materiale e materiale specificato da questo campo                                                      |
| burnTime               | int              | Il tempo di combustione di questo materiale quando usato come combustibile nella fusione di forni, valore zero o negativo indica che questo materiale non può essere utilizzato come combustibile |

Getter:

| Nome                | Tipo                  | Descrizione                                                                |
| ------------------- | --------------------- | -------------------------------------------------------------------------- |
| oreByProdotti       | Elenco<fluidmaterial> | Elenco di minerali per prodotti                                            |
| livello di raccolta | int                   | Livello strumento necessario per raccogliere il blocco di questo materiale |

### SolidMaterial

`SolidMaterial` è un materiale che contiene caratteristiche solide. La sua superclasse è `DustMaterial` quindi tutti i membri in `DustMaterial` sono ancora disponibili.

Proprietà:

| Nome           | Tipo             | Descrizione                                                                                                                |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial    | Il materiale specificato qui sarà richiesto come maniglia per fare strumento da questo materiale                           |
| macerateInto   | PolvereMateriale | Macerando qualsiasi oggetto di questo materiale risulterà materiale specificato in questo campo, predefinito per se stesso |

Getter:

<table>
  <tr>
    <th>
      Nome
    </th>
    
    <th>
      Tipo
    </th>
    
    <th>
      Descrizione
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      galleggiante
    </td>
    
    <td>
      Velocità degli utensili fatti da questo materiale, default 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      toolDurability
    </td>
    
    <td>
      int
    </td>
    
    <td>
      Durevolezza degli utensili realizzati con questo materiale, 0 per materiali che non possono essere utilizzati per utensili
    </td>
  </tr>
  
  <tr>
    <td>
      toolEnchantments
    </td>
    
    <td>
      Elenco<enchantmentdata>
    </td>
    
    <td>
      Incantesimo da applicare agli strumenti realizzati con questo materiale
    </td>
  </tr>
</table>

### IngotMaterial

`IngotMaterial` è un mterial che contiene caratteristiche di lingotto. La sua superclasse è `SolidMaterial` quindi tutti i membri in `SolidMaterial` sono ancora disponibili.

I materiali di lingotto possono essere utilizzati come filo, cavo e tubo fluido. Queste proprietà possono essere impostate da `setCableProperties(long voltage, int baseAmperage, int lossPerBlock)` and `setFluidPipeProperties(int throughput, int maxTemperature, boolean gasProof)`.

Per esempio:

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 loss/block
```

## Dati incantesimi

`gregtech.mods.EnchantmentData` può essere trovato in `SolidMaterial#toolEnchantments`, sono una memoria interna di un incantesimo con livelli.

Possono essere gettati in `crafttweaker.enchantments.IEnchantmentDefinition` chiamando `enchantment` getter, e il livello è disponibile con `level` getter.

Per aggiungere un incantesimo per gli strumenti in `SolidMaterial`, semplicemente chiamando `addToolEnchantment(Incantamento Incantesimo)`, per aggiungere un tipo di dati incantesimo CraftTweaker.

Esempio per un materiale Fortuna I:

```zenscript
var material = MaterialRegistry.get("iron"); // Modifica materiale di ferro
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // Crea un oggetto di incanto e aggiungilo
```

## Bandiere per la generazione di materiali

Queste bandiere sono applicabili ai materiali.

| Nome (insensibile al maiuscolo)   | Descrizione                                                                                                                                                                                                                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DECOMPOSITION_BY_ELECTROLYZING  | Abilita generazione di ricette di decomposizione elettrolitica                                                                                                                                                                                                                                      |
| DECOMPOSITION_BY_CENTRIFUGING   | Abilita la generazione di ricette di decomposizione centrifuga                                                                                                                                                                                                                                      |
| INCIDENZA                         | Aggiungi al materiale se ha costantemente bruciato aura                                                                                                                                                                                                                                             |
| FLAMMABILE                        | Aggiungere al materiale se è una sorta di infiammabile                                                                                                                                                                                                                                              |
| ESPLOSIVA                         | Aggiungere al materiale se si tratta di un tipo di esplosivo                                                                                                                                                                                                                                        |
| NO_UNIFICATION                    | Aggiungi al materiale per disabilitare completamente l'unificazione                                                                                                                                                                                                                                 |
| NO_RECYCLING                      | Aggiungi al materiale se uno qualsiasi dei suoi oggetti non può essere riciclato per ottenere lo scrub                                                                                                                                                                                              |
| DISABLE_DECOMPOSIZIONE            | Disabilita la generazione di ricette di decomposizione per questo materiale e tutti i materiali che lo contengono come componente                                                                                                                                                                   |
| DECOMPOSITION_REQUIRES_HYDROGEN | La ricetta di decomposizione richiede idrogeno come input aggiuntivo. L'importo è uguale all'importo in ingresso                                                                                                                                                                                    |
| PLATE_GENERATE_PLATE            | Genera una piastra per questo materiale, Se è materiale di polvere, la ricetta del compressore di polvere nel piatto sarà generata, Se è materiale metallico, le ricette della macchina piegante saranno generate, Se il blocco è trovato, verrà anche generata la ricetta della macchina da taglio |
| GENERATE_DENSE                    | Genera un piatto denso.                                                                                                                                                                                                                                                                             |
| NO_WORKING                        | Aggiungere al materiale se non può essere lavorato con altri mezzi, se non frantumare o fondere. Questo è usato per i materiali rivestiti.                                                                                                                                                          |
| NO_SMASHING                       | Aggiungere al materiale se non può essere utilizzato per le normali tecniche di lavorazione del metallo in quanto non è possibile piegarlo.                                                                                                                                                         |
| NO_SMELTING                       | Aggiungere al materiale se è impossibile fonderlo                                                                                                                                                                                                                                                   |
| INDUCTION_SMELTING_LOW_OUTPUT   | Aggiungi al materiale se sta producendo meno in una fonderia a induzione.                                                                                                                                                                                                                           |
| SMELT_INTO_FLUID                | Aggiungere al materiale se si scioglie in fluido (e genererà anche fluido per questo materiale)                                                                                                                                                                                                     |
| EXCLUDE_BLOCK_CRAFTING          |                                                                                                                                                                                                                                                                                                     |
| EXCLUDE_PLATE_COMPRESSOR_RECIPE |                                                                                                                                                                                                                                                                                                     |
| CRISTALLISABILE                   | Se questo materiale è cristallizzabile                                                                                                                                                                                                                                                              |
| LINE_GENERATE_LENSE             |                                                                                                                                                                                                                                                                                                     |
| HIGH_SIFTER_OUTPUT              |                                                                                                                                                                                                                                                                                                     |
| GENERATE_FLUID_BLOCK            | Ogni volta che il sistema deve generare blocco fluido per questo materiale fluido                                                                                                                                                                                                                   |
| GENERATE_PLASMA                   | Aggiungi questo flag per abilitare la generazione di plasma per questo materiale                                                                                                                                                                                                                    |
| GAS                               | Marca lo stato del materiale come gas                                                                                                                                                                                                                                                               |
| GENERATE_ROD                      |                                                                                                                                                                                                                                                                                                     |
| GEAR_GENERATE_TITLE             |                                                                                                                                                                                                                                                                                                     |
| ROD                               |                                                                                                                                                                                                                                                                                                     |
| MORTAR_GRINDABLE                  | Se questo Materiale è macinabile con un semplice Mortaio                                                                                                                                                                                                                                            |

## Set icone materiale

I set di icone sono disponibili in `mods.gregtech.material.MaterialIconSet`.

- Niente
- METALLICO
- DULL
- MAGNETICO
- QUARTZ
- DIAMONDO
- EMERALDO
- SHINY
- CONDIVIDI
- ROUGH
- FINE
- SANDIA
- FLINT
- RUBY
- LAPIS
- POLVERE
- FLUID
- GAS
- LIGNITE
- OPAL
- VETRO
- LEGNO
- LEAF
- GEM_HORIZONTAL
- VERTICALE
- LIBRO
- NETHERSTAR

Getters are `name`.

I metodi sono `toString()`e il metodo statico `getByName(Nome stringa)`.

## Registro Materiali

Il registro dei materiali è un aiutante per ottenere, elencare e creare materiali nel sistema di unificazione.

Puoi importare la classe `mods.gregtech.material.MaterialRegistry`.

### Utilizzo

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Nota che il tipo di reso può essere nullo se non è stato trovato nulla
var material = MaterialRegistry. et(materialName);

// Elenca tutti i materiali registrati
var materialList = MaterialRegistry. etAllMaterials();

// Imposta toolDurability a 0 se lingotto non può essere usato come strumento
// Nota che un parametro @Optional può essere lasciato fuori, ed è sostituito da default 0.
// Means Gem and Ingot material cannot be used as tool by default.
MaterialRegistry.createFluidMaterial(int metaItemSubId, Nome stringa, int color, String iconSet, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateDustMaterial(int metaItemSubId, nome stringa, colore int, iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateGemMaterial(int metaItemSubId, nome stringa, colore int, iconSet, int harvestLevel, @Optional MaterialStack[] materialComponenti, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry. reateIngotMaterial(int metaItemSubId, nome stringa, colore int, iconSet, int harvestLevel, @Optional MaterialStack[] materialComponenti, @Optional float toolSpeed, @Optional int toolDurabilità, @Optional int blastFurnaceTemperatura);
```

### Esempio

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val polvereMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
polvereMaterial. ddFlags(["GENERATE_ORE", "GENERATE_PLATE"]);

//Crea un materiale gemma con un tooltip che mostra la formula chimica
//Questo genera automaticamente una ricetta elettrolitica per dividere questo materiale nelle sue parti costituenti.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0);

//Qualsiasi materiale precedentemente registrato può essere usato- inclusi quelli personalizzati.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "shiny", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```