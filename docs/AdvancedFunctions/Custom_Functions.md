# 自定义函数

很多时候 Craft Tweaker 本身以及它的附属提供的函数根本不够用；  
接下来我们将会讲解如何构建自定义函数；  
你甚至能够在函数中镶套函数。

## 基本语法
一般来说，你可以这样声明一个静态函数：

```js
function NAME ([arguments[as type]]) [as returnType]{
	[Statements]
	[return VALUE;]
}
```

方括号中的内容是可选的，取决于你具体的实现的函数；  
接下来让我们仔细看看具体的功能。


## 静态函数
静态函数在脚本运行之前创建，并且能够在脚本任意处进行访问。  
你甚至可以通过 [跨脚本调用](Cross-Script_Reference)来访问外部声明好的函数。


### 无返回值函数

无返回值函数是不会返回任何数值的函数。

```js
//调用函数 tens()，并不传入任何参数
tens();

//调用函数 realTens()，同时传入字符串参数“Hello World!”
realTens("Hello World!");


//创建函数 tens()，并不要求传入任何参数
function tens(){
	//调用函数 realTens()，同时传入 "" 作为参数
	realTens("");
}


//创建函数 realTens()，只要求传入一个字符串作为参数
function realTens(a as string){
	//将这个参数打印 10 次
	for i in 1 to 11{
		print(a);
	}
}
```

### 有返回值函数

你也可以指定一个函数的返回值。  
这里极为推荐使用 `as` 关键字来定义返回值类型。

```js
//调用 add 函数，并传入 1 和 99 作为参数
val result = add(1,99);
print(result);

//你可以直接在 print 函数中使用 add 函数
print(add(2,64));

//定义一个函数 add()，需要传入参数 a 和 b（必须同时设定为整型！），返回值也为整型
function add(a as int,b as int) as int{
	//返回 a+b 的数值
	return a+b;
}
```


## 以函数作为参数
你当然也可以像使用参数一样使用函数。在这种情况下，他们在单独的一个类中被创建。除此之外和普通的静态函数一模一样，你可以直接使用它们的变量名来调用它们。  
你甚至可以把它们设定为[全局参数](/AdvancedFunctions/Global_Static_Variables)。

如果你想要创建一个函数作参数（并且还是全局参数），你可以这么书写：
```
global addition as function(int, int)int = function (a as int, b as int) as int {
	return a + b;
};

print(addition(1,2));
```