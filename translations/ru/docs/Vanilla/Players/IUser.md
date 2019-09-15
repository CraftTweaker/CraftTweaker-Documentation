# IUser

Интерфейс IUser используется для объединения различных типов пользователей вроде консоли, нормального пользователя и командного блока в одном типе.  
Вряд ли, вам это потребуется.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.player.IUser;`

## Наследование от ICommandSender

IUser наследует от [ICommandSender](/Vanilla/Commands/ICommandSender/). That means all functions available to [ICommandSender](/Vanilla/Commands/ICommandSender/) Objects also are available to IUser Objects.

## Методы

В настоящее время нет определенных функций для объектов IUser.