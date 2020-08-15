# Закрыть контейнер

Событие Лидера CloseContainer запускается, когда игрок закрывает контейнер.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События PlayerCloseContainer реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter   | Возвращаемый тип                             |
| ----------- | -------------------------------------------- |
| `контейнер` | [IContainer](/Vanilla/Container/IContainer/) |
