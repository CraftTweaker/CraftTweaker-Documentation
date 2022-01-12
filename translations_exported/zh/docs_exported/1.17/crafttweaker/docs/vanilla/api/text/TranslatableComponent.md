# TranslatableComponent

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.TranslatableComponent;
```


## Extending BaseComponent

TranslatableComponent extends [BaseComponent](/vanilla/api/text/BaseComponent). That means all methods available in [BaseComponent](/vanilla/api/text/BaseComponent) are also available in TranslatableComponent

## 已实现的接口
TranslatableComponent implements the following interfaces. That means all methods defined in these interfaces are also available in TranslatableComponent

- [ContextAwareComponent](/vanilla/api/text/ContextAwareComponent)

## Constructor #构造函数


```zenscript
new TranslatableComponent(key as string) as TranslatableComponent
```
| 参数  | 类型     | 描述                      |
| --- | ------ | ----------------------- |
| key | string | No description provided |

```zenscript
new TranslatableComponent(key as string, args as Object[]) as TranslatableComponent
```
| 参数   | 类型       | 描述                      |
| ---- | -------- | ----------------------- |
| key  | string   | No description provided |
| args | Object[] | No description provided |



## 使用方式

:::group{name=getArgs}

Return Type: Object[]

```zenscript
// TranslatableComponent.getArgs() as Object[]

myTranslatableComponent.getArgs();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// TranslatableComponent.getKey() as string

myTranslatableComponent.getKey();
```

:::


