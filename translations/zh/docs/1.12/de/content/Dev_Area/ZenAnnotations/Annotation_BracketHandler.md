# 括号处理器

A bracket handler is used to resolve [ZenTokens](/Dev_Area/ZenTokens/) inside `<tokens>`.  
In order to do that, ZS will add all tokens inside the brackets to a list and go through all registered bracket handlers to find one that does not return `null`.  
The annotated class simply need to implement [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Beispiel:

[CraftTweaker 测试项目括号处理器](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

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

## 什么类可以被注解 || 额外信息

- 你可以注解所有继承了[IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java)的 Java 类。
- 你可以给注解传入优先级值(例: `priority = 100`)。 优先级越高检查特定括号处理器越早：CrT 括号处理器一般拥有100的优先级。
- 在定义 ZenBracketHandler 类后，你仍然需要注册它。 建议你使用 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)。
- 如果你的括号处理器无法解析特点括号或不是为了解析它，你应该返回 `null`。