# `Natywna Klasa`

`NativeClass` identyfikuje instancję klasy środowiska backendu stojącego za ZenScript. W przypadku CraftTweaker, `NativeClass` reprezentuje zatem klasę Java.

## Szczegóły klasy
Klasa znajduje się w pakiecie `zenscriptx.reflect` , dzięki czemu `zenscriptx.reflect.NativeClass` jest w pełni kwalifikowaną nazwą do importu.

## Tworzenie nowej instancji
Jedynym możliwym sposobem na utworzenie nowej instancji `NativeClass` jest jedna z dwóch metod statycznych. które podaje(-ją) nazwę klasy lub obiektu do sprawdzenia. Poniższy fragment pokazuje podpisy dwóch metod, które można użyć :

```zenscript
funkcjaNazwa(nazwa jako ciąg) jako NativeClass?;
funkcja fromZen(instancja jako dowolna) jako NativeClass?;
```

Obie metody mogą zwrócić `null` (jak pokazują `?` na końcu typu) ponieważ istnieje możliwość , aby niektóre klasy nie istniały lub nie miały odpowiednika do zaplecza. W rzeczywistości niektóre konkretne tablice stowarzyszeniowe mogą być niereprezentatywne w tylnej części i wymagają poprawnego użycia pewnego manekina.

Poniżej przedstawiono przykłady wykorzystania dwóch metod fabrycznych:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # zwraca NativeClass o podanej nazwie
NativeClass. romZen(<blockstate:minecraft:pumpkin>); # zwraca NativeClass która odpowiada klasie IBlockState
NativeClass. yName("123"); # zwraca puste, ponieważ żadna natywna klasa o tej nazwie nie może istnieć
```

## Właściwości
`NativeClass` zapewnia dostęp tylko do odczytu do określonego zestawu właściwości, zgodnie z poniższą tabelą:

| Nazwa Właściwości     | Typ           | Opis                                                                                                                                                              |
| --------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`          | `ciąg znaków` | Nazwa "Krótka", która może być użyta do odniesienia do klasy (tj. `IItemStack` dla `słabszego rzemieślnika. pi.item.IItemStack`, `String` dla `java.lang.String`) |
| `nazwa kwalifikowana` | `ciąg znaków` | Pełna nazwa, która jednoznacznie identyfikuje tę klasę w backend środowiska (tj. `crafttweaker.api.item.IItemStack` lub `java.lang.String`)                       |

## Metody
`NativeClass` zapewnia również dostęp do jednej metody, która pozwala na konwersję na odpowiednik ZenScript (zob. [`Klasa`](/Mods/Boson/Reflection/Class/) aby uzyskać więcej informacji). Podpis metody jest następujący:

```zenscript
funkcja toClass() jako klasa?;
```

Metoda może zwracać `null` , ponieważ nie wszystkie natywne klasy mogą mieć reprezentację w ZenScript. W rzeczywistości istnieją części zaplecza, które nie są narażone na kontakt z użytkownikami ZenScript, takie jak `org.apache.commons. ang3.Bitfield`, który nie może być reprezentowany przez obiekt ZenScript `Klasa`.
