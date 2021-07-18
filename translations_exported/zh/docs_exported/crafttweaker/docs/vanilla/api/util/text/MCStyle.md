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

:::group{name=equals}

Return Type: boolean

```zenscript
MCStyle.equals(other as Object) as boolean
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| other | Object | No Description Provided |


:::

:::group{name=getBold}

Return Type: boolean

```zenscript
MCStyle.getBold() as boolean
myMCStyle.getBold();
```

:::

:::group{name=getFontId}

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCStyle.getFontId() as MCResourceLocation
myMCStyle.getFontId();
```

:::

:::group{name=getInsertion}

Return Type: string

```zenscript
MCStyle.getInsertion() as string
myMCStyle.getInsertion();
```

:::

:::group{name=getItalic}

Return Type: boolean

```zenscript
MCStyle.getItalic() as boolean
myMCStyle.getItalic();
```

:::

:::group{name=getObfuscated}

Return Type: boolean

```zenscript
MCStyle.getObfuscated() as boolean
myMCStyle.getObfuscated();
```

:::

:::group{name=getStrikethrough}

Return Type: boolean

```zenscript
MCStyle.getStrikethrough() as boolean
myMCStyle.getStrikethrough();
```

:::

:::group{name=getUnderlined}

Return Type: boolean

```zenscript
MCStyle.getUnderlined() as boolean
myMCStyle.getUnderlined();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCStyle.hashCode() as int
myMCStyle.hashCode();
```

:::

:::group{name=isEmpty}

Whether or not this style is empty (inherits everything from the parent).

Return Type: boolean

```zenscript
MCStyle.isEmpty() as boolean
myMCStyle.isEmpty();
```

:::

:::group{name=mergeStyle}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.mergeStyle(style as MCStyle) as MCStyle
```

| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 样式 | [MC样式](/vanilla/api/util/text/MCStyle) | No Description Provided |


:::

:::group{name=setBold}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setBold(boldIn as Boolean) as MCStyle
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| boldIn | Boolean | No Description Provided |


:::

:::group{name=setColor}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(colour as int) as MCStyle
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| colour | int | No Description Provided |


:::

:::group{name=setColor}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(formatting as TextFormatting) as MCStyle
```

| 参数  | 类型                                                      | 描述                      |
| --- | ------------------------------------------------------- | ----------------------- |
| 格式化 | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


:::

:::group{name=setFontId}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFontId(location as MCResourceLocation) as MCStyle
```

| 参数 | 类型                                                         | 描述                      |
| -- | ---------------------------------------------------------- | ----------------------- |
| 位置 | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::

:::group{name=setFormatting}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFormatting(formatting as TextFormatting) as MCStyle
```

| 参数  | 类型                                                      | 描述                      |
| --- | ------------------------------------------------------- | ----------------------- |
| 格式化 | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


:::

:::group{name=setInsertion}

Set a text to be inserted into Chat when the component is shift-clicked

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setInsertion(insertion as string) as MCStyle
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 插入 | string | No Description Provided |


:::

:::group{name=setItalic}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setItalic(italic as Boolean) as MCStyle
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| italic | Boolean | No Description Provided |


:::

:::group{name=setObfuscated}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setObfuscated(obfuscated as Boolean) as MCStyle
```

| 参数         | 类型      | 描述                      |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No Description Provided |


:::

:::group{name=setStrikethrough}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setStrikethrough(strikethrough as Boolean) as MCStyle
```

| 参数            | 类型      | 描述                      |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No Description Provided |


:::

:::group{name=setUnderlined}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as Boolean) as MCStyle
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 下划线 | Boolean | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCStyle.toString() as string
myMCStyle.toString();
```

:::


