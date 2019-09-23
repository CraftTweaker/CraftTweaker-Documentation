# Классы

I am putting this here so only those who want to know at least some things on ZS will find it.

A ZenClass is essentially a java class but you can define it from within ZS.  
If you think 'That does not really fit the theme of a scripting language' you are right.  
That's why only those who are able to mess with it should ever find this.

## Ключевые слова

These are keywords that can be found in the class' body and they will initiate a certain action, like adding a member to the class.

| Название       | Descrition                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Создает новый класс, после него нужно указать имя.                                                                                                  |
| var/val        | Создает поле класса, неизменяемое, если использовано ключевое слово val.                                                                            |
| static         | Создает переменную класса (статическую). Они не могут быть неизменяемыми.                                                                           |
| zenConstructor | Создает конструктор класса.                                                                                                                         |
| function       | Создает метод. Нельзя создавать статические методы, потому что вы можете и так создавать их вне класса.                                             |
| this           | Ссылка на текущий объект. Может быть использована только в методах и конструкторах. Используется, если параметр передает значение в поле, например. |

## Пример

Пример с комментариями:

```zenscript
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
```