# Obsługa nawiasów

Obsługa nawiasów jest używana do rozwiązywania [ZenTokens](/Dev_Area/ZenTokens/) wewnątrz `<tokens>`.  
Aby to zrobić, ZS doda wszystkie tokeny wewnątrz nawiasów do listy i przejdzie przez wszystkie zarejestrowane uchwyty nawiasów, aby znaleźć taki, który nie zwraca `null`.  
Klasa opatrzona adnotacją musi po prostu zaimplementować [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Przykład:

[Obsługa wspornika projektu CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implements IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal środowisko, Lista<Token> tokenów) {
        jeśli (tokeny. ize() < 3)) zwraca null; 
        jeśli (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) zwraca null;
        jeśli (!tokens.get(1).getValue(). quals(":")) zwraca null;

        zwraca nowe devSymbol(tokens);
    }


    prywatna klasa devSymbol wdraża IZenSymbol {

        private final String value;
        public devSymbol(List<Token> tokens) {
            StringBuilder sB = new StringBuilder();
            tokenów. tream(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplaceAll(":", " ");
        }

        @Override
        public IPartialExpression instance(ZenPosition position) {
            return new ExpressionString(position "DevSymbol: ". oncat(value));
        }

    }

}
```

## Jakie klasy mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie klasy Java które są instancją [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- Możesz nadać adnotację wartość priorytetową (np. `priorytet = 100`). Im wyższa jest prio, tym wcześniej sprawdza się konkretny uchwyt nawiasu: uchwyty nawiasów CrT mają zazwyczaj priorytet 100.
- Po ogłoszeniu klasy ZenBracketHandler, nadal musisz ją zarejestrować. Zaleca się, abyś użył do tego [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/).
- Jeśli Twój uchwyt nawiasów nie może rozwiązać nawiasów lub nie ma na celu rozwiązania nawiasu, powinieneś wrócić `null`