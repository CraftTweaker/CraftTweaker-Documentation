# MC样式

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.util.text.MCStyle
```

## Constructor #构造函数
```zenscript
新手工艺.api.util.text.MCStyle();
```

## 方法
### equals #等于

返回类型：布尔值

```zenscript
myMCStyle.equals(其它作为对象)；
```

| 参数    | 类型 | 描述                      |
| ----- | -- | ----------------------- |
| other | 对象 | No description provided |


### getBold

返回类型：布尔值

```zenscript
myMCStyle.getBold();
```

### getFontId

返回类型： [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### 获取插入

返回类型：字符串

```zenscript
myMCStyle.get插入();
```

### getItalic

返回类型：布尔值

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

返回类型：布尔值

```zenscript
myMCStyle.getObfuscated();
```

### getStrikefe

返回类型：布尔值

```zenscript
a. myMCStyle.getStrikethrough();
```

### 获取下划线

返回类型：布尔值

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

返回类型：int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

此样式是否为空(继承父类的一切)。

返回类型：布尔值

```zenscript
myMCStyle.isEmpty();
```

### 合并样式

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(样式为 craftminstrer.api.util.text.MCStyle);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 样式 | [craftminstrer.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### 设置粗体

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(作为布尔值)
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| boldIn | Boolean | No description provided |


### 设置颜色

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(格式化为 craftminstrer.api.text.TextFormating);
```

| 参数  | 类型                                            | 描述                      |
| --- | --------------------------------------------- | ----------------------- |
| 格式化 | [文本格式](/crafttweaker/api/text/TextFormatting) | No description provided |



返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(颜色为原样)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 颜色 | 整数 | No description provided |


### setFontId

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(位置为 craftweeper.api.util.MCResourceLocation);
```

| 参数 | 类型                                                                                | 描述                      |
| -- | --------------------------------------------------------------------------------- | ----------------------- |
| 位置 | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### 设置格式

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormating(格式化为 craftbiner.api.text.TextFormating);
```

| 参数  | 类型                                            | 描述                      |
| --- | --------------------------------------------- | ----------------------- |
| 格式化 | [文本格式](/crafttweaker/api/text/TextFormatting) | No description provided |


### 设置插入

当组件被shift-点击时，设置要插入聊天的文本

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.set插入(插入为字符串)；
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 插入 | 字符串[string] | No description provided |


### setItalic

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(斜体为 Boolean)；
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| italic | Boolean | No description provided |


### setObfused

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(混淆为 Boolean)；
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 迷惑的 | Boolean | No description provided |


### 设置删除线

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrike-through (strikefy as Boolean)
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 删除线 | Boolean | No description provided |


### 下划线

返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnlined(下划线为 Boolean)；
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 下划线 | Boolean | No description provided |



返回类型： [craftmiliter.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnlined(下划线为布尔值)；
```

| 参数  | 类型      | 描述                      |
| --- | ------- | ----------------------- |
| 下划线 | boolean | No description provided |


### toString

返回类型：字符串

```zenscript
myMCStyle.toString();
```


