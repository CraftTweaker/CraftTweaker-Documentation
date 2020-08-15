# Wygasa element

Wydarzenie Wygaśnięcia Przedmiotu jest uruchamiane za każdym razem, gdy przedmiot wygasa (osiąga makimum żywotność).  
Można go anulować, aby zapobiec oznaczeniu przedmiotu jako martwy.  
Jeśli anulowane doda `ekstralife` do żywotności przedmiotu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. temExpireEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Typ                                           |
| --------- | --------- | --------------------------------------------- |
| element   |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | odcień                                        |