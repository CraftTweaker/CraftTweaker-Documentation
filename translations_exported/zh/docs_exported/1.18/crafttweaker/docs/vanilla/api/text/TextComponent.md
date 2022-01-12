# TextComponent

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.TextComponent;
```


## Extending BaseComponent

TextComponent extends [BaseComponent](/vanilla/api/text/BaseComponent). That means all methods available in [BaseComponent](/vanilla/api/text/BaseComponent) are also available in TextComponent

## Constructor #构造函数


```zenscript
new TextComponent(text as string) as TextComponent
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | string | No description provided |



## 使用方式

:::group{name=getText}

Return Type: string

```zenscript
// TextComponent.getText() as string

myTextComponent.getText();
```

:::


## 参数

| 名称 | 类型     | 可获得  | 可设置   | 描述                      |
| -- | ------ | ---- | ----- | ----------------------- |
| 文本 | string | true | false | No Description Provided |

