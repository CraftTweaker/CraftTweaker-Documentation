# IProjectileImpactEvent

Ten interfejs jest rozszerzony przez wszystkie zdarzenia związane z pociskami (takie jak kulki ognia, strzały i przedmioty wyrzucane).

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.IProjectileImpactEvent;`

## Rozszerzenie IEntityEvent
Ten interfejs rozszerza [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), co oznacza, że wszystkie funkcje, które oferuje IEntityEvent są również obecne w IProjectileImpactEvent.

## ZenGetters

| Nazwa      | typ                                                     |
| ---------- | ------------------------------------------------------- |
| `rayTrace` | [Wynik IRayTraceReult](/Vanilla/World/IRayTraceResult/) |
