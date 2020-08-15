# 推送反应

推力反应是当手枪试图推送方块时发生的情况。

# 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.PushReact；`

## 比较两个反应

您可以通过使用 `==` 操作员看到两个反应是否相同。

```zenscript
如果(1== b){}
```

## 静态方法

您可以使用这些方法获取PushReaction 对象：

```zenscript
mods.contenttweeper.PushReaction.normal();
mods.contenttweeper.PushReaction.destroy();
mods.contenttweiner.PushReaction.block();
mods.contenttweeper.PushReaction.ignore();
mods.contenttweeper.PushReaction.pusOnly();
```