# MutableComponent

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.MutableComponent;
```


## 已实现的接口
MutableComponent implements the following interfaces. That means all methods defined in these interfaces are also available in MutableComponent

- [Component](/vanilla/api/text/Component)

## 使用方式

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(component as Component) as MutableComponent
```

| 参数        | 类型                                       | 描述                      |
| --------- | ---------------------------------------- | ----------------------- |
| component | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(content as string) as MutableComponent
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 内容 | string | No Description Provided |


:::

:::group{name=setStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.setStyle(style as Style) as MutableComponent
```

| 参数 | 类型                               | 描述                      |
| -- | -------------------------------- | ----------------------- |
| 样式 | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(formatting as ChatFormatting[]) as MutableComponent
```

| 参数  | 类型                                                   | 描述                      |
| --- | ---------------------------------------------------- | ----------------------- |
| 格式化 | [ChatFormatting](/vanilla/api/text/ChatFormatting)[] | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(style as Style) as MutableComponent
```

| 参数 | 类型                               | 描述                      |
| -- | -------------------------------- | ----------------------- |
| 样式 | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(styleOperator as Function<Style,Style>) as MutableComponent
```

| 参数            | 类型                                                                                            | 描述                      |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| styleOperator | Function&lt;[Style](/vanilla/api/text/Style),[Style](/vanilla/api/text/Style)&gt; | No Description Provided |


:::


