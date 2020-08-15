# Пост-событие роста

The CropGrowPost Event is fired once a crop block has **successfully** grown. Она не может быть отменена и лишь служит уведомлением о росте культуры.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPostEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
CropGrowPost События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter            | ZenSetter | Тип                                         |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `оригинальный блок`  |           | [БИБлок](/Vanilla/Blocks/IBlock/)           |
