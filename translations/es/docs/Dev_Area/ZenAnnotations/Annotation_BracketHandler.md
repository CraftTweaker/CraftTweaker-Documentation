# BracketHandler

Un manejador de corchetes se utiliza para resolver [ZenTokens](/Dev_Area/ZenTokens/) dentro de `<tokens>`.  
para hacer eso ZS añadirá todos los tokens dentro de los corchetes a una lista y pasará por todos los manejadores de brazos registrados para encontrar uno que no devuelva `null`.  
La clase anotada simplemente necesita implementar [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Ejemplo:

[Manejador de brazaletes de prueba de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implementa IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal environment, Lista<Token> tokens) {
        if (tokens. ize() < 3)) return null; 
        if (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) return null;
        if (!tokens.get(1).getValue(). quals(":")) return null;

        return new devSymbol(tokens);
    }


    clase privada devSymbol implementa IZenSymbol {

        valor final privado de cadena;
        public devSymbol(List<Token> tokens) {
            StringBuilder sB = new StringBuilder();
            tokens. tream(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplaceAll(":", " ");
        }

        @Override
        public IPartialExpression instance(ZenPosition position) {
            return new ExpressionString(position, "DevSymbol: ". oncat(valor));
        }

    }

}
```

## Qué clases se pueden anotar || Información adicional

- Puede anotar todas las clases de Java que son una instancia de [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- Puede dar a la anotación un valor de prioridad (por ejemplo, `prioridad = 100`). Cuanto más alto el prio más temprano se comprueba el manejador de brazos específico: CrT Bracket Handlers normalmente tienen una prioridad de 100.
- Después de declarar una clase un ZenBracketHandler, todavía necesita registrarlo. Se recomienda que utilice [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) para eso.
- Si el bracket Handler no puede resolver los corchetes o no está pensado para resolver el corchete, debe devolver `null`