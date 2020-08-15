# Obsługa nawiasów

ZenScript używa nawiasów do odniesienia obiektów gry, takich jak Przedmioty, Jednostki i O­ct.

## Jak używać uchwytów z nawiasem

nawiasy w ZenScript są zdefiniowane przy użyciu znaków `<` i `>` , cokolwiek wewnątrz tych znaków jest uważane za nawias.

Przykładem obsługi nawiasów będzie obsługa nawiasów przedmiotów, która daje Ci dostęp do przedmiotów wewnątrz gry.

## Przykłady

Przykładem [uchwytu przedmiotów](/Vanilla/Brackets/Bracket_Item/) byłoby:

```zenscript
<minecraft:apple>
```

To da Ci dostęp do `Apple` [element](/Vanilla/Items/IItemStack/).

Przykładem [Obsługi nawiasów OreDictEntry](/Vanilla/Brackets/Bracket_Ore/) byłoby:

```zenscript
<ore:ingotIron>
```

To da Ci dostęp do [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) dla `ingotIron`.