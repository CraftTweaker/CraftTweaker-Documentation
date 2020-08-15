# Przedmiotosy

Wydarzenie ItemToss jest uruchamiane za każdym razem, gdy przedmiot jest wytłoczony z ekwipunku gracza.  
Anulowanie tego wydarzenia uniemożliwi przedmiotowi wejście do świata, powodując tym samym usunięcie przedmiotu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. temTossEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Typ                                           |
| --------- | --------------------------------------------- |
| element   | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| gracz     | [IPlayer](/Vanilla/Players/IPlayer/)          |