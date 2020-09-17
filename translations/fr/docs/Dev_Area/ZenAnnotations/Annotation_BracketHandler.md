# Gestionnaire de tranches

Un gestionnaire de crochets est utilisé pour résoudre les [ZenTokens](/Dev_Area/ZenTokens/) à l'intérieur de `<tokens>`.  
Pour cela, ZS ajoutera tous les jetons entre parenthèses à une liste et passera par tous les gestionnaires de parenthèses enregistrés pour en trouver un qui ne renvoie pas `null`.  
La classe annotée a simplement besoin d'implémenter [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Exemple:

[Gestionnaire de pont de projet de test CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)

```java
@BracketHandler(priority = 34)
@ZenRegister
de classe publique BracketWiki implémente IBracketHandler{

    @Override
    public IZenSymbol resolve(IEnvironmentGlobal environnement, Liste<Token> jetons) {
        if (jetons. ize() < 3)) retourne null; 
        if (!tokens.get(0).getValue(). qualsIgnoreCase("devBracket")) retourne null;
        if (!tokens.get(1).getValue(). quals(":")) retourne null;

        retourne un nouveau devSymbol(tokens);
    }


    classe privée devSymbol implémente IZenSymbol {

        valeur privée finale String ;
        public devSymbol(Liste<Token> jetons) {
            StringBuilder sB = new StringBuilder();
            jetons. frémisse(). ap(Token::getValue).forEach(sB::append);
            this.value = sB.toString(). eplaceAll(":", " ");
        }

        @Override
        instance IPartialExpression publique (position ZenPosition) {
            retourne une nouvelle expressionString(position, "DevSymbol: ". oncat(value));
        }

    }

}
```

## Quelles classes peuvent être annotées || Informations supplémentaires

- Vous pouvez annoter toutes les classes Java qui sont une instance de [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- Vous pouvez donner à l'annotation une valeur de priorité (par exemple `priorité = 100`). Plus le premier est élevé, plus tôt le gestionnaire de parenthèses est vérifié : les gestionnaires de brackets CrT ont normalement une priorité de 100.
- Après avoir déclaré une classe ZenBracketHandler, vous devez toujours l'enregistrer. Il est recommandé d'utiliser [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) pour cela.
- Si votre gestionnaire de parenthèses ne peut pas résoudre les parenthèses ou n'est pas destiné à résoudre la parenthèse, vous devriez renvoyer `null`