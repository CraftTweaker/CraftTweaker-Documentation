# LivingExperienceDrop

Это событие запускается, когда сущность умирает и падает из опыта, что позволяет изменить количество опыта. В качестве альтернативы событие может быть **отменено** , чтобы предотвратить потерю опыта.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingExperienceDropEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
LivingExperienceDrop События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter            | ZenSetter       | Тип                                  |
| -------------------- | --------------- | ------------------------------------ |
| `player`             |                 | [IPlayer](/Vanilla/Players/IPlayer/) |
| `понизить опыт`      | `понизить опыт` | int                                  |
| `originalExperience` |                 | int                                  |

## Примечания

`originalExperience` содержит оригинальный объем опыта. Возможно, `сброшенный опыт` когда это событие уже было изменено.
