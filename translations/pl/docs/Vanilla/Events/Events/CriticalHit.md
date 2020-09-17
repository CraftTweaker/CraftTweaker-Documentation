# Wydarzenie Krytyczne

Wydarzenie Krytycznego Trafienia jest strzelane za każdym razem, gdy gracz atakuje inne stworzenie. Ma **wynik** , który określa, czy pojawia się domyślne zachowanie krytyczne:

- **zezwól**: atak jest zmuszony do krytycznego
- **blokuj**: atak nie może być krytyczny
- **domyślnie**: atak używa domyślnego zachowania Vanilla do określenia, czy jest krytykiem.

Możesz również dostosować modyfikator obrażeń dla trafienia krytycznego.

## Uwagi

`event.oldDamageModifier` zawiera oryginalny modyfikator obrażeń wydarzenia, podczas `wydarzenia. sVanillaCrit` jest wartością logiczną, która określa, czy jest to już trafienie krytyczne.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. riticalHitEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia krytyczne Hit implementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter                   | ZenSetter             | Typ zwrotu                            |
| --------------------------- | --------------------- | ------------------------------------- |
| `target`                    |                       | [IEntity](/Vanilla/Entities/IEntity/) |
| `Dawny Modyfikator Obrażeń` |                       | zmiennoprzecinkowe                    |
| `Modyfikator obrażeń`       | `Modyfikator obrażeń` | zmiennoprzecinkowe                    |
| `isVanillaCrit`             |                       | boolean                               |

## Metody ZenMethods

- `event.deny()` ustawia wynik na negację.
- `event.allow()` ustawia wynik na pozwolenie.
- `event.default()` ustawia wynik na domyślne.
