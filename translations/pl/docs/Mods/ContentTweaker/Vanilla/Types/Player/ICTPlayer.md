# Warstwa ICTP

ICTPlayer jest specjalnym obiektem [IPlayer](/Vanilla/Players/IPlayer/) ContentTweakera.  
Oznacza to, że wszystkie metody [IPlayera](/Vanilla/Players/IPlayer/) są również dostępne na tym obiekcie!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.Player;`

## Metody ZenMethods

`IMutableItemStack getHeldItem(Hand hand);`

Parametry:

- [Dłoń](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) dłoń → Główna lub wyłączona ręka

Zwraca [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) trzymany w podanej [ręce](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/).