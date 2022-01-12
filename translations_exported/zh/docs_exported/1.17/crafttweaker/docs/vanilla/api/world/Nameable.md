# Nameable

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Nameable;
```


## 使用方式

:::group{name=getCustomName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Nameable.getCustomName() as Component

myNameable.getCustomName();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Nameable.getDisplayName() as Component

myNameable.getDisplayName();
```

:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Nameable.getName() as Component

myNameable.getName();
```

:::

:::group{name=hasCustomName}

Return Type: boolean

```zenscript
// Nameable.hasCustomName() as boolean

myNameable.hasCustomName();
```

:::


## 参数

| 名称            | 类型                                       | 可获得  | 可设置   | 描述                      |
| ------------- | ---------------------------------------- | ---- | ----- | ----------------------- |
| customName    | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |
| displayName   | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |
| hasCustomName | 布尔值                                      | true | false | No Description Provided |
| name（名称）      | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |

