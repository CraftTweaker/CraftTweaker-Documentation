# `TagType`

`Typ tagu` identyfikuje rodzaj przedmiotów, które mogą być przechowywane wewnątrz danego [`tagu`](/Mods/Boson/Tags/Tag/). Zawiera on również dodatkowe dane tylko do odczytu, które identyfikują pewien zestaw mnemoniki, które pomagają zidentyfikować typ w bardziej sposób przyjazny dla człowieka.

## Szczegóły klasy
Klasa znajduje się w pakiecie `net.thesilkminer.mc.boson.zen.tag` , dzięki czemu `net.thesilkminer.mc.boson.zen.tag.TagType` posiada w pełni kwalifikowaną nazwę do importu.

## Tworzenie nowej instancji
Nie jest możliwe utworzenie nowej instancji surowych tagów z CraftTweaker. Niemniej jednak możliwe jest uzyskanie typu danego `tagu` za pomocą jego właściwości. Zobacz [dokumentację dla `Tag`](/Mods/Boson/Tags/Tag/) aby uzyskać więcej informacji.

### Znane `TagType` instancje
Domyślnie Boson już tworzy określony zestaw typów tagów, który może być użyty w [uchwytach nawiasów](/Mods/Boson/Tags/BracketHandler/) do uzyskania wystąpień `tagu`s lub `tagu`s. Te mnemoniki zapisano w tabeli, która przedstawia się następująco:

| Mnemonik   | Przechowywane obiekty                          |
| ---------- | ---------------------------------------------- |
| `bloki`    | [`Stan IBlocka`](/Vanilla/Blocks/IBlockState/) |
| `płyny`    | (niedostępne obecnie przez CraftTweaker)       |
| `elementy` | [`IItemStack`](/Vanilla/Items/IItemStack/)     |

## Właściwości
`TagType` zapewnia dostęp tylko do odczytu do określonego zestawu właściwości, zgodnie z poniższą tabelą:

| Nazwa Właściwości    | Typ                                                                   | Opis                                                                                       |
| -------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `directoryName`      | `ciąg znaków`                                                         | Nazwa katalogu, w którym tagi JSONs znajdują się w pakiecie danych                         |
| `Nazwa`              | `ciąg znaków`                                                         | Mnemonik, który identyfikuje dany typ znacznika; używany w uchwytach wsporników znaczników |
| `classType`          | [`Klasa`](/Mods/Boson/Reflection/Class/)                              | Typ obiektów przechowywanych w tagu                                                        |
| `funkcja konwertera` | [`Funkcja<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Konwertuje nazwy na elementy tagów                                                         |
