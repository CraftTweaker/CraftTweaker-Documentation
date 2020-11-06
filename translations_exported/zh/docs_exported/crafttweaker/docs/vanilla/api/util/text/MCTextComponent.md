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

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | String | No description provided |


### 复制 Raw

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
a. myMCTextcomponent.copyRaw()；
```

### createStringTextComponent

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createStringTextComponent(text as String);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | String | No description provided |


### createTranslationTextComponent

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String);
```

| 参数             | 类型     | 描述                      |
| -------------- | ------ | ----------------------- |
| translationKey | String | No description provided |



返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String, args as Object[]);
```

| 参数             | 类型       | 描述                      |
| -------------- | -------- | ----------------------- |
| translationKey | String   | No description provided |
| args           | Object[] | No description provided |


### deepCopy

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString #获取字符串

Return type: String

```zenscript
myMCTextComponent.getString();
```

### getStringTruncated

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen as int);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| maxLen | int | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

返回类型： [craftbiner.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| 参数 | 类型                                                                    | 描述                      |
| -- | --------------------------------------------------------------------- | ----------------------- |
| 样式 | [craftminstrer.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## 参数

| 名称                       | 类型                                                                                                         | 可获得  | 可设置   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ---- | ----- |
| formattedText            | String                                                                                                     | true | false |
| siblings                 | 列表&lt;[craftmiliter.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true | false |
| unformattedComponentText | String                                                                                                     | true | false |

## 运算符
### ADD

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 组件 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| String | false |

