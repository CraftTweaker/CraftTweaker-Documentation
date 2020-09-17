# AnimalTame

To wydarzenie jest strzelone do określenia, czy zwierzę ma zostać oswojone. Jeśli anulowano, **oswajanie nie powiodło się**. W przeciwnym razie służy on po prostu jako powiadomienie o oswojeniu.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. nimalTameEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia związane z Tame Zwierzęta zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter | ZenSetter | Typ                                               |
| --------- | --------- | ------------------------------------------------- |
| `zwierzę` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `zwierzę` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `gracz`   |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
