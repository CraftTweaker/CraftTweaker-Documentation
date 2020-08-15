# Uprawa po Wydarzeniu

Wydarzenie CropGrowPost jest uruchamiane, gdy blok upraw **pomyślnie** rośnie. Nie można go anulować i służy jedynie jako powiadomienie o wzroście upraw.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ropGrowPostEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia CropGrowPost wdrażają następujące interfejsy i są w stanie nazwać wszystkie swoje metody/podmioty pobierające/wyznaczające:

- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter            | ZenSetter | Typ                                          |
| -------------------- | --------- | -------------------------------------------- |
| `originalBlockState` |           | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `oryginalnyBlok`     |           | [IBlock](/Vanilla/Blocks/IBlock/)            |
