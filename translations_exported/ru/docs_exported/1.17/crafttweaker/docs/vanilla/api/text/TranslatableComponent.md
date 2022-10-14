# TranslatableComponent

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.TranslatableComponent;
```


## Extending BaseComponent

TranslatableComponent extends [BaseComponent](/vanilla/api/text/BaseComponent). That means all methods available in [BaseComponent](/vanilla/api/text/BaseComponent) are also available in TranslatableComponent

## Implemented Interfaces
TranslatableComponent implements the following interfaces. That means all methods defined in these interfaces are also available in TranslatableComponent

- [ContextAwareComponent](/vanilla/api/text/ContextAwareComponent)

## Constructors


```zenscript
new TranslatableComponent(key as string) as TranslatableComponent
```
| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| key      | string | Описание отсутствует |

```zenscript
new TranslatableComponent(key as string, args as Object[]) as TranslatableComponent
```
| Параметр | Тип      | Описание             |
| -------- | -------- | -------------------- |
| key      | string   | Описание отсутствует |
| args     | Object[] | Описание отсутствует |



## Методы

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


