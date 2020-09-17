# BracketHandler

A bracket handler is used to resolve [ZenTokens](/Dev_Area/ZenTokens/) inside `<tokens>`.  
In order to do that, ZS will add all tokens inside the brackets to a list and go through all registered bracket handlers to find one that does not return `null`.  
The annotated class simply need to implement [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## 例

[CraftTweaker Test Project Bracket Handler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implements IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal environment, List<Token> tokens) {
        if ((tokens.size() < 3)) return null; 
        if (!tokens.get(0).getValue().equalsIgnoreCase("devBracket")) return null;
        if (!tokens.get(1).getValue().equals(":")) return null;

        return new devSymbol(tokens);
    }


    private class devSymbol implements IZenSymbol {

        private final String value;
        public devSymbol(List<Token> tokens) {
            StringBuilder sB = new StringBuilder();
            tokens.stream().map(Token::getValue).forEach(sB::append);
            this.value = sB.toString().replaceAll(":", " ");
        }

        @Override
        public IPartialExpression instance(ZenPosition position) {
            return new ExpressionString(position, "DevSymbol: ".concat(value));
        }

    }

}
```

## どのクラスに注釈を付けることができますか|| 追加情報

- [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java) のインスタンスであるすべてのJavaクラスに注釈を付けることができます。
- 注釈に優先度の値(例えば `priority = 100`)を与えることができます。 プリオが高いほど、特定のブラケットハンドラがチェックされます。CrTブラケットハンドラは通常100の優先順位を持ちます。
- クラスに ZenBracketHandler を宣言した後でも登録する必要があります。 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) を使用することをお勧めします。
- ブラケットハンドラが括弧を解決できないか、括弧を解決するためのものではない場合は、 `null` を返す必要があります。