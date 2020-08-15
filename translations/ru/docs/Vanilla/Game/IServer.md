# IServer

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.server.IServer;`

## Наследование от ICommandSender

IServer расширяет [ICommandSender](/Vanilla/Commands/ICommandSender), так что все методы, которые доступны для объекта [ICommandSender](/Vanilla/Commands/ICommandSender) также доступны для IServer.

## Доступ к серверному обработчику

Вы можете получить доступ к серверному обработчику, используя `сервер` [глобальное ключевое слово](/Vanilla/Global_Functions/).  
Или вы можете получить сервер от любого [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Проверьте, является ли [игрок](/Vanilla/Players/IPlayer/) OP

Вы можете использовать это для проверки, имеет ли [IPlayer](/Vanilla/Players/IPlayer/) разрешение на операцию:

```zenscript
server.isOP(игрок);
```

## Получить менеджер команд

Вы можете использовать это для получения [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager;
```