# Materiał

## Zadzwonienie do pakietu

Pakiet `mods.gregtech.material` zawiera wszystkie klasy, które będziesz musiał uporać się z materiałami.

## Obiekt Material

Obiekt `mods.gregtech.material.Material` reprezentuje materiał w GregTech, z kilkoma przydatnymi użytkownikami, z którymi możesz sobie poradzić.

Właściwości:

| Nazwisko           | Typ                               | Opis                                                        |
| ------------------ | --------------------------------- | ----------------------------------------------------------- |
| kolor              | odcień                            | Kolor materiału w formacie RGB                              |
| chemikalia         | ciąg znaków                       | Wzór chemiczny tego materiału                               |
| zestaw ikon        | MaterialIconSet                   | Zestaw ikon dla tego materiału generowanie meta-przedmiotów |
| komponenty         | Lista niezmiennych<materialstack> | Lista tego składnika materiału                              |
| generationFlagsRaw | długie                            | Generowanie flagi tego materiału (Patrz MatFlagi)           |
| element            | Element                           | Element tego materiału składa się z                         |

Ketanty:

| Nazwisko        | Typ         | Opis                                            |
| --------------- | ----------- | ----------------------------------------------- |
| radioactive     | bool        | Prawdziwe, jeśli ten materiał jest radioaktywny |
| protons         | długie      |                                                 |
| neutrony        | długie      |                                                 |
| Masa            | długie      |                                                 |
| gęstość         | długie      |                                                 |
| camelCaseString | ciąg znaków |                                                 |
| unlocalizedName | ciąg znaków |                                                 |
| localizedName   | ciąg znaków | Tylko po stronie klienta                        |
| Nazwa           | ciąg znaków | Nazwa w rejestrze materiałów                    |

Metody:

| Nazwa (parametry)              | Opis                      |
| ------------------------------ | ------------------------- |
| addFlags(String... Nazwy flag) | Dodaj flagi generacyjne   |
| hasFlag(flaga ciągu)           | Posiada flagę generacyjną |

`Stos MaterialStack` może być utworzony przez `materiał * numer`, tak samo jak [ilość składnika](/Vanilla/Variable_Types/IIngredient.md) lub płynnego Stack.

### FluidMaterial

`Materiał płynny` to materiał zawierający funkcje płynu. Jego superklasa to `Material` , więc wszyscy członkowie w `Materiale` są nadal dostępni.

Właściwości:

| Nazwisko          | Typ    | Opis |
| ----------------- | ------ | ---- |
| temperatura płynu | odcień |      |

Ketanty:

| Nazwisko    | Typ                                                          | Opis             |
| ----------- | ------------------------------------------------------------ | ---------------- |
| hasFluid    | bool                                                         |                  |
| faza osocza | bool                                                         |                  |
| iGazowy     | bool                                                         |                  |
| płyn        | [Definicja płynności](/Vanilla/Liquids/ILiquidDefinition.md) | płyn materiałowy |
| osocza      | [Definicja płynności](/Vanilla/Liquids/ILiquidDefinition.md) | płyn plazmowy    |

### Materiał pyłowy

`Materiał pyłowy` to materiał zawierający funkcje pyłu. Jego superklasa to `Materiał Płynny` , więc wszyscy członkowie w `Materiale płynnym` są nadal dostępni.

Właściwości:

| Nazwisko                  | Typ             | Opis                                                                                                                                                       |
| ------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier             | odcień          | Mnożnik wielkości wydobycia rudy skrupulatnej podczas maceracji                                                                                            |
| Mnożnik produktów byt     | odcień          | 530***Byproducts output amount multiplier during pulverization                                                                                            |
| Mnożnik wytapiania        | odcień          | Mnożnik ilości przedmiotów wytapiania podczas wytapiania przedmiotów wanilii                                                                               |
| bezpośrednie Przetapianie | SolidMaterial   | Materiał, do którego dojdzie wytapianie tej rudy                                                                                                           |
| umyta                     | FluidMaterial   | Materiał, w którym ruda tego materiału powinna zostać przepłuczona, aby uzyskać dodatkowe dane wyjściowe                                                   |
| separatedInto             | Materiał pyłowy | Podczas separacji elektromagnetycznej ruda materiału zostanie rozdzielona na ten materiał i materiał określony w tym polu                                  |
| spalony Czas              | odcień          | Czas spalania tego materiału stosowany jako paliwo w wytapianiu pieca, wartość zerowa lub ujemna wskazuje, że materiał ten nie może być użyty jako paliwo. |

Ketanty:

| Nazwisko                    | Typ                  | Opis                                                          |
| --------------------------- | -------------------- | ------------------------------------------------------------- |
| [PLACEHOLDER] oreByProducts | Lista<fluidmaterial> | Lista rud według produktów                                    |
| poziom zbierania            | odcień               | Poziom narzędzia potrzebny do pozyskania bloku tego materiału |

