# Командное событие

При выполнении команды запускается командное событие. Вы можете реагировать на команду с помощью обработчика команд. Смотрите примеры [Crafttweaker](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) для примера.

## Класс события

Вам нужно будет использовать событие в заголовке функции как этот класс: `crafttweaker.event.CommandEvent`. Рекомендуется [импортировать](/AdvancedFunctions/Import/) класс

    import crafttweaker.event.CommandEvent;
    

## Наследование от интерфейсов событий

Командное событие реализует следующие интерфейсы:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры

Во время события необходимо извлечь/задать следующую информацию:

| Геттер        | ZenSetter   | Тип                                                 |
| ------------- | ----------- | --------------------------------------------------- |
| `отправитель` | нет         | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `команда`     | нет         | [ICommand](/Vanilla/Commands/ICommand/)             |
| `параметры`   | `параметры` | строковый массив                                    |