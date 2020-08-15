# Kreator części

Jeśli chcesz zbudować [Część](/Mods/ContentTweaker/Materials/Parts/Part/), będziesz potrzebował Budowniczego Części!  
Nie brzmi tak ciężko, prawda?

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.PartBuilder;`

## Pobieranie takiego obiektu

Możesz pobrać nowy, wyczyść Konstruktor używając [Pakietu MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Ustaw właściwości części

Możesz ustawić te właściwości

| Metoda ZenMethod                    | Parametr                                                             |
| ----------------------------------- | -------------------------------------------------------------------- |
| setHasOverlay(hasOverlay)           | boolean hasOverlay                                                   |
| setName(nazwa)                      | nazwa ciągu                                                          |
| setPartType(partType)               | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partyType |
| setOreDictName(prefix)              | prefiks ciągu znaków                                                 |
| setAdditionalOreDictNames(prefiksy) | ciąg znaków... prefixes                                              |

Wszystkie te metody robią 2 rzeczy: po pierwsze, zmieniają własność konstruktora, po drugie, zwracają zmodyfikowanego konstruktora.  
W przykładowych skryptach poniżej możesz zobaczyć co to oznacza.

## W rzeczywistości buduj materiał

Zanim będziesz mógł zbudować swój materiał, musisz go zbudować:

```zenscript
pBuilder.build();
```

To zwraca obiekt [Część](/Mods/ContentTweaker/Materials/Parts/Part/).

## Przykładowy skrypt

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build();
```

## Informacja godna uwagi

### Lokalizacja Części Materiałowych

Elementy, które tworzysz w nowej części, będą na ogół nazwane `contenttweaker.part. artname`  
Jeśli chcesz, aby Twój przedmiot zawierał nazwę materiału, musisz go zlokalizować, najlepiej w plikach językowych CoT, które można znaleźć pod adresem `Zasoby/contenttweaker/lang`.  
Zamiast nazwy materiału, którą wpisujesz `%s`więc nazewnictwo gęstych narzędzi utworzonych powyżej wyglądałoby tak:

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s Sztabka
    

### Dodawanie tekstury

Przedmioty, które tworzysz w nowej części, będą dla Ciebie nieco edycyjne.  
Jeśli chcesz, aby Twoja część miała określoną ikonę, musisz dodać `nazwę części.` plik do `Zasoby/contenttweaker/textures/items`.  
Tak więc nadanie gęstych narzędzi teksturze wymagałoby dodania pliku o nazwie `gear_dense.` do tego folderu.