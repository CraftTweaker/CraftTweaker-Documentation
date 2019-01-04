# 跨脚本调用

所有拥有[静态变量](/AdvancedFunctions/Global_Static_Variables/)或者[自定义函数](/AdvancedFunctions/Custom_Functions/)的脚本，都会被注册并以用于跨脚本调用。  
这将允许你使用点符号访问其他脚本的函数或者变量。

## 使用规范

- 跨脚本掉用以 `scripts.` 开头
- 指定脚本文件的相对路径（例：`scripts.mySubfolder.a.zs`）
- 如果你喜欢这样，[导入语句](/AdvancedFunctions/Import/)中也可以使用点符号
- ZS 首先会匹配目录，接下来才会匹配文件或者值。

## 例子

假设我们有两个脚本: `a.zs` 和 `b.zs`。

a. zs：

```kotlin
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs：

```kotlin
print(scripts.a.myVal);
scripts.a.makeLine();
```