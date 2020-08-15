# PotionBrewPost

Событие запускается сразу же после того, как зелье было "бридкой" породой пивоваренной плитки, когда выходные предметы уже были заменены. Если [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) был отменен, но предметы были изменены, то это событие также будет запущено.

If the pre-event is cancelled without modifying itemstacks, this event will **not** be fired.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PotionBrewPost Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
