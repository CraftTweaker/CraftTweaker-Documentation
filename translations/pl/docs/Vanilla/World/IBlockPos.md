# IBlockPos

Obiekt IBlockPos reprezentuje pozycję w grze.

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;`

## Metody ZenMethods bez parametrów

| Metoda ZenMethod | ZenGetter/Caster | Typ zwrotu                                | Opis                                       |
| ---------------- | ---------------- | ----------------------------------------- | ------------------------------------------ |
| getX()           | x                | odcień                                    | Zwraca wartość X pozycji                   |
| getY()           | y                | odcień                                    | Zwraca wartość Y pozycji                   |
| getZ()           | z                | odcień                                    | Zwraca wartość Z pozycji                   |
| asPosition3f     | as IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | Returns the position as Position3f Object. |

## Metody ZenMethods z parametrami

### Pobierz przesunięcie

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](/Vanilla/World/IFacing/) objects using the static methods provided there.

- [IFacing](/Vanilla/World/IFacing/) direction → The direction
- int offset → ile bloków w tym kierunku?