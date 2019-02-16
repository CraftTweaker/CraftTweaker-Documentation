# 括号处理器

括号处理器是用于解决 `<tokens>` 内部的 [ZenTokens](/Dev_Area/ZenTokens/)。  
为此，ZS 会将所有括号中的标记加入到一个列表中并将其经过所有已注册的括号处理器来寻找一个不返回 `null` 的处理器。  
带注解的类只需要实现[IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java)。

## 比如：

[CraftTweaker 测试项目括号处理器](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

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
    

## 什么类可以被注解 || 额外信息

- You can annotate all Java Classes that are an instance of [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- You can give the annotation a priority value (e.g. `priority = 100`). The higher the prio the earlier that specific bracket handler is checked: CrT Bracket Handlers normally have a priority of 100.
- After declaring a class a ZenBracketHandler, you still need to register it. It is recommended that you use [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) for that.
- If your bracket Handler cannot resolve the brackets or is not meant to resolve the bracket, you should return `null`