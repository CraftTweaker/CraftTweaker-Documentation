# Классы

I am putting this here so only those who want to know at least some things on ZS will find it.

A ZenClass is essentially a java class but you can define it from within ZS.  
If you think 'That does not really fit the theme of a scripting language' you are right.  
That's why only those who are able to mess with it should ever find this.

## Ключевые слова

These are keywords that can be found in the class' body and they will initiate a certain action, like adding a member to the class.

| Название       | Описание                                                                                                                                            |
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
<br />//Создает класс под названием 'name', вы можете получить к нему доступ с помощью script.<путь к скрипту>.name


zenClass name {

    //Тип каждого поля должен быть указан. 
    //Переменные не требуется обязательно инициализировать, но это возможно так же, как в Java.


    //Статические поля инициализируются в <clinit>, то есть во время определения класса.
    static myStatic as string = "value";
    static otherStatic as string = "value";

    //If an instance varaible has an initializer, it will be initialized after before the first constructor call.
    val nonStatic as string = "123";

    //Если поле объекта не имеет инициализатора, вы можете присвоить ее в конструкторе, даже если она неизменяемая.
    val nonStaticTwo as string;


    //Конструктор должен принимать все параметры с явно указанными типами
    zenConstructor(parameter as string, parameter2 as string) {
        print("TETETE");
        print(parameter);


        nonStaticTwo = parameter2;
    }


    //Вы можете объявить несколько конструкторов. Цепи конструкторов не поддерживаются.
    zenConstructor(parameter as string) {
        print("FFFFFF");
    }


    //Рекомендуется явно указать также возвращаемые типы методов.
    function myMethod(arg as string, arg1 as string) as string {
        return "value" + arg ~ arg1;
    }

}



//Конструкторы вызываются по имени самого класса
var test = name("NOPE");
test = name("nope", "noper");
print(test.myMethod("one", "two"));

print("");

//Статические поля и методы вызываются от самого класса
print(name.myStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//Вы также можете вызывать статические поля и методы от экземпляров класса.
ttt.myStatic = "1";
print(ttt.myStatic);
```