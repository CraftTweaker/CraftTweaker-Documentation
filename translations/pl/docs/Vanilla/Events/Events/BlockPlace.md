
# BlockPlaceEvent

Wydarzenie BlockBreak jest uruchamiane za każdym razem, gdy blok jest umieszczony. Możesz anulować wydarzenie, aby zapobiec umieszczeniu bloku.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. lockPlaceEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
BlockPlace Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | ZenSetter | Typ                                          |
| ---------- | --------- | -------------------------------------------- |
| `gracz`    |           | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `bieżący`  |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `PostedAW` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `dłoń`     |           | Ciąg znaków                                  |
