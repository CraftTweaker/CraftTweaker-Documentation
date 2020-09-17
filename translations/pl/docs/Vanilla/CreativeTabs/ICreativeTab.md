# Karta ICreative

ICreativeTabObject reprezentuje kartę kreatywnego ekwipunku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.creativetabs.ICreativeTab;`

## Uzyskiwanie takiego obiektu

Możesz pobrać ICreativeTab z [Kreatywnej Tabulatora](/Vanilla/Brackets/Bracket_CreativeTab/).

## ZenGetters i ZenMethods bez parametrów

| ZenGetter/ZenMethod | Typ zwrotu       |
| ------------------- | ---------------- |
| searchBarWidth      | odcień           |
| tabulator           | ciąg znaków      |
| setNoScrollBar()    | Unieważnij (nic) |
| setNoTitle()        | Unieważnij (nic) |

## Metoda ZenMethod

#### Ustaw nazwę obrazu tła

Używa ciągu znaków (np. `"item_search.png"`).  
Zwraca unieważnienie (nie ma znaczenia).

```zenscript
tab.setBackgroundImageName(Obraz tła ciągu);
```