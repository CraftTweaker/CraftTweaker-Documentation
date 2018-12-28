# 自定义函数

有时 Craft Tweaker 本身以及它的附属提供的函数根本不够用。 接下来我们将会讲解如何构建自定义函数！ 您甚至可以在函数中嵌套函数

## 基本语法

一般来说，你可以这样声明一个静态函数：

```Java
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
//NAME 函数名称
//arguments 传入参数名称
//type 传入参数的数据类型
//returnType 返回值的数据类型
//VALUE 返回的值
```

是否添加方括号中的内容取决于您的目的。 让我们仔细看看具体的函数。

## 静态函数

静态函数在运行脚本之前创建的，并可以在脚本中的任何位置访问。  
您甚至可以使用[跨脚本调用](Cross-Script_Reference)访问在脚本之外声明的函数。

### 无返回值函数

无返回值函数是不会返回任何值的函数。

```Java
//调用tens() 函数，但不传入任何参数
tens();

//调用函数 realTens()，并传入字符串参数“Hello World!”
realTens("Hello World!");


//创建函数 tens()，它不要求传入任何参数
function tens(){
	//调用函数 realTens()，同时传入参数 "" 
	realTens("");
}


//创建函数 realTens()，它要求传入一个字符串作为参数
function realTens(a as string){
	//将这个参数打印 10 次
	for i in 1 to 11{
		print(a);
	}
}
```

### 有返回值函数

你也可以指定一个函数的返回一个值。 这里建议使用 `as` 关键字来定义返回类型。

```Java
//调用 add 函数，并传入参数 1 和 99 
val result = add(1,99);
print(result);

//你可以直接在 print 函数中调用 add 函数
print(add(2,64));

//定义一个函数 add()，它需要传入两个参数： a 和 b（必须设定为整型！），并将返回值设为整型
function add(a as int,b as int) as int{
	//返回 a 与 b 的和
	return a+b;
}
```

## 作为参数的函数

你还可以使用函数作为参数。 在这种情况下，他们在单独的一个类中被创建。 除此之外和普通的静态函数一模一样，你可以直接使用它们的变量名来调用它们。  
你甚至可以把它们设定为[全局变量](/AdvancedFunctions/Global_Static_Variables/)。

如果你想要创建一个函数作参数（并且还是全局参数）的函数，你可以这么做：

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));