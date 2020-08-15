# `Klasa`

`Klasa` identyfikuje pojedynczą instancję typu, która jest narażona na ZenScript. Prawie wszystko w ZenScript jest w instancją klasy, czy jest to `IItemStack` (który jest instancją tej klasy) lub tablica ciągów ( jest instancją ciągu `string[]`).

## Szczegóły klasy
Klasa znajduje się w pakiecie `zenscriptx.reflect` , dzięki czemu `zenscriptx.reflect.Class` w pełni kwalifikowaną nazwę do importu.

## Tworzenie nowej instancji
Jedynym możliwym sposobem utworzenia nowej instancji klasy `` jest jedna z dwóch metod statycznych. które przyjmują nazwę klasy lub przedmiot do sprawdzenia. Poniższy fragment pokazuje podpisy dwóch metod, które mogą być użyte :

```zenscript
funkcjaNazwa(nazwa jako ciąg) jako klasa?;
funkcja od(instancja jako dowolna) jako klasa?;
```

Obie metody mogą zwrócić `null` (jak pokazują `?` na końcu typu) ponieważ istnieje możliwość , aby niektóre klasy nie miały odpowiednika ZenScript lub nie są w stanie być reprezentowane jako instancje klasy ``.

Poniżej przedstawiono przykłady wykorzystania dwóch metod fabrycznych:

```zenscript
Klasa .byName("crafttweaker.item.IItemStack"); # zwraca klasę, która reprezentuje klasę IItemStack
. rom(<blockstate:minecraft:pumpkin>); # zwraca klasę, która reprezentuje klasę IBlockState
. yName("123"); # zwraca puste, ponieważ żadna klasa o tej nazwie nie istnieje (lub może istnieć, w tym znaczeniu)
```

## Właściwości
`Klasa` zapewnia dostęp tylko do odczytu do określonego zestawu właściwości, jak przedstawiono w poniższej tabeli:

| Nazwa Właściwości     | Typ           | Opis                                                                                                                                            |
| --------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`          | `ciąg znaków` | Nazwa "Krótka", która może być użyta do odniesienia do klasy (tj. `IItemStack` dla `słabszego rzemieślnika. tem.IItemStack`, `ciąg` dla `ciąg`) |
| `nazwa kwalifikowana` | `ciąg znaków` | Pełna nazwa, która jednoznacznie identyfikuje tę klasę w środowisku ZenScript (tj. `crafttweaker.item.IItemStack` lub `ciąg`)                   |

## Metody
`Klasa` zapewnia również dostęp do jednej metody, która pozwala na konwersję na odpowiednik "natywny" (zob. [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) po więcej informacji). Podpis metody jest następujący:

```zenscript
Funkcja toNativeClass() jako NativeClass?;
```

Metoda może zwracać `null` , ponieważ nie wszystkie typy ZenScript mogą mieć natywny odpowiednik, np. niektóre tablice stowarzyszeniowe mogą nie być idealnie reprezentowane w środowisku rodzimym, co wymaga pewnego opanowania.
