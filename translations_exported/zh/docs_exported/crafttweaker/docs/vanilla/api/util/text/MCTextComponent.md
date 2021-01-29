# MCText组件

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCTextComponent;
```


## 方法

### createStringTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createStringTextComponent(text as string) as MCTextComponent
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | string | No Description Provided |

### createTranslationTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string) as MCTextComponent
```
| 参数             | 类型     | 描述                      |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string, args as Object[]) as MCTextComponent
```
| 参数             | 类型       | 描述                      |
| -------------- | -------- | ----------------------- |
| translationKey | string   | No Description Provided |
| args           | Object[] | No Description Provided |

## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| string | false |

## 方法

### appendSibling

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```
| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| component | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |

### appendText

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as string) as MCTextComponent
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | string | No Description Provided |

### copyRaw

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.copyRaw() as MCTextComponent
myMCTextComponent.copyRaw();
```
### deepCopy

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.deepCopy() as MCTextComponent
myMCTextComponent.deepCopy();
```
### getString #获取字符串

Return Type: string

```zenscript
MCTextComponent.getString() as string
myMCTextComponent.getString();
```
### getStringTruncated

Return Type: string

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as string
```
| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| maxLen | int | No Description Provided |

### getUnformattedComponentText

Return Type: string

```zenscript
MCTextComponent.getUnformattedComponentText() as string
myMCTextComponent.getUnformattedComponentText();
```
### setStyle

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 样式 | [MC样式](/vanilla/api/util/text/MCStyle) | No Description Provided |


## 运算符

### ADD

```zenscript
myMCTextComponent + component as MCTextComponent
```


### CAT

```zenscript
myMCTextComponent ~ component as MCTextComponent
```


### SHL

```zenscript
myMCTextComponent << component as MCTextComponent
```



## 参数

| 名称                       | 类型                                                                                       | 可获得  | 可设置   |
| ------------------------ | ---------------------------------------------------------------------------------------- | ---- | ----- |
| formattedText            | string                                                                                   | true | false |
| siblings                 | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true | false |
| unformattedComponentText | string                                                                                   | true | false |

