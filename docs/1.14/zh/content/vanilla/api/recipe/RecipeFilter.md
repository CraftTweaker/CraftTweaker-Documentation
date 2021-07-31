# RecipeFilter

这个类由 mod-id 为 `crafttweaker` 的模组添加. 此类由具有mod-id的mod添加 `crafttweaker`.

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.recipe.RecipeFilter
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(name) => false
```
## 方法
### test

Return type: boolean

```zenscript
myRecipeFilter.test(name as String);
```

| 参数       | 返回值类型       | 描述    |
| -------- | ----------- | ----- |
| name（名称） | 字符串[string] | 未提供说明 |



