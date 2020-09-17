# Strzała pocisku

To zdarzenie jest uruchamiane za każdym razem, gdy pocisk strzały wpływa na jednostkę, ale przed obliczeniem obrażeń itp. **anulowalne**, a jeśli anulowane, wpływ nie zostanie przetworzony.

Różne wartości obiektu strzałki są dostępne za pośrednictwem zengetterów i mogą być modyfikowane w celu dostosowania obrażeń, odrzut, status odbioru i określenie (lub siły) krytycznego trafienia.

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.event.ProjectileImpactArrowEvent;`

## Rozszerzenie IEntityEvent
Zdarzenia pocisku ImpactArrow zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/podmioty pobierające/ustawiające:

- [Wydarzenie ICząsteczek](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters i ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter        | ZenSetter      | Typ                                   |
| ---------------- | -------------- | ------------------------------------- |
| `strzała`        |                | [IEntity](/Vanilla/Entities/IEntity/) |
| `strzelanka`     |                | [IEntity](/Vanilla/Entities/IEntity/) |
| `obrażenia`      | `obrażenia`    | podwójne                              |
|                  | `siła odrzutu` | int (tylko ustawiający, bez gettera)  |
| `isKrytyczny`    | `isKrytyczny`  | boolean                               |
| `Status odbioru` |                | Ciąg znaków                           |

## Metody dodatkowe

- `setPickupDisallowed()`

Zapobiega podniesieniu strzałki pod każdym względem.

- `setPickupAllowed()`

Pozwala podnieść strzałkę z miejsca, w którym wylądowano obiekt.

- `setPickupCreative()`

Pozwala podnieść strzałkę tylko wtedy, gdy gracz jest w trybie kreatywnym.
