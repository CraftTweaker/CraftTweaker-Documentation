# IBlockPos

Obiekt IBlockPos reprezentuje pozycję w grze.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.world.IBlockPos;`

## Metody ZenMethods bez parametrów

| Metoda ZenMethod | ZenGetter/Mistrz | Typ zwrotu                                | Opis                                   |
| ---------------- | ---------------- | ----------------------------------------- | -------------------------------------- |
| getX()           | x                | odcień                                    | Zwraca wartość X pozycji               |
| getY()           | y                | odcień                                    | Zwraca wartość Y pozycji               |
| getZ()           | z                | odcień                                    | Zwraca wartość Z pozycji               |
| asPosition3f     | jako IPosition3f | [IPosition3f](/Vanilla/Utils/Position3f/) | Zwraca pozycję jako obiekt Position3f. |

## Metody ZenMethods z parametrami

### Pobierz przesunięcie

Zwraca nowy IBlockPos, który jest `przesunięciem` bloków w `kierunek`.

`IBlockPos getOffset(kierunek IFacing, przesunięcie);`

Alternatywnie możesz bezpośrednio uzyskać obiekty [IFacing](/Vanilla/World/IFacing/) za pomocą podanych tam metod statycznych.

- [Kierunek IFacing](/Vanilla/World/IFacing/) → Kierunek
- int offset → ile bloków w tym kierunku?