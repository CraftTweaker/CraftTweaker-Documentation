# BracketHandler

Обработчики скобок используются, чтобы распознавать [токены ZenScript](/Dev_Area/ZenTokens/) внутри `<токенов>`.  
Чтобы сделать это, ZS будет добавлять все токены внутри скобок в список и перебирать все зарегистрированные обработчики скобок, чтобы найти тот, который не возвращает`null`.  
Помеченные классы просто должны реализовывать [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Пример:

[Обработчик скобок тестового проекта CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

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
    

## Какие классы должны быть помечены || Дополнительная информация

- Вы можете пометить любые классы Java, которые являются экземплярами [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- Вы можете установить значение приоритета аннотации (e.g. `priority = 100`). Чем выше приоритет, тем раньше обработчик скобок проверяется: обработчики скобок CraftTweaker обычно имеют приоритет 100.
- После объявления класса ZenBracketHandler, вам все еще нужно зарегистрировать его. Рекомендуется, чтобы вы использовали для этого [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/).
- Если ваш обработчик скобок не может разобрать скобки или это не предназначен для этого, вы должны вернуть `null`.