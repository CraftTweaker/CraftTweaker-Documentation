# LootingLevel

This event is fired whenever a Living Entity creature is killed in order to calculate the looting level. The value can be increased or decreased or left as-is. The value may have already been modified by other events, but the original value is not included.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
LootingLevel Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter              | ZenSetter        | Тип                                             |
| ---------------------- | ---------------- | ----------------------------------------------- |
| `уровень добычи`       | `уровень добычи` | int                                             |
| `источник повреждения` |                  | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
