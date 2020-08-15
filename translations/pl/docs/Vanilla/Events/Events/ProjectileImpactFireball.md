# Błyskawiczna kula ogniowa

To wydarzenie jest uruchamiane za każdym razem, gdy kula ognia uderza w jednostkę, ale przed naładowaniem obrażeń itp., jest obliczana. **anulowalne**, a jeśli anulowane, wpływ nie zostanie przetworzony.

Wartości przyspieszenia z kuli ognia są dostępne za pośrednictwem zengetters.

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.ProjectileImpactFireballEvent;`

## Rozszerzenie IEntityEvent
Wydarzenia pociskówImpactFireball zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/podmioty pobierające/ustawiające:

- [Wydarzenie ICząsteczek](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters i ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter         | ZenSetter         | Typ                                                       |
| ----------------- | ----------------- | --------------------------------------------------------- |
| `kula ognia`      |                   | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `strzelanka`      |                   | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `akceleracjaX`    | `akceleracjaX`    | podwójne                                                  |
| `przyspieszenieY` | `przyspieszenieY` | podwójne                                                  |
| `accelerationZ`   | `accelerationZ`   | podwójne                                                  |
