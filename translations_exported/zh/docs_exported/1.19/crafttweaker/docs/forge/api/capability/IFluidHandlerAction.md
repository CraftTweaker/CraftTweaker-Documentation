# IFluidHandlerAction

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandlerAction;
```


## Enum Constants

IFluidHandlerAction is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
<constant:forge:fluid_action:execute>
<constant:forge:fluid_action:simulate>
```
## 使用方式

:::group{name=execute}

If the action should execute.

Returns: true if the action should execute, false otherwise.  
Return Type: boolean

```zenscript
// IFluidHandlerAction.execute() as boolean

myIFluidHandlerAction.execute();
```

:::

:::group{name=simulate}

If the action should simulate.

Returns: true if the action should simulate, false otherwise.  
Return Type: boolean

```zenscript
// IFluidHandlerAction.simulate() as boolean

myIFluidHandlerAction.simulate();
```

:::


## 参数

| 名称       | 类型  | 可获得  | 可设置   | 描述                             |
| -------- | --- | ---- | ----- | ------------------------------ |
| execute  | 布尔值 | true | false | If the action should execute.  |
| simulate | 布尔值 | true | false | If the action should simulate. |

