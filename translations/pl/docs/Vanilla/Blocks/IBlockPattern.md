# Wzór IBlock'a

IBlockPattern jest interfejsem pozwalającym na łączenie kilku bloków w jeden obiekt.  
Jest on porównywalny do tego, czym jest [Interfejs](/Vanilla/Variable_Types/IIngredient/) dla [IItemStacks](/Vanilla/Items/IItemStack/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.block.IBlockPattern;`

## Wywołanie obiektu IBlockPattern

Technicznie za każdym razem, gdy nazywasz obiektem [IBlock](/Vanilla/Blocks/IBlock/) , wywołujesz obiekt IBlockPattern.  
Istnieją jednak przypadki, gdy wyraźnie otrzymasz obiekt IBlockPattern jako powrót.

* LUB dwa [bloków IBlock](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter          | Co to robi                                         | Typ zwrotu                              |
| ------------------ | -------------------------------------------------- | --------------------------------------- |
| bloki              | Lista wszystkich możliwych bloków dla tego obiektu | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| nazwa wyświetlacza | Zwraca wyświetlacze pasujących bloków              | ciąg znaków                             |

## LUB

Możesz LUB dwa obiekty IBlockPattern używając OR `|` Operator

## Dopasowanie

Możesz sprawdzić, czy IBlockPatternObject zawiera inny obiekt używając `w słowie kluczowym` .  
Na przykład możesz sprawdzić, czy blok jest w IBlockPattern.