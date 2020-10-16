# EnityLivingHurt

Wydarzenie EntityLivingHurt jest uruchamiane za każdym razem, gdy jednostka ma zostać ranna.  
Można anulować, aby zapobiec krzywdzie jednostki.

## Event Class

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityLivingHurtEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Event interface extensions

PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter    | Type                                            |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| amount       | float                                           |

## ZenSetters

| ZenSetter | Type  |
| --------- | ----- |
| amount    | float |