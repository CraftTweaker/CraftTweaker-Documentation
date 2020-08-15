# Prędkość łamania gracza

Wydarzenie Szybkości Gracza jest uruchamiane za każdym razem, gdy gracz próbuje zniszczyć blok.  
Można anulować aby uniemożliwić graczowi zniszczenie tego bloku.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerBreakSpeedEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerBreakSpeed zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter           | ZenSetter     | Typ                                          |
| ------------------- | ------------- | -------------------------------------------- |
| Blokada             |               | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| blok                |               | [IBlock](/Vanilla/Blocks/IBlock/)            |
| początkowa prędkość |               | zmiennoprzecinkowe                           |
| nowa prędkość       | nowa prędkość | zmiennoprzecinkowe                           |