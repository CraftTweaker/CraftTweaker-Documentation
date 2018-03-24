# ICommandManager

The ICommandManager interface is managing commands. So you can use it to get and execute commands.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.commands.ICommandManager;`

## ZenGetters

| ZenGetter | Type                               |
|-----------|------------------------------------|
| commands  | Map<String, [ICommand](ICommand)\> |


## ZenMethods
- int executeCommand([ICommandSender](ICommandSender) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](ICommandSender) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos) pos);
- List<[ICommand](ICommand)\> getPossibleCommands([ICommandSender](ICommandSender) sender);