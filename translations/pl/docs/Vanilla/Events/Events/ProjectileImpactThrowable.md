# Konstrukcja pocisku

To wydarzenie jest uruchamiane za każdym razem, gdy wyrzucany pocisk wpływa na jednostkę, ale przed uszkodzeniem itp., jest obliczany. **anulowalne**, a jeśli anulowane, wpływ nie zostanie przetworzony.

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.ProjectileImpactThrowableEvent;`

## Rozszerzenie IEntityEvent
Zdarzenia pociskowo-rzutowe mają następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie ICząsteczek](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters i ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter    | ZenSetter | Typ                                                       |
| ------------ | --------- | --------------------------------------------------------- |
| `kula ognia` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `strzelanka` |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
