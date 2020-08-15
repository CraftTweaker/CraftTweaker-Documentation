# Das Konzept

Schleifen ist ein altes Konzept und eine der Grundlagen für die Programmierung: Wiederholung der gleichen Aktion über eine Gruppe von Elementen, während des Filterns einige von ihnen aus oder Umwandlung von Sätzen. Oder man findet sogar das erste Element in einer Liste, die eine bestimmte Bedingung erfüllt oder die Elemente rekursiv zählt.

In der prozeduralen und zwingenden Programmierung das meiste wurde mit dem alten `für` Schleifen und einer Reihe von bedingten Anweisungen mit ihrem relativen `erledigt, fahren Sie fort` und `break` fort. Dies mag einfacher erscheinen, aber es benötigt viel Code für einfache Operationen wie Filtern und kann Schachtelketten erzeugen, die länger andauern können. Außerdem wird die Absicht nicht ausgedrückt, es sei denn, der Code gibt ihn mit Kommentaren an.

Betrachten Sie den folgenden ZenScript-Code:

```zenscript
var nbtForMc = falsch;

für Rezepte in Rezepten. ll {
    if (recipe.shaped) {
        val output = recipes. utput;
        if (! sNull(output)) {
            if (output. efinition.owner == "minecraft") {
                val hasData = Ausgabe. asTag;
                if (hasData) {
                    nbtForMc = true;
                    Pausen;
                }
            }
        }
    }
}
```

Was dieser Code vom ersten Blick her nicht ersichtlich ist und verlangt, dass der Benutzer die Logik lesen muss, um zu verstehen. Betrachten Sie dieses äquivalente über Sequenzen:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe. haped; })
    .map(function (recipe) { return recipe.output; })
    . ilterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output. efinition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

Dieser Code macht genau das Gleiche und ist nicht nur prägnanter aber vermittelt auch mehr Bedeutung, dass eine Kette von verschachtelten `wenn` Anweisungen. Zugegebenermaßen scheint dies aufgrund der Einfachheit des betreffenden Codes keine allgemeine Verbesserung zu sein. , aber es kann sich für kompliziertere Logiken als nützlich erweisen.

Ein weiterer Profi des obigen Codes ist, dass die Auswertung erst durchgeführt wird, wenn `irgendein Aufruf` stattfindet bedeutet, dass die Sequenz über zusätzliche Methodenaufrufe im Laufe der Zeit erweitert werden kann und sie nicht aufgelöst wird, bis eine "Terminal"-Methode aufgerufen wird (i. , eine Methode, die keine `Sequenz` selbst zurückgibt. This proves extremely useful since it is not necessary to evaluate the whole `recipes.all` array.

Um Sequenzen zu starten und zu nutzen, können Sie sowohl die [Klassendokumentation](/Mods/Boson/Sequences/Docs/) als auch [konsultieren, wie Sie eine](/Mods/Boson/Sequences/Obtaining/) Dokumentationsseite erhalten.
