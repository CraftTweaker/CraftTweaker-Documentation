# 食谱滤镜

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作器.api.recipe.RecipeFilter
```

## 函数接口

此类是一个功能接口。 这意味着您可以使用 lambda 符号来创建一个实例。 Lambda 符号如下所示：
```zenscript
(name) => false
```
## 方法
### 测试

返回类型：布尔值

```zenscript
myRecipefilter.test(名称为字符串)；
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 名称 | 字符串[string] | No description provided |



