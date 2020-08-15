# 括号处理器

括号处理器是用于解决 `<tokens>` 内部的 [ZenTokens](/Dev_Area/ZenTokens/)。  
为此，ZS 会将所有括号中的标记加入到一个列表中并将其经过所有已注册的括号处理器来寻找一个不返回 `null` 的处理器。  
带注解的类只需要实现[IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java)。

## 比如：

[CraftTweaker 测试项目括号处理器](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(优先级=34)
@ZenRegistry
public classBraketWiki implements IBraacketHandler@un.org

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal EnvironmentGlobal Environment, 列表<Token> tokens)
        if (tokens. ize() < 3)) 返回 null; 
        if (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) 返回 null；
        if (!tokens.get(1).getValue(). quals(":")) 返回 null;

        返回 devSymbol(tokens);
    }


    private class devSymbol implementing IZenSymbol @un.org

        private final String value;
        public devSymbol(List<Token> tokens) 然后再来
            StringBuilder sB = new StringBuilder();
            个令牌。 tream(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplacAll(":", ");
        }

        @Override
        public IPpartialExpression instance(Zenposition position) }
            return new ExpressionString(position) “DevSymbol：”。 oncat(value))；
        }

    }

}
```

## 什么类可以被注解 || 额外信息

- 你可以注解所有继承了[IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java)的 Java 类。
- 你可以给注解传入优先级值(例: `priority = 100`)。 优先级越高检查特定括号处理器越早：CrT 括号处理器一般拥有100的优先级。
- 在定义 ZenBracketHandler 类后，你仍然需要注册它。 建议你使用 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)。
- 如果你的括号处理器无法解析特点括号或不是为了解析它，你应该返回 `null`。