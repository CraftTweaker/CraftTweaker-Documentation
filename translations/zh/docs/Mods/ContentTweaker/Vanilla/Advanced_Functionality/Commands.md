# 命令

您可以使用这个类来发送命令，您不能使用这个类来创建新的命令！ 查看 [命令事件](/Vanilla/Events/Events/CommandEvent/) 来添加新的命令。 您也可以使用 [ICommandManager](/Vanilla/Commands/ICommandManager/)。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.Commands；`

## 调用命令

这是您唯一可以用命令包做的事情。

```zenscript
调用(命令, IPlayer player, IWorld)
调用(命令, IPlayer player, IWorld world, boolian logToChat, boolan overridePermissions)
```

参数：

- 字符串命令 → 要执行的命令
- [IPlayer](/Vanilla/Players/IPlayer/) 播放器 → 执行命令的播放器
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) world → 命令执行的世界是
- 布尔值 logToChat -> 命令输出是否出现在MC 聊天中？
- 不论所需的权限级别，是否执行命令的布尔值覆盖权限？

这两种布尔值要么需要增添，要么被略去。 如果你在没有他们的情况下调用命令，这些命令将是真的。