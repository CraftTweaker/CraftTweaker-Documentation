# MCServer



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.MCServer;
```


## 已实现的接口
MCServer implements the following interfaces. That means all methods defined in these interfaces are also available in MCServer

- AutoCloseable

## 使用方式

:::group{name=executeCommand}

Runs a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.

 Note: Some commands' success value is 0

Return Type: int

```zenscript
// MCServer.executeCommand(command as string, silent as boolean) as int

world.asServerWorld().server.executeCommand("time set day", true);
```

| 参数      | 类型     | 描述                      | 可选    | DefaultValue |
| ------- | ------ | ----------------------- | ----- | ------------ |
| command | string | No Description Provided | false |              |
| silent  | 布尔值    | No Description Provided | true  | false        |


:::

:::group{name=executeCommand}

let a player send a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.

 Note: Some commands' success value is 0

Return Type: int

```zenscript
// MCServer.executeCommand(command as string, player as MCPlayerEntity, silent as boolean) as int

world.asServerWorld().server.executeCommand("time set day", player, true);
```

| 参数      | 类型                                                           | 描述                      | 可选    | DefaultValue |
| ------- | ------------------------------------------------------------ | ----------------------- | ----- | ------------ |
| command | string                                                       | No Description Provided | false |              |
| player  | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | No Description Provided | false |              |
| silent  | 布尔值                                                          | No Description Provided | true  | false        |


:::

:::group{name=getWorld}

Get a server world instance based on resource location Throws an exception if the world location is unknown

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
// MCServer.getWorld(location as MCResourceLocation) as MCServerWorld

world.asServerWorld().server.getWorld(<resource:minecraft:the_end>);
```

| 参数 | 类型                                                         | 描述                      |
| -- | ---------------------------------------------------------- | ----------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::


## 参数

| 名称     | 类型                                                                              | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| worlds | Collection&lt;[MCServerWorld](/vanilla/api/world/MCServerWorld)&gt; | true | false | No Description Provided |

