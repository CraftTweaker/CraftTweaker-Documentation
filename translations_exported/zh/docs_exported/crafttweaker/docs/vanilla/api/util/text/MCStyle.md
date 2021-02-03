# MC样式

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCStyle;
```


## Constructor #构造函数

No Description Provided
```zenscript
new MCStyle() as MCStyle
new MCStyle();
```


## 方法

### equals #等于

Return Type: boolean

```zenscript
MCStyle.equals(other as Object) as boolean
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| other | Object | No Description Provided |


### getBold

Return Type: boolean

```zenscript
MCStyle.getBold() as boolean
myMCStyle.getBold();
```

### getFontId

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCStyle.getFontId() as MCResourceLocation
myMCStyle.getFontId();
```

### 获取插入

Return Type: string

```zenscript
MCStyle.getInsertion() as string
myMCStyle.getInsertion();
```

### getItalic

Return Type: boolean

```zenscript
MCStyle.getItalic() as boolean
myMCStyle.getItalic();
```

### getObfuscated

Return Type: boolean

```zenscript
MCStyle.getObfuscated() as boolean
myMCStyle.getObfuscated();
```

### getStrikefe

Return Type: boolean

```zenscript
MCStyle.getStrikethrough() as boolean
myMCStyle.getStrikethrough();
```

### 获取下划线

Return Type: boolean

```zenscript
MCStyle.getUnderlined() as boolean
myMCStyle.getUnderlined();
```

### hashCode

Return Type: int

```zenscript
MCStyle.hashCode() as int
myMCStyle.hashCode();
```

### isEmpty

Whether or not this style is empty (inherits everything from the parent).

Return Type: boolean

```zenscript
MCStyle.isEmpty() as boolean
myMCStyle.isEmpty();
```

### 合并样式

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.mergeStyle(style as MCStyle) as MCStyle
```

| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 样式 | [MC样式](/vanilla/api/util/text/MCStyle) | No Description Provided |


### 设置粗体

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setBold(boldIn as Boolean) as MCStyle
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| boldIn | Boolean | No Description Provided |


### 设置颜色

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(colour as int) as MCStyle
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| colour | int | No Description Provided |


Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(formatting as TextFormatting) as MCStyle
```

| 参数  | 类型                                                      | 描述                      |
| --- | ------------------------------------------------------- | ----------------------- |
| 格式化 | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### setFontId

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFontId(location as MCResourceLocation) as MCStyle
```

| 参数 | 类型                                                         | 描述                      |
| -- | ---------------------------------------------------------- | ----------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


### 设置格式

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFormatting(formatting as TextFormatting) as MCStyle
```

| 参数  | 类型                                                      | 描述                      |
| --- | ------------------------------------------------------- | ----------------------- |
| 格式化 | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### 设置插入

Set a text to be inserted into Chat when the component is shift-clicked

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setInsertion(insertion as string) as MCStyle
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 插入 | string | No Description Provided |


### setItalic

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setItalic(italic as Boolean) as MCStyle
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| italic | Boolean | No Description Provided |


### setObfused

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setObfuscated(obfuscated as Boolean) as MCStyle
```

| 参数         | 类型      | 描述                      |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No Description Provided |


### 设置删除线

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setStrikethrough(strikethrough as Boolean) as MCStyle
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No Description Provided |


### 下划线

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as Boolean) as MCStyle
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 下划线 | Boolean | No Description Provided |


### toString

Return Type: string

```zenscript
MCStyle.toString() as string
myMCStyle.toString();
```


