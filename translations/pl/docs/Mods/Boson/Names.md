# Nazwiska w Boson

W Minecrafcie większość obiektów jest identyfikowana za pomocą unikalnych nazw. Np. elementy używają ich nazwy rejestru, aby być unikalnie zidentyfikowane i nie może istnieć więcej niż jedna pozycja o tej samej nazwie rejestru.

Większość nazw w Minecraft podąża za sztywną strukturą, zidentyfikowaną przez ciąg znaków z przestrzenią nazw i ścieżką oddzieloną dwukropkiem (np. `minecraft:iron_ingot`, gdzie `minecraft` jest przestrzenią nazw a `iron_ingot` jest ścieżką). W CraftTweaker większość z tych nazw przedstawia się jako surowe ciągi, ale w Boson jest to mrożone. W rzeczywistości użycie surowego ciągu `` może mylić ludzi co do tego, czy wywołanie metody oczekuje ciągu znaków z przestrzenią nazw lub bez. Z tego powodu Boson oddzielił użycie ciągów nienazwanych od ciągów nazw.

Ciągi nienazwane są reprezentowane jako instancje `string`, wśród wszystkich bośniackich API. Aby uzyskać więcej informacji, zapoznaj się z dokumentacją ZenScript.

Ciągi nazw są reprezentowane jako instancje `NameSpacedString`, wśród wszystkich bośniackich API. Aby uzyskać więcej informacji o tym, jak uzyskać takie ciągi, zapoznaj się z następną sekcją.

## `NameSpacedString` Dokumentacja
Klasa `NameSpacedString` znajduje się w pakiecie `net.thesilkminer.mc.boson.zen.naming`.

### Tworzenie nowej instancji
Istnieją dwa sposoby na utworzenie `NameSpacedString`: przy użyciu metody fabrycznej lub za pomocą ciągu ``.

Sugerowane podejście stanowi metodę fabryczną. Ze względu na to, że jest to metoda statyczna, można ją powoływać bezpośrednio na instancję klasy . Poniżej przedstawiono podpis metody i przykład jej zastosowania:

```zenscript
funkcja z(nazwaSpacja jako ciąg?, ścieżka jako ciąg) jako nazwaSpacedString;
```

```zenscript
NazwaSpacedString.from("minecraft", "iron_ingot"); // odpowiednik minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // używa domyślnej przestrzeni nazw 'minecraft'
```

Przetwarzanie drogi opiera się raczej na jawnym przekazie z `ciągu` do `NameSpacedString` , używając `jako` operatora w ZenScript:

```zenscript
"minecraft:iron_ingot" jako nazwaSpacedString;
```

### Właściwości
`NameSpacedString` zapewnia dostęp tylko do odczytu zarówno do jej przestrzeni nazw jak i jej ścieżki poprzez właściwości:

| Nazwa Właściwości  | Typ           | Opis                                                                |
| ------------------ | ------------- | ------------------------------------------------------------------- |
| `Przestrzeń nazwy` | `ciąg znaków` | Pobiera część przestrzeni nazw `NameSpacedString` (np. `minecraft`) |
| `ścieżka`          | `ciąg znaków` | Pobiera część ścieżki `NameSpacedString` (np. `iron_ingot`)         |

### Metody

#### `asString`
`NameSpacedString` można przekształcić z powrotem w regularny `ciąg` za pomocą metody `asString`. Poniżej znajduje się podpis metody i przykład jej użycia:

```zenscript
funkcja asString() jako ciąg;
```

```zenscript
val nss = NazwaSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // Drukuje 'minecraft:iron_ingot' do dziennika
```
