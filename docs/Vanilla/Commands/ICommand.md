# 指令（ICommand）

指令对象指的就是游戏内的指令。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.commands.ICommand;`

## ZenGetters

| ZenGetter |   返回类型    |
| :-------: | :-----------: |
|   name    |    String     |
|  aliases  | List<String\> |


## ZenMethods

- String getUsage([ICommandSender](ICommandSender) sender);
- void execute([IServer](/Vanilla/Game/IServer) server, [ICommandSender](ICommandSender) sender, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer) server, [ICommandSender](ICommandSender) sender);
- List<String> getTabCompletions([IServer](/Vanilla/Game/IServer) server, [ICommandSender](ICommandSender) sender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → 你可以比较两个指令。