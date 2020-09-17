# ZenOperator

A Method annotated with `@ZenOperator` cannot be called by instance.method(parameters) but instead uses Tokens like `+`, `!` and the like.

## 例

[CraftTweaker's IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

```java
@ZenClass("crafttweaker.data.IData")
@ZenRegister
public interface IData {

    @ZenOperator(OperatorType.ADD)
    IData add(IData other);

    @ZenOperator(OperatorType) SUB)
    IData sub(IData other);

...
}
```

## どのようなメソッドに注釈を付けることができますか|| 追加情報

- 静的でないすべてのメソッドに注釈を付けることができます。 [Operator Type](/Dev_Area/ZenOperators/) ごとに1つのメソッドに注釈を付けるだけです。
- 注釈付きメソッド、少なくとも関連付けられた Assign トークンを持つメソッドは、同じ型を返す必要があります。 (アイテム+アイテム=流体をしないでください!)
- 注釈には [ZenOperatorの値](/Dev_Area/ZenOperators/) を付ける必要があります(例: `OperatorType.ADD`)。 すべての可能なOperatorTypes のリストはこちら [](/Dev_Area/ZenOperators/)からご覧いただけます。