# RecipeFilter

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作器.api.recipe.RecipeFilter
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(name) => false
```
## 使用方式
### test

Return type: boolean

```zenscript
myRecipeFilter.test(name as String);
```

| 参数       | 类型          | 描述                      |
| -------- | ----------- | ----------------------- |
| name（名称） | 字符串[string] | No description provided |



