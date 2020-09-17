# ILivingEvent

Ten interfejs jest rozszerzony przez wszystkie wydarzenia, które mogą mieć centralną żywą jednostkę.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.ILivingEvent;`

## Rozszerzenie IEntityEvent

Ten interfejs rozszerza [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), co oznacza, że wszystkie funkcje oferowane przez IEntityEvent są również obecne w ILivingEvent

## ZenGetters

| Nazwa            | typ                                                       |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |