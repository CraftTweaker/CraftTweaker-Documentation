# Mod

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mod.Mod;
```


## Extending Record

Mod extends Record. That means all methods available in Record are also available in Mod

## 使用方式

:::group{name=displayName}

Return Type: string

```zenscript
// Mod.displayName() as string

myMod.displayName();
```

:::

:::group{name=id}

Return Type: string

```zenscript
// Mod.id() as string

myMod.id();
```

:::

:::group{name=version}

Return Type: string

```zenscript
// Mod.version() as string

myMod.version();
```

:::


## 参数

| 名称          | 类型     | 可获得  | 可设置   | 描述                      |
| ----------- | ------ | ---- | ----- | ----------------------- |
| displayName | string | true | false | No Description Provided |
| id          | string | true | false | No Description Provided |
| version     | string | true | false | No Description Provided |

