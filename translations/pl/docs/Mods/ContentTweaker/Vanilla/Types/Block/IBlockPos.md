# IBlockPos

Obiekt IBlockPos reprezentuje pozycję w grze.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.BlockPos;`

## Metody ZenMethods bez parametrów

| Metoda ZenMethod | ZenGetter | Typ zwrotu | Opis                     |
| ---------------- | --------- | ---------- | ------------------------ |
| getX()           | x         | odcień     | Zwraca wartość X pozycji |
| getY()           | y         | odcień     | Zwraca wartość Y pozycji |
| getZ()           | z         | odcień     | Zwraca wartość Z pozycji |

## Metody ZenMethods z parametrami

### Pobierz przesunięcie

Zwraca nowy IBlockPos, który jest `przesunięciem` bloków w `kierunek` lub `zwrócony w kierunku`.

`IBlockPos getOffset(Tring directionName, int offset);`

`directionName` może przyjąć następujące wartości:

- "dół"
- "do góry"
- „północ”
- "południe"
- „wschód”
- "zachod"

`IBlockPos getOffset(Facing facing, int offset)` Parametry:

- [zwrócenie](/Vanilla/World/IFacing/) zwrócone w kierunku → Kierunek
- int offset → ile bloków w tym kierunku?