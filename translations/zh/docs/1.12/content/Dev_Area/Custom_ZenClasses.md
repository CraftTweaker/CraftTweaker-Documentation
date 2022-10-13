# Zen类（ZenClasses）

我把这些放在这里，所以那些想用 ZenScript 使用它们的人可以找到。

Zen 类本质上就是一个 Java 类，但你可以用 ZenScript 来定义。  
如果你觉得 “这一点都不像脚本语言” 那么你说对了。  
这就是为什么只有那些能够操纵它的人才可能找到这个页面。


## 关键字

这些关键字可以在类定义体中找到，它们将启动某些动作，例如向类添加一个成员。

| 名称             | 描述                                          |
| -------------- | ------------------------------------------- |
| zenClass       | 开始一个新类，需要在后面加上名称。                           |
| var/val        | 创建一个实例变量，val 关键字使用了 final。                  |
| static         | 创建一个类（静态）变量。 它们不能是 final 的。                 |
| zenConstructor | 为类创建构造函数。                                   |
| function       | 创建一个实例方法。 无法创建静态方法，因为你也可以在类外使用。             |
| this           | 引用向目前正在进行的对象。 仅可在方法与构造函数中使用。 例如在参数中隐藏了一个字段。 |


## 例子

注解示例：
```zenscript

//创建名为“name”的类，可以用 scripts.scriptPath.name 来访问


zenClass name {

    //每个变量都需要类型集 
    //变量无需初始化，但如果你偏要，应按 Java 的写法来初始化。


    //静态变量初始化于 <clinit> 时，也就是类最先定义的时候。
    static myStatic as string = "value";
    static otherStatic as string = "value";

    //如果一个实例变量存在初始化器，其会在稍后于首次构造函数调用前初始化。
    val nonStatic as string = "123";

    //如果一个示例变量无初始化器，如有必要，你可以在构造函数中初始化，即使其为 final。
    val nonStaticTwo as string;


    //一个构造函数需要全部参数（显式输入）
    zenConstructor(parameter as string, parameter2 as string) {
        print("TETETE");
        print(parameter);


        nonStaticTwo = parameter2;
    }


    //可以有好几个构造函数，但无法使它们连锁。
    zenConstructor(parameter as string) {
        print("FFFFFF");
    }


    //建议最好显式声明方法的返回类型。
    //你可以通过调用类名来调用一个构造函数。
var test = name("NOPE");
test = name("nope", "noper");
print(test.myMethod("one", "two"));

print("");

//你也可以用类名来调用静态参数。
print(name.myStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//你还可以用类示例来调用静态参数。
ttt.myStatic = "1";
print(ttt.myStatic);
```