# Verwende Schleifen, um dein Skript besser aussehen zu lassen

## Problem

Wir alle haben es gesehen: Skripte mit mehr als 500 Zeilen, wo es 500 mal `Rezepte sagt.remove(item1);recipes.remove(item2)...`  
Es ist nicht nur ein Schmerz zu schreiben, aber es ist möglich, dass Sie Stunden verbringen, einen kleinen Tippfehler zu debuggen, wenn die einzige Ausnahme, die Sie bekommen ist `Fehler in den Rezepten. s: null`

## Lösung

My rule of thumb: When writing the exactly same command more than 10 times, with only 1 Parameter changing, I'll use a loop.

Anstatt die Funktionen immer auszutippen, erkläre ich ein Array mit allen Elementen und iteriere durch diese.

```zenscript
import crafttweaker.item.IZutat;

val Array = [
    item1,
    item2,
    item3,
...
] als IIngredient[];


für Artikel in Array{
    recipes.remove(item);
}
```

## Vorteile

- Dein Skript wird (meiner Meinung nach einfacher) lesbar
- Sie wissen genau, wo Ihr Skript verschraubt
- Die Änderungen in letzter Minute sind sehr einfach, da Sie das Element einfach hinzufügen oder aus dem Array entfernen müssen.

## Nachteile

- Funktioniert nur, wenn nur wenige Parameter geändert werden
- Du könntest dein Skript aufschrauben, ohne es zu wissen, indem du das Array falsch ausgibst
- Ein Fehler im Array führt zu einem Fehlschlag des gesamten Arrays und es wird überhaupt nichts getan.
- Möglicherweise erhalten Sie kryptische Fehlermeldungen, da das Array falsch erstellt wird.