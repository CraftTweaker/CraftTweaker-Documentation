# Wydarzenie Przyrostu

Wydarzenie „Rośliny rosnące” jest rozpalane, gdy uprawy próbują rosnąć. Ma **wynik** , który określa, czy występuje zachowanie domyślne, czy nie:

- **zezwól**: uprawa jest zmuszona do wzrostu.
- **blokuj**: uprawa nie może być uprawiana.
- **domyślnie**: atak używa domyślnego zachowania Vanilli.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ropGrowPreEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia CropGrowPost wdrażają następujące interfejsy i są w stanie nazwać wszystkie swoje metody/podmioty pobierające/wyznaczające:

- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter            | ZenSetter | Typ                                          |
| -------------------- | --------- | -------------------------------------------- |
| `originalBlockState` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `oryginalnyBlok`     |           | [IBlock](/Vanilla/Blocks/IBlock/)            |
