# MC命令源

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandSource;
```


## 方法

### getName

Return Type: string

```zenscript
MCCommandSource.getName() as string
myMCCommandSource.getName();
```
### getPlayer

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCCommandSource.getPlayer() as MCPlayerEntity
myMCCommandSource.getPlayer();
```
### getPlayer名称

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getPlayerNames() as Collection<string>
myMCCommandSource.getPlayerNames();
```
### getTargetEntity

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getTargetedEntity() as Collection<string>
myMCCommandSource.getTargetedEntity();
```
### 获取团队名称

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getTeamNames() as Collection<string>
myMCCommandSource.getTeamNames();
```
### hasPermissionLevel

Return Type: boolean

```zenscript
MCCommandSource.hasPermissionLevel(p_197034_1_ as int) as boolean
```
| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| p_197034_1_ | int | No Description Provided |

### isPlayer

Return Type: boolean

```zenscript
MCCommandSource.isPlayer() as boolean
myMCCommandSource.isPlayer();
```
### 发送错误消息

Return Type: void

```zenscript
MCCommandSource.sendErrorMessage(message as string) as void
```
| 参数      | 类型     | 描述                      |
| ------- | ------ | ----------------------- |
| message | string | No Description Provided |

### sendFeedback

Return Type: void

```zenscript
MCCommandSource.sendFeedback(feedback as string, allowLogging as boolean) as void
```
| 参数                   | 类型      | 描述                      |
| -------------------- | ------- | ----------------------- |
| 反馈                   | string  | No Description Provided |
| allowLogging #允许记录日志 | boolean | No Description Provided |

### 反馈已禁用

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withFeedbackDisabled() as MCCommandSource
myMCCommandSource.withFeedbackDisabled();
```
### withMin权限级别

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withMinPermissionLevel(p_197026_1_ as int) as MCCommandSource
```
| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| p_197026_1_ | int | No Description Provided |

### 拒绝权限级别

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withPermissionLevel(p_197033_1_ as int) as MCCommandSource
```
| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| p_197033_1_ | int | No Description Provided |


