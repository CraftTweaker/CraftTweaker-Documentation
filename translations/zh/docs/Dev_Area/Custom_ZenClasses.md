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
| 瓦尔/瓦尔          | 创建一个实例变量，val 关键字使用了 final。                 |
| 静态的            | 创建一个类（静态）变量。 它们不能是 final 的。                |
| zenConstructor | 为类创建构造器。                                   |
| 函数             | 创建一个实例方法。 无法创建静态方法，因为你也可以在类外使用。            |
| 这个             | 引用向目前正在进行的对象。 仅可在方法和构造器中使用。 例如在参数中隐藏了一个字段。 |

## 例子

反面例子：

```zenscript
<br />//Creates a classe nom 'name', you can accessed it using scripts.scriptPath.name


zenClass name }

    // 每个变量需要设置类型。 
    ///Variables 不需要初始化，但如果您确实如此，初始化就像在 Java 中。


    ///statics 是在 <clinit>中初始化的，即当类是第一个定义时。
    静态mystatic as string = "value";
    静态otherstatic as string = "value";

    //如果一个实例 varaible 有初始化器，它将在第一次构造函数调用之前初始化。
    val non-static as string = "123";

    ///如果一个实例变量没有初始化器，您可以在构造函数中初始化，即使是最终变量。
    以字符串形式呈现非静态二次；


    ///A 构造函数需要所有参数 (明确键入)
    zenConstructor(参数作为字符串， 参数2 以字符串形式显示。
        打印("TETETE")；
        打印(参数)；


        non-StaticTwo = 参数2;
    }


    //您可以有几个构造函数，但是没有任何构造函数链。
    zenConstructor(参数作为字符串) 然后
        print("FFFF");
    }


    /It is recommended that you clearly state method's return types
    function myMethod(arg as string, arg1 as string) as stringed 然后
        return "value" + arg ~ arg1;
    }

}



//您调用类类型/名称
var test = name("NOPE")；
test = name("nope", "noper");
print(test). yMethod("one", "two");

print("");

//you can calling statics by the class type/name
print(name. yStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

///您也可以通过使用类实例来呼叫static。
ttt.myStatic = "1";
print(ttt.myStatic);
```