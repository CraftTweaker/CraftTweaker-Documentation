# MCText组件

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinvest.api.util.text.MCText组件
```

## 方法
### 追加名

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextcomponent.appendsibling(组件as craftbiner.api.util.text.MCTextComponent)；
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextcomponent.appendText(文本作为字符串)；
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 文本 | 字符串[string] | No description provided |


### 复制 Raw

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
a. myMCTextcomponent.copyRaw()；
```

### 深入复制

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString #获取字符串

返回类型：字符串

```zenscript
myMCTextcomponent.getString();
```

### getString截取

返回类型：字符串

```zenscript
myMCTextComponent.getStringTruncated(maxLen 为int)；
```

| 参数     | 类型 | 描述                      |
| ------ | -- | ----------------------- |
| maxLen | 整数 | No description provided |


### getUnformattedComponentText

返回类型：字符串

```zenscript
myMCTextcomponent.getUnformed ComponentText();
```

### setStyle

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as craftwiner.api.util.text.MCStyle);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 样式 | [craftminstrer.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## 参数

| 名称                       | 类型                                                                                                         | 可获得  | 可设置   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ---- | ----- |
| 格式化文本                    | 字符串[string]                                                                                                | true | false |
| 兄弟姐妹们：                   | 列表&lt;[craftmiliter.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true | false |
| unformattedComponentText | 字符串[string]                                                                                                | true | false |

## 运算符
### ADD

```zenscript
myMCTextComponent + 组件作为 craftbinstrer.api.util.text.MCTextComponent
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCText组件 ~ 作为craftbinstrer.api.util.text.MCText组件
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |
### 烧结厂

```zenscript
myMCText组件 << 组件作为craftbinstrer.api.util.text.MCText组件
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏  |
| ----------- | ----- |
| 字符串[string] | false |

