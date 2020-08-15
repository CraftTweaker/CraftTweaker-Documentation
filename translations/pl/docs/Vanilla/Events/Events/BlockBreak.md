# Wydarzenie BlockBreakcji

Wydarzenie BlockBreak jest uruchamiane za każdym razem, gdy blok jest uszkodzony.  
Możesz anulować wydarzenie, aby zapobiec jego uszkodzeniu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. lockBreakEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia BlockBreak implementują następujące interfejsy i są w stanie również wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter       | ZenSetter       | Typ                                  |
| --------------- | --------------- | ------------------------------------ |
| `gracz`         |                 | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`      |                 | bool                                 |
| `doświadczenie` | `doświadczenie` | odcień                               |