# Zen类（ZenClasses）

我把这些放在这里，所以那些想用 ZenScript 使用它们的人可以找到。

Zen 类本质上就是一个 java 类，但你也可以用 ZenScript 来定义。  
如果你觉得 “这一点都不像脚本语言” 那么你说对了。  
这就是为什么只有那些能够操纵它的人才可能找到这个页面。

## 关键字

这些关键字可以在类定义体中找到，它们将启动某些动作，例如向类添加一个成员。

| 名称             | 说明                                         |
| -------------- | ------------------------------------------ |
| zenClass       | 开始一个新类，需要在后面加上名称。                          |
| var/val        | 创建一个实例变量，val 关键字使用了 final。                 |
| static         | 创建一个类（静态）变量。 它们不能是 final 的。                |
| zenConstructor | 为类创建构造器。                                   |
| function       | 创建一个实例方法。 无法创建静态方法，因为你也可以在类外使用。            |
| this           | 引用向目前正在进行的对象。 仅可在方法和构造器中使用。 例如在参数中隐藏了一个字段。 |

## 例子

反面例子：

    <br />//Creates a class named 'name', you can also access it using scripts.scriptPath.name
    
    
    zenClass name {
    
        //Each variable needs a type set. 
        //Variables don't need to be initialized, but if you do, initialization is as in Java.
    
    
        //Statics are initialized in &lt;clinit&gt;, i.e. when the class is first defined.
        static myStatic as string = "value";
        static otherStatic as string = "value";
    
        //If an instance varaible has an initializer, it will be initialized after before the first constructor call.
        val nonStatic as string = "123";
    
        //If an instance variable has no initializer, you can initialize it in the constructor if necessary, even if final.
        val nonStaticTwo as string;
    
    
        //A constructor requires all parameters (explicitly typed)
        zenConstructor(parameter as string, parameter2 as string) {
            print("TETETE");
            print(parameter);
    
    
            nonStaticTwo = parameter2;
        }
    
    
        //You can have several constructors, but there is no way of constructor chaining.
        zenConstructor(parameter as string) {
            print("FFFFFF");
        }
    
    
        //It is recommended that you explicitly state method's return types as well.
        function myMethod(arg as string, arg1 as string) as string {
            return "value" + arg ~ arg1;
        }
    
    }
    
    
    
    //You call a constructor by calling the class type/name
    var test = name("NOPE");
    test = name("nope", "noper");
    print(test.myMethod("one", "two"));
    
    print("");
    
    //You can call statics by the use of the class type/name
    print(name.myStatic);
    print(name("parameter1", "parameter2").nonStatic);
    
    val ttt = name("t");
    
    //You can also call statics by the use of a class instance.
    ttt.myStatic = "1";
    print(ttt.myStatic);