# DropTableBuilder

DropTableBuilder jest używany do tworzenia ciągów „drops” dla rud i próbek, które obsługują upuszczanie wielu stosów przedmiotów na raz, stosy elementów, które zawierają więcej niż jeden element, oraz ważone łupy.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.DropTableBuilder;`

## Metody

Metody te pozwalają na stworzenie i modyfikację tabeli punktów. Wszystkie metody konstrukcyjne zwracają konstruktora do ich uruchomienia, co pozwala na metody łańcuchowe.

| Nazwa metody    | Opis                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| newSlot()       | Tworzy nową tabelę upuszczania, jeśli uruchamia się statycznie lub dodaje nowe gniazdo do tabeli upuszczania. |
| dodajelement()  | Dodaje określony element do bieżącego gniazda tabeli upuszczania.                                             |
| enableFortune() | Umożliwia obecnemu slotowi korzystanie z zaklęcia szczęścia.                                                  |

### Użycie:

#### `newSlot()`

DropTableBuilder.newSlot() stworzy nowego budownika. \<builder\>.newSlot() zakończy bieżący slot i rozpocznie nowy.

#### `addItem(String itemStr[, int weight[, int count]])`

`itemStr` może być nazwą przedmiotu taką jak \<mod\>:\<item\>:\<meta\>, wpisem słownika rudy takim jak oredykt:\<entry\>lub słowo puste. `waga` kontroluje prawdopodobieństwo spadku przedmiotu za pomocą wzoru \<item weight\>/\<sum of item weights within slot\>. Wartość domyślna 1 w przypadku pominięcia. `count` to ile przedmiotów spada, jeśli wybrano. Wartość domyślna 1 w przypadku pominięcia.

#### `enableFortune()`

Sloty, które mają włączone szczęście wybierze liczbę dodatkowych przedmiotów z gniazda do poziomu użytego szczęścia. Dopasuje zachowanie wanilii na slotach, które mają tylko 1 przedmiot.

## Przykłady użycia konstruktora

### Tworzenie tabeli upuszczenia

```zenscript
var complex = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("pusty");
```

Ta kropla spadnie 2 diamenty (10%) lub 1 węgiel (90%) czerpiący korzyści z fortunu, 1 kamienia (100%) i 1 bruk (50%).

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   . ddItem("minecraft:lapis_lazuli", 1, 4)
                   . ddItem("minecraft:lapis_lazuli", 1, 5)
                   . ddItem("minecraft:lapis_lazuli", 1, 6)
                   . ddItem("minecraft:lapis_lazuli", 1, 7)
                   . ddItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

Ta kropla stół naśladuje wanilię lapis, spadając 4-8 lapis i czerpie korzyści z fortunu.

### Używanie tabeli upuszczenia

Budynki są używane, przypisując je jako wartość danych "spadków". Ponieważ wartości danych akceptują tylko ciągi znaków, konstruktor będzie nadawany jako ciąg znaków przy użyciu metody toString.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
kompleks var = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable);
complexData.addDataValue("drops",complex table+lapistable);
```

Po dodaniu 2 budowli tworzy się nową tabelę z miejsc z obu tabel.