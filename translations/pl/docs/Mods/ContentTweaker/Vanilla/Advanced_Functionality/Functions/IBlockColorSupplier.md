# Dostawca Kolorów IBlock'a

Funkcja IBlockColorSupplier może być użyta do dostarczenia [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) dla wszystkich.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IBlockColorSupplier;`

## Parametry

Funkcja IBlockColorSupplier jest funkcją z następującymi parametrami.

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Stan → stan blokady bloku, którego kolor jest żądany.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) dostęp → dostęp do bloku bloku, którego kolor jest żądany.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → pozycja bloku, którego kolor jest żądany.
- int tintIndex → indeks odcienia, użyj tego, jakkolwiek chcesz. Funkcja musi zwracać obiekt koloru [](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Przykłady

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker. orld.IBlockAccess;

funkcja getBlockColor(stan jako BlockState, dostęp jako IBlockAccess, pos jako BlockPos, tintIndex jako int) jako Color {
  //Zwraca kolor wapna
    kolor zwrotny. romInt( (0x00FF00);
}
```