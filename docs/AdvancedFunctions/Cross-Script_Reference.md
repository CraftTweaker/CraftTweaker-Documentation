# 跨脚本调用

所有的脚本都有 [静态变量](/Advanced_Functions/Global_Static_Variables) 或者 [自定义函数](/Advanced_Functions/Custom_Functions) ，能够注册并用于跨脚本调用。   
这将允许你使用 `.` 符号访问其他脚本的方法或者变量。

## 详细说明

- 跨脚本调用都以 `scripts.` 开头
- 指定脚本文件夹相对路径。（比如 `scripts.mySubfolder.a.zs`）
- [导入语句](/Advanced_Functions/Import) 中也可以使用点符号，如果你喜欢的话；
- ZS 首先会匹配目录，接下来才会匹配文件或者数值。



## 举例
这里有两个脚本：`a.zs` 和 `b.zs`。

a.zs：
```js
static myVal as string = "myVal";

function makeLine() {
	print("---------------");
}
```

b.zs：
```python
print(scripts.a.myVal);
scripts.a.makeLine();
```