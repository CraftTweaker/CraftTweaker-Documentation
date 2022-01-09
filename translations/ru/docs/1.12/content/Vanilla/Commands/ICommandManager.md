# ICommandManager

Интерфейс ICommandManager управляет командами. So you can use it to get and execute commands.  
You can get this from an [IServer](/Vanilla/Game/IServer/) object.

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommandManager;`

## ZenGetters

| ZenGetter | Тип                                                                    |
| --------- | ---------------------------------------------------------------------- |
| commands  | Map&lt;String, [ICommand](/Vanilla/Commands/ICommand/)&gt; |


## ZenMethods
- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List&lt;[ICommand](/Vanilla/Commands/ICommand/)&gt; getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);

## Дополнительная информация
Чтобы добавить свою команду, обратите внимание на [CommandEvent](/Vanilla/Events/Events/CommandEvent/).