### SolidMaterial

`Materiał SolidMaterial` to materiał zawierający solidne funkcje. Jego superklasa to `DustMaterial` , więc wszyscy członkowie w `DustMaterial` są nadal dostępni.

Właściwości:

| Nazwisko       | Typ             | Opis                                                                                                                   |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial   | Materiał określony tutaj będzie wymagany jako uchwyt do stworzenia narzędzia z tego materiału                          |
| macerateInto   | Materiał pyłowy | Maceracja dowolnego elementu tego materiału spowoduje powstanie materiału określonego w tym polu, domyślnie dla siebie |

Ketanty:

<table>
  <tr>
    <th>
      Nazwisko
    </th>
    
    <th>
      Typ
    </th>
    
    <th>
      Opis
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      zmiennoprzecinkowe
    </td>
    
    <td>
      Prędkość narzędzi wykonanych z tego materiału, domyślnie 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      Wytrzymałość narzędzi
    </td>
    
    <td>
      odcień
    </td>
    
    <td>
      Trwałość narzędzi wykonanych z tego materiału, 0 dla materiałów, które nie mogą być użyte do narzędzi
    </td>
  </tr>
  
  <tr>
    <td>
      Zaklęcia narzędzi
    </td>
    
    <td>
      Lista<enchantmentdata>
    </td>
    
    <td>
      Zaklęcie do zastosowania w narzędziach wykonanych z tego materiału
    </td>
  </tr>
</table>

### IngotMaterial

`Sztaby` to tło zawierające sztaby funkcje. Jej superklasa to `SolidMaterial` , więc wszyscy członkowie w `SolidMaterial` są nadal dostępni.

Sztaby, materiały mogą być użyte jako przewody przewodowe, kablowe i płynne. Właściwości te można ustawić na podstawie `setCableProperties(długie napięcie, baza inteAmperage, int lossPerBlock)` i `setFluidPipeProperties(int throughput, maxTemperature, boolean gasProof)`.

Na przykład:

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 strata/block
```

## Dane zaklęcia

`gregtech.mods.EnchantmentData` można znaleźć w `SolidMaterial#toolEnchantments`, są to wewnętrzne przechowywanie zaklęć z poziomami.

Można je przełożyć na `crafttweaker.enchantments.IEnchantmentDefinition` wywołując `zaczarowanie` get, a poziom jest dostępny z `poziomem` pobierającym.

Aby dodać zaklęcie dla narzędzi w `SolidMaterial`, po prostu wywołaj `addToolEnchantment(IEnchantment Zaklęcia)`, aby dodać typ danych zaklęcia rzemieślnika.

Przykład materiału Fortuny I:

```zenscript
var material = MaterialRegistry.get("iron"); // Modyfikuj materiał żelaza
materiał.addolEnchantment(<enchantment:minecraft:fortune> * 1); // Utwórz obiekt zaklęcia i dodaj go
```

## Flagi generujące materiały

Bandary te mają zastosowanie do materiałów.

| Nazwa (wielkość liter nie ma znaczenia) | Opis                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dekompresja                             | Umożliwia generowanie przepisów dotyczących rozkładu elektrolitu                                                                                                                                                                                                                                 |
| CENTRIFLE_BTN                           | Umożliwia generowanie receptury rozkładu wirówek                                                                                                                                                                                                                                                 |
| NAGRODZENIE                             | Dodaj do materiału, jeśli stale pali aurę                                                                                                                                                                                                                                                        |
| FLAMMABLE                               | Dodaj do materiału, jeśli jest to jakiś rodzaj łatwopalny                                                                                                                                                                                                                                        |
| WYKRYWANIE                              | Dodaj do materiału, jeśli jest to jakiś rodzaj materiału wybuchowego                                                                                                                                                                                                                             |
| Niejednoznaczność                       | Dodaj do materiału, aby w pełni zjednoczyć go                                                                                                                                                                                                                                                    |
| NO_RECYLING                             | Dodaj do materiału, jeśli żaden z jego elementów nie może zostać poddany recyklingowi, aby uzyskać skrub                                                                                                                                                                                         |
| WYŁĄCZ dekompozycji                     | Wyłącza generowanie receptury na rozkład dla tego materiału i wszystkich materiałów, które mają go jako składnik                                                                                                                                                                                 |
| Hipoteza budowy                         | Przepis na rozkład wymaga wodoru jako dodatkowego wkładu. Kwota jest równa kwocie wprowadzonej                                                                                                                                                                                                   |
| GENERU_PLAYLIST                         | Wygeneruj płytkę dla tego materiału, jeśli jest to materiał pyłowy, przepis na sprężarkę pyłu zostanie wygenerowany, Jeśli jest to metalowy materiał, zostaną wygenerowane przepisy maszyny do zginania, jeśli zostanie znaleziony blok, zostanie również wygenerowany przepis maszyny do cięcia |
| GENERU_DENS_DENS                      | Wygeneruj gęstą płytkę.                                                                                                                                                                                                                                                                          |
| Brak informacji                         | Dodaj do materiału, jeśli nie można go użyć w żaden inny sposób niż rozbijanie lub wytapianie. Stosuje się je w przypadku materiałów powlekanych.                                                                                                                                                |
| Brak SMASINGU                           | Dodać do materiału, jeśli nie może on być używany do zwykłych technik obróbki metali, ponieważ nie można go zakręcić.                                                                                                                                                                            |
| NO_SMELTING                             | Dodaj do materiału, jeśli przetapianie go jest niemożliwe                                                                                                                                                                                                                                        |
| INUCTION_SMELING_LABEL                | Dodać do materiału, jeśli wytwarza mniej w hucie indukcyjnej.                                                                                                                                                                                                                                    |
| FLUID                                   | Dodaj do materiału, jeśli przetopi się w płyn (i będzie również generował płyn dla tego materiału)                                                                                                                                                                                               |
| WYŁĄCZONE_BLOCK_CRIPTION              |                                                                                                                                                                                                                                                                                                  |
| PLATE_POPUP_TITLE                     |                                                                                                                                                                                                                                                                                                  |
| KRYSTALIZOWANE                          | Jeśli ten materiał jest krystaliczny                                                                                                                                                                                                                                                             |
| Szerokość                               |                                                                                                                                                                                                                                                                                                  |
| Siatka                                  |                                                                                                                                                                                                                                                                                                  |
| Blok jest zablokowany                   | Za każdym razem, gdy system powinien wytwarzać blok płynu dla tego materiału płynnego                                                                                                                                                                                                            |
| GENERATE_PLASMA                         | Dodaj tą flagę, aby włączyć generowanie plazmy dla tego materiału                                                                                                                                                                                                                                |
| Stan Gaz                                | Zaznacza stan materiału jako gaz                                                                                                                                                                                                                                                                 |
| GENERU_ROD                              |                                                                                                                                                                                                                                                                                                  |
| GENERU_GROU_LABEL                     |                                                                                                                                                                                                                                                                                                  |
| Długość obrotu                          |                                                                                                                                                                                                                                                                                                  |
| Wielościenne                            | Jeśli ten materiał jest mielony prostym moździerzem                                                                                                                                                                                                                                              |

## Zestaw ikon materiału

Zestawy ikon są dostępne w `mods.gregtech.material.MaterialIconSet`.

- NIEPOŻĄDANE
- METALICZNE
- DULL
- MAGNETIC
- QUARTZ
- DIAMONA
- NIEBEZPIECZENIE
- SHINY
- PODSTAWY
- RUMUNIA
- GŁÓWNY
- SANDIA
- FLINA
- RUBY
- LAPIS
- PROSZEK
- FLUID
- GAS
- LIGNITE
- OPALNY
- SZKŁA
- WOOD
- LEAF
- HORYZONALNE
- Pionowe
- PAPIERY
- NETHERSTAR

Getters to `name`.

Metody to `toString()`i metoda statyczna `getByName(String name)`.

## Rejestr materiałów

Rejestr materiałów jest pomocnikiem do pobierania, wyświetlania i tworzenia materiałów w systemie zjednoczenia.

Możesz zaimportować klasę `mods.gregtech.material.MaterialRegistry`.

### Użycie

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Zauważ, że zwracany typ może być zerowy, jeśli nic nie zostanie znalezione
var material = MaterialRegistry. et(materialName);

// Lista wszystkich zarejestrowanych materiałów
var MateriList = MaterialRegistry. etAllMateri();

// Ustaw trwałość narzędzia na 0 jeśli ingot nie może być użyty jako narzędzie
// Pamiętaj, że @Opcjonalny parametr może zostać pominięty, i jest zastąpiony domyślnie 0.
// Oznacza materiał klejnoty i sztabki nie może być domyślnie używany jako narzędzie.
MaterialRegistry.createFluidMaterial(int metaItemSubId, String, int Color, String iconSet, @Optional MaterialStack[] MaterialRegistry.

MaterialRegistry. reateDustMaterial(int metaItemSubId, nazwa ciągu, kolor int, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateGemMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int ToTrability);

MaterialRegistry. reateIngotMaterial(int metaItemSubId, Nazwa stringu, kolor int, String iconSet, int harvestLevel, @Optional MaterialStack[] MateriComponents @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### Przykład

```zenscript
#loader gregtech
import mods.gregtech.MaterialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial. ddFlags(["GENERATE_ORE", "GENERATE_PLATE"]);

//Tworzy materiał klejnotowy z przyrządem pokazującym wzór chemiczny
//To automatycznie generuje przepis na elektrolizę, aby podzielić ten materiał na jego części.
Wal gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0);

//Każdy wcześniej zarejestrowany materiał może być użyty, w tym materiał niestandardowy.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "shiny", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```