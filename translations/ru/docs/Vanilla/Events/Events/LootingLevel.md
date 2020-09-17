# Уровень грабежа

Событие запущено, когда живое существо сущности убито, чтобы вычислить уровень добычи. Значение может быть увеличено или уменьшено или оставлено как есть. Значение уже было изменено другими событиями, но первоначальное значение не включено.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События LootingLevel реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter              | ZenSetter        | Тип                                             |
| ---------------------- | ---------------- | ----------------------------------------------- |
| `уровень добычи`       | `уровень добычи` | int                                             |
| `источник повреждения` |                  | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
