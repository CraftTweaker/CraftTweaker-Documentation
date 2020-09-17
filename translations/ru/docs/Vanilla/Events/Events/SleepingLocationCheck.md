# Проверка местоположения

Это событие запущено при проверке, может ли спящий игрок продолжать спать в текущем месте. Если есть **результат** определяет действие.

Результат:
- **По умолчанию**возвращает стандартный ответ Vanilla в клетке Bed
- **Разрешить**, позволяет продолжать спящий режим независимо от
- **Запретить** конкретно ***игнорировать*** в данном экземпляре и ничего не делает.

Таким образом, это событие позволяет держать игрока в спящем режиме, но оно не позволяет вам обойти стандартную логику.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.SleepingLocationCheck`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
SleepingLocationCheck События реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setter:

- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
