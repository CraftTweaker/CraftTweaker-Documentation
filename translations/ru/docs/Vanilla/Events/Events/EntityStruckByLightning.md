# EntityStruckByLightning

Событие EntityStruckByLightning запускается всякий раз, когда молния заканчивается ударом объекта.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityStruckByLightningEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События LivingEntityUseItem реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры

Во время события можно извлечь/задать следующую информацию:

| Геттеры  | Возвращаемый тип                      |
| -------- | ------------------------------------- |
| `молния` | [IEntity](/Vanilla/Entities/IEntity/) |