# SleepingTimeCheck

Это событие запущено при проверке, может ли спящий игрок продолжать спать в указанное время. Если есть **результат** определяет действие.

Результат:
- **По умолчанию**, с логикой `Мира::isDaytime` можно ознакомиться с ванильной логикой.
- **Разрешить**, позволяет продолжать спящий режим независимо от
- **Запретить** конкретно ***игнорировать*** в данном экземпляре и ничего не делает.

Таким образом, это событие позволяет держать игрока в спящем режиме, но оно не позволяет вам специально остановить его от сна.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.SleepingTimeCheck`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События SleepingTimeCheck реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
