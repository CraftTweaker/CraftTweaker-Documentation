# Rezept-Funktionen

# IRecipeFunction

Einige Rezepte unterstützen benutzerdefinierte Funktionen, um ihre Ausgabe programmatisch zu bestimmen.  
Dies kann besonders nützlich sein, wenn Sie einige Informationen des Eingabewertes, wie den Schadenwert, benötigen.  
Dies ist eine so genannte IRecipeFuntion.

## Beispiel für die Reparatur einer Spitzhacke

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//wir starten normal, indem wir die Ausgabe
recipes.addShapeless("pickrepair",diaPick,

//gefolgt von dem Eingabearray. Eine Änderung aber, wir markieren die Diamantspitzhacke, so dass wir sie später in der Funktion verwenden können
[diaPick. nyDamage().marked("mark"),<minecraft:diamond>],

//jetzt beginnen wir die Funktion zu deklarieren. 
//Es benötigt 3 Parameter, einen für die Ausgabe, einen für die Eingaben und einen für die Erstellung von Infos. 
//Wir benötigen jedoch nur den Eingabeparameter.
function(out, ins, cInfo){

    //jetzt wird die Spitzhacke entweder mit 0 DMG oder aktuellen Schaden -10 zurückgegeben, was auch immer höher ist. Dies soll negative Schadenswerte verhindern.
    return ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//Wir brauchen hier keine recipeAction und setzen Sie es einfach auf null
null);
```

## Wie man eine IRecipeFunction einrichtet

Wie Sie vielleicht im obigen Beispiel gesehen haben, es gibt eine Funktion mit 3 Parametern:  
Sie müssen sie nicht auf diese Weise aufrufen, sie können einen beliebigen Namen haben.

`out` ist die Ausgabe des Rezepts und ein IItemStack-Objekt.  
`ins` ist eine Karte mit den Markierungen als Schlüssel und den markierten Eingaben als Werte.  
`cInfo` ist ein ICraftingInfo Objekt

Die Funktion muss den IItemStack zurückgeben, den das Rezept ausgeben soll.

Du kannst ein Rezept ungültig machen, indem du `null` zurückgibst, damit es unter bestimmten Bedingungen nicht hergestellt werden kann.

Ändern der `ins` hier ist eine schlechte Idee, diese Funktion löst für jede Änderung im Handwerksraster aus, nicht wenn das Ergebnis tatsächlich herausgezogen wird.

# IRecipeAction

Aber CraftTweaker geht über die einfache Berechnung Ihrer Ausgaben mit Funktionen hinaus.  
Mit einer IRecipeAction Funktion kannst du auch festlegen, was passieren soll, wenn ein Nutzer den Gegenstand herstellt.  
Ein IRecipeAction-Objekt kommt nach einer IRecipeFunction!

```zenscript
val stone = <minecraft:stone>;

recipes.addShapeless("experiencestone",stone,[stone,stone,stone,stone,stone],
//IrecipeFunction, just return the output, it doesn't interested us this time.
function(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

Dies gibt dem Spieler, der jedes Mal, wenn das Handwerk abgeschlossen ist, das Rezept 1 Level ausführt. Auch hier haben wir eine Funktion mit 3 Parametern:  
`out` ist die Ausgabe des Rezepts und ein IItemStack-Objekt.  
`cInfo` ist ein ICraftingInfo Objekt  
`Spieler` ist der Spieler, der das Rezept ausführt und ein [IPlayer](/Vanilla/Players/IPlayer/) Objekt.