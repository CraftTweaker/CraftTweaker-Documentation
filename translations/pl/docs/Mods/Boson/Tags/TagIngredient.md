# `Składnik`

`TagSkładnik` jest implementacją `ISkładnik` pozwalającą na użycie w przepisach [`Tag`](/Mods/Boson/Tags/Tag/). Możesz mieć dostęp tylko do tych danych spoza [`tagów` loader](/Mods/Boson/Loaders/Tags/). Aby uzyskać więcej informacji dotyczących tagów i jak je uzyskać, zapoznaj się z [tą stroną](/Mods/Boson/Tags/Concept/).

## Szczegóły klasy
Klasa znajduje się w pakiecie `net.thesilkminer.mc.boson.zen.tag` , tworząc `net.thesilkminer.mc.boson.zen.tag.TagIngredient` jego w pełni kwalifikowaną nazwę do importu.

## Tworzenie nowej instancji
Zobacz [dokumentację obsługi nawiasów](/Mods/Boson/Tags/BracketHandler/).

## `Składnik`
Ponieważ `TagSkładnik` jest `Składnikiem`, zapewnia dostęp do wszystkich właściwości i metod tego interfejsu. Aby uzyskać więcej szczegółów, zapoznaj się z na stronie [`ISkładnik`dokumentacji](/Vanilla/Variable_Types/IIngredient/). Ta strona dokumentacji przedstawia tylko dodatki i zapytania, które są szczególne dla tej klasy.

## Właściwości
`TagSkładnik` zapewnia dostęp tylko do odczytu do dodatkowego zestawu właściwości, jak przedstawiono w poniższej tabeli:

| Nazwa Właściwości | Typ                                       | Opis                                                                            |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------- |
| `tagName`         | [`NazwaSpacedString`](/Mods/Boson/Names/) | Nazwa, która jednoznacznie identyfikuje tag, do którego odnosi się ten składnik |

## Przykład

```zenscript
val Ingot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
