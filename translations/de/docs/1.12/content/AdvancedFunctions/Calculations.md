# Berechnungen

Leider kann man nicht immer einfach nur Zahlen eingeben. Sometimes you need some calculation.  
Remember that you can use more than two numbers at one, `1+1+1+1` would work fine as well.

## Ein kleiner Tipp

When unexpected results happen in a calculation, it is very well possible that you used two different types.  
For example `13 % 6.5` returns 1, even though the correct result is 0. Wieso? Weil ZenScript seine Berechnungen immer mit zwei Variablen des selben Typs durchführt. In diesem Fall gleicht er den Typ der zweiten Zahl dem Typ der ersten an. In diesem Fall wurde das Ergebnis von `13 % 6` berechnet, da die zweite Nummer vom Datentyp Double (Kommazahl) in Integer (Ganzzahl) umgewandelt wurde.

Sei bei solchen Berechnungen immer vorsichtig und lass dir die Ergebnisse auch mal durch die print-Funktion ausgeben, damit du die Richtigkeit bestätigen kannst.

## Artihmetische Operatoren

Ich hoffe mal, dass ihr alle die folgenden Sachen schon irgendwoher kennt.

| Zeichen | Zuweisezeichen | Funktion          | Beispiel |
| ------- | -------------- | ----------------- | -------- |
| `+`     | `+=`           | Addition          | 1+2      |
| `-`     | `-=`           | Subtraktion       | 2-1      |
| `*`     | `*=`           | Multiplikation    | 1*1      |
| `/`     | `/=`           | Division          | 2/2      |
| `%`     | `%=`           | Modulo (Teilrest) | 13 % 6   |

## Verkettung

Hängt etwas an etwas anderes dran:

```zenscript
//gibt "Hallo Welt" aus
print("Hallo" ~ " " ~ "Welt");
```

## Ergebnisse von Berechnungen

Eine Berechnung führt in der Regel zu einem Ergebnis. Was macht man nun damit?

### Einer Variable zuweisen

Es gibt mehrere Arten, wie man einen Wert einer Variable zuweist:

```zenscript
var test = 0;

//Option 1:
//weist test den Wert 3 (1+2) zu
test = 1+2;

//Option 2:
//weist test den Wert 5 (3+2) zu
test = test + 2;

//Option 3:
//weist test den Wert 2 (5-3) zu
test -= 3;
```

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### Das Ergebnis irgendwo anders verwenden

Du kannst Ergebnisse auch direkt in einer Funktion oder in einer Abfrage verwenden:

```zenscript
//gibt 4 aus
print(3+1);

//entfernt das Element in array[4]
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("Ich habe etwas berechnet!")}
```
