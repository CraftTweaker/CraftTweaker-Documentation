# MC命令源

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommandSource
```

## 方法
### getName

返回类型：字符串

```zenscript
myMCCommandSource.getName();
```

### getPlayer

返回类型：(@org.openzen.zencode.java.ZenCodeType.Nullable:: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayer名称

返回类型：收藏&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetEntity

返回类型：收藏&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### 获取团队名称

返回类型：收藏&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasmission级别

返回类型：布尔值

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_197034_1_ | 整数 | No description provided |


### isPlayer

返回类型：布尔值

```zenscript
myMCCommandSource.isPlayer();
```

### 发送错误消息

```zenscript
myMCCommandSource.sendErrorMessage(message as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 留言 | 字符串[string] | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.send反馈(作为字符串反馈，允许日志作为布尔值)；
```

| 参数                   | 类型          | 描述                      |
| -------------------- | ----------- | ----------------------- |
| 反馈                   | 字符串[string] | No description provided |
| allowLogging #允许记录日志 | boolean     | No description provided |


### 反馈已禁用

返回类型： [craftbiner.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.with反馈已禁用();
```

### withMin权限级别

返回类型： [craftbiner.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_197026_1_ | 整数 | No description provided |


### 拒绝权限级别

返回类型： [craftbiner.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_int)；
```

| 参数            | 类型 | 描述                      |
| ------------- | -- | ----------------------- |
| p_197033_1_ | 整数 | No description provided |



