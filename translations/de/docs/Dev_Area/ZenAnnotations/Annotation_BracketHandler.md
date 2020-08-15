# Klammerhandler

Ein Klammerhandler wird verwendet, um [ZenTokens](/Dev_Area/ZenTokens/) in `<tokens>`aufzulösen.  
Um das zu tun ZS fügt alle Token innerhalb der Klammern zu einer Liste hinzu und geht durch alle registrierten Klammerhandler, um einen zu finden, der nicht `null`zurückgibt.  
Die kommentierte Klasse muss einfach [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java) implementieren.

## Beispiel:

[CraftTweaker Test Projekt Klammer Handler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implementiert IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal environment, Liste<Token> Tokens) {
        if (tokens. ize() < 3)) gibt null; 
        if (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) gibt null;
        if (!tokens.get(1).getValue(). quals(":")) gibt null zurück;

        gibt neue devSymbol(tokens);
    }


    Private class devSymbol implementiert IZenSymbol {

        private endgültige Zeichenkette Wert;
        public devSymbol(List<Token> tokens) {
            StringBuilder sB = new StringBuilder();
            Token. tream(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplaceAll(":", " ");
        }

        @Override
        public IPartialExpression instance(ZenPosition position) {
            return new ExpressionString(position, "DevSymbol: ". oncat(value));
        }

    }

}
```

## Welche Klassen können kommentiert werden || Zusätzliche Informationen

- Sie können alle Java-Klassen kommentieren, die eine Instanz von [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java) sind.
- Sie können der Anmerkung einen Prioritätswert geben (z.B. `Priorität = 100`). Je höher der Prio ist, desto früher wird der spezifische Klammerhandler überprüft: CrT-Klammerhandler haben normalerweise eine Priorität von 100.
- Nachdem Sie eine Klasse als ZenBracketHandler deklariert haben, müssen Sie sie trotzdem registrieren. Es wird empfohlen, [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) dafür zu verwenden.
- Wenn Ihr Klammerhandler die Klammern nicht auflösen kann oder die Klammer nicht lösen soll, sollten Sie `null` zurückgeben