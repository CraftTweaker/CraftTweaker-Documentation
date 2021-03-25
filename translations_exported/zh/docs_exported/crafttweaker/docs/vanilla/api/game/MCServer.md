# MCServer

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.MCServer;
```


## 已实现的接口
MCServer implements the following interfaces. That means all methods defined in these interfaces are also available in MCServer

- AutoCloseable

## 方法

### executeCommand

Runs a command.

 Returns The success value of the command, or 0 if an exception occurred. <p> Note: Some commands' success value is 0

Return Type: int

```zenscript
MCServer.executeCommand(command as string) as int
```

| 参数      | 类型     | 描述                      |
| ------- | ------ | ----------------------- |
| command | string | No Description Provided |


let a player send a command

 Returns The success value of the command, or 0 if an exception occurred. <p> Note: Some commands' success value is 0

Return Type: int

```zenscript
MCServer.executeCommand(command as string, player as MCPlayerEntity) as int
```

| 参数      | 类型                                                           | 描述                      |
| ------- | ------------------------------------------------------------ | ----------------------- |
| command | string                                                       | No Description Provided |
| player  | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |


### getWorld

Get a server world instance based on resource location Throws an exception if the world location is unknown

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
MCServer.getWorld(location as MCResourceLocation) as MCServerWorld
myMCServer.getWorld(<resource:minecraft:the_end>);
```

| 参数 | 类型                                                         | 描述                      |
| -- | ---------------------------------------------------------- | ----------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |



## 参数

| 名称     | 类型                                                                              | 可获得  | 可设置   |
| ------ | ------------------------------------------------------------------------------- | ---- | ----- |
| worlds | Collection&lt;[MCServerWorld](/vanilla/api/world/MCServerWorld)&gt; | true | false |

