# PotionBrewre

Событие запускается непосредственно перед тем, как начнется обычное пивоварение. Если **отменен**, то пивоварение не произойдет. Если предметы будут отменены, то они будут автоматически выстреливаться [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/). Это позволяет симулятор "модного" пивоварения.

**Примечание**: это событие запускается справа, поскольку вычисления по рецепту происходят, когда "таймер" достигает "максимального прогресса".

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PotionBrewPre Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
