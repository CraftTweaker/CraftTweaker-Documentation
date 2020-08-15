# Приготовление урожая

Событие Рост урожая обстреляется, когда урожай пытается вырасти. У него есть **результат** , который определяет, происходит ли поведение по умолчанию:

- **позволить**: обрезание вынуждены расти.
- **deny**: обрезание не может вырасти.
- **По умолчанию**: атака использует стандартное поведение ванили.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPreEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
CropGrowPost События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter            | ZenSetter | Тип                                         |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `оригинальный блок`  |           | [БИБлок](/Vanilla/Blocks/IBlock/)           |
