# Wydarzenie Rybności

To wydarzenie jest wystrzelone, gdy gracz ma zamiar złapać przedmiot. Anulowanie wydarzenia uniemożliwi graczowi otrzymanie przedmiotu, ale pręt nadal będzie otrzymywał obrażenia.

## Uwagi

Dodatkowe obrażenia mogą zostać zadane w pręcie poprzez ustawienie `event.additionalDamage`. Lista IItemStacks (która **nie jest modyfikowalna**), która ma zostać złowiona, znajduje się w `event.drops`.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. temFishedEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
ItemFished Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter   | ZenSetter             | Typ                                        |
| ----------- | --------------------- | ------------------------------------------ |
| `obrażenia` |                       | odcień                                     |
|             | `dodatkowe obrażenia` | odcień                                     |
| `krople`    |                       | [IItemStack](/Vanilla/Items/IItemStack/)[] |
