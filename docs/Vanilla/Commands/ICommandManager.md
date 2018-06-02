# 命令管理器（ICommandManager）

指令管理器接口用于管理指令，你可以使用它来获取，并执行指令。   
你可以通过 [服务器（IServer）](/Vanilla/Game/IServer) 对象中获取这个东西。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.commands.ICommandManager;`

## ZenGetters

| ZenGetter | Type                               |
|-----------|------------------------------------|
| commands  | Map<String, [ICommand](ICommand)\> |


## ZenMethods
- int executeCommand([ICommandSender](ICommandSender) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](ICommandSender) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos) pos);
- List<[ICommand](ICommand)\> getPossibleCommands([ICommandSender](ICommandSender) sender);