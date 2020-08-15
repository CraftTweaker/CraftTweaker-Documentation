# ZenClasses

私はこれをここに置いているので、少なくともZS上のいくつかのことを知りたい人だけがそれを見つけるでしょう。

A ZenClass is essentially a java class but you can define it from within ZS.  
If you think 'That does not really fit the theme of a scripting language' you are right.  
That's why only those who are able to mess with it should ever find this.

## キーワード

これらはクラスの本文で見つけることができるキーワードであり、クラスにメンバーを追加するなど、特定のアクションを開始します。

| 名称             | 説明                                                                     |
| -------------- | ---------------------------------------------------------------------- |
| zenClass       | 新しいクラスを開始します。名前に続ける必要があります。                                            |
| var/val        | valキーワードの最後に使用されたインスタンス変数を作成します。                                       |
| static         | クラス（静的）変数を作成します。 彼らは最終的であることができない。                                     |
| zenConstructor | クラスのコンストラクタを作成します。                                                     |
| 関数             | インスタンスメソッドを作成します。 静的メソッドを作成する方法はありません。クラス以外でも実行できます。                   |
| これは            | 現在のオブジェクトへの参照。 メソッドとコンストラクタでのみ使用できます。 たとえば、パラメータがフィールドを非表示にする場合に使用します。 |

## 例

コメントされた例:

```zenscript
<br /><br />//Creates a class named 'name', you can also access it using scripts.scriptPath.name


zenClass name {

    //Each variable needs a type set. 
    //変数を初期化する必要はありませんが、その場合は Java のように初期化されます。


    //Statics は <clinit>で初期化されます。すなわち、クラスが最初に定義されたときです。
    static myStatic as string = "value";
    static otherStatic as string = "value";

    //If an instance varaible has an initializer, it will be initialized after before the first constructor call.
    val nonStatic as string = "123";

    //インスタンス変数に初期化子がない場合は、最終的な場合でも、必要に応じてコンストラクタで初期化できます。
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


    //明示的にステートメソッドの戻り値の型も推奨します。
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