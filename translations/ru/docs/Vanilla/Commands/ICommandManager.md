# ICommandManager

Интерфейс ICommandManager управляет командами. То есть вы можете получать и выполнять команды.  
Вы можете получить этот объект из [IServer](/Vanilla/Game/IServer/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.command.ICommandManager;`

## Геттеры

| Геттер   | Тип                                                                    |
| -------- | ---------------------------------------------------------------------- |
| commands | Map&lt;String, [ICommand](/Vanilla/Commands/ICommand/)&gt; |

## Методы

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List&lt;[ICommand](/Vanilla/Commands/ICommand/)&gt; getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);

## Дополнительная информация

Чтобы добавить свою команду, обратите внимание на [CommandEvent](/Vanilla/Events/Events/CommandEvent/).