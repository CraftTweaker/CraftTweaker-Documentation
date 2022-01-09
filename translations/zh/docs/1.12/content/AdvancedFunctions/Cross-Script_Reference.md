# 跨脚本调用

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## 使用规范

- 跨脚本掉用以 `scripts.` 开头
- 指定脚本文件的相对路径（例：`scripts.mySubfolder.a.zs`）
- 如果你喜欢这样，[导入语句](/AdvancedFunctions/Import/)中也可以使用点符号
- ZS 首先会匹配目录，接下来才会匹配文件或者值。



## 例子
假设我们有两个脚本: `a.zs` 和 `b.zs`。

a. zs：
```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs：
```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```