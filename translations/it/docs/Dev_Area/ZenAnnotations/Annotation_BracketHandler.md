# BracketHandler

Un gestore parentesi viene utilizzato per risolvere [ZenTokens](/Dev_Area/ZenTokens/) dentro `<tokens>`.  
Per farlo, ZS aggiungerà tutti i token all'interno delle parentesi a una lista e passerà attraverso tutti i gestori di parentesi registrati per trovare uno che non restituisce `null`.  
La classe annotata deve semplicemente implementare [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Esempio:

[Gestore Staffa Del Progetto CraftTweaker Test](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implementa IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal environment, Elenca<Token> tokens) {
        if (tokens. ize() < 3)) return null; 
        if (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) return null;
        if (!tokens.get(1).getValue(). quals(":")) return null;

        return new devSymbol(tokens);
    }


    private class devSymbol implementa IZenSymbol {

        private final String value;
        public devSymbol(List<Token> tokens) {
            StringBuilder sB = new StringBuilder();
            gettoni. tream(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplaceAll (":", " ");
        }

        @Override
        public IPartialExpression instance(ZenPosition position) {
            return new ExpressionString(position, "DevSymbol: ". oncat(value));
        }

    }

}
```

## Quali classi possono essere annotati <unk> <unk> Ulteriori informazioni

- Puoi annotare tutte le classi Java che sono un'istanza di [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- Puoi dare all'annotazione un valore di priorità (es. `priorità = 100`). Più alto è il prio prima che viene controllato il gestore di staffe specifico: CrT Bracket Handlers normalmente hanno una priorità di 100.
- Dopo aver dichiarato una classe ZenBracketHandler, devi ancora registrarla. Si consiglia di utilizzare [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) per questo.
- Se il tuo gestore parentesi non può risolvere le parentesi o non è destinato a risolvere la parentesi, dovresti restituire `null`