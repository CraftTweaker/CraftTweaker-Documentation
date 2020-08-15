# 省略可能

`@Optional` can be given to a Method parameter to declare it as being optional.  
Optional Parameters can be omitted when calling the method:

## 例

[CraftTweaker's IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager(実装)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient output, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");

        recipesToRemove.add(new ActionFurnaceRemoveRecipe(output, input));
    }
```

技術的には、実装に `@Optional` は必要ありませんが、確認したい場合は追加できます。 次のいずれかを使用してこのメソッドを呼び出すことができます：

```java
furnace.remove(output); ///Input は null
furnace.remove(output, input);
```

## 省略されたパラメータにはどのような値が挿入されますか?

### 注釈のみを使用

Inserted is either `0 0`, `false` or `null`, depending on the annotated Type:

Primitives will be `0` (except bool, which will be false, so technically 0 as well)  
All Objects will be `null`

### アノテーションメンバの使用

| メンバー        | タイプ             | 既定値              |
| ----------- | --------------- | ---------------- |
| 値           | 文字列             | `""`             |
| methodClass | java.lang.Class | `Optional.class` |
| methodName  | 文字列             | `"getValue"`     |

The Optional annotation also supports default values.  
If you want to provide a default value, you can do that by giving the `value` member a String representing the parameter.

デフォルトのプリミティブだけが欲しい場合は、あなたが設定されます。

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI.logError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. そのようなメソッドが見つからない場合はエラーが発生し、null を挿入します。

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value.getDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## どのパラメータに注釈を付けることができますか？

すべてのパラメータに注釈を付けることができますが、注釈付きのパラメータは最後にある必要があることを覚えておく必要があります。 技術的にはうまくいきますがメソッド呼び出しは失敗します

```java
myMethod(@Optional String name, int number)
```

intのみでこのメソッドを呼び出すと常に失敗します！