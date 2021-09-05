# EventPriority

Different priorities for Event listeners. NORMAL is the default level for a listener registered without a priority.

 HIGHEST is the first to execute, LOWEST is the last to execute.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.EventPriority;
```


## Extending Enum&lt;EventPriority&gt;

EventPriority extends Enum&lt;[EventPriority](/vanilla/api/event/EventPriority)&gt;. That means all methods available in Enum&lt;[EventPriority](/vanilla/api/event/EventPriority)&gt; are also available in EventPriority

## Static Properties

| 名称      | 类型                                                | 可获得  | 可设置   | 描述                      |
| ------- | ------------------------------------------------- | ---- | ----- | ----------------------- |
| HIGH    | [EventPriority](/vanilla/api/event/EventPriority) | true | false | No Description Provided |
| HIGHEST | [EventPriority](/vanilla/api/event/EventPriority) | true | false | No Description Provided |
| LOW     | [EventPriority](/vanilla/api/event/EventPriority) | true | false | No Description Provided |
| LOWEST  | [EventPriority](/vanilla/api/event/EventPriority) | true | false | No Description Provided |
| NORMAL  | [EventPriority](/vanilla/api/event/EventPriority) | true | false | No Description Provided |

