# Referenzen auf andere Skripte

Auf alle Skripte mit [statischen Variablen](/AdvancedFunctions/Global_Static_Variables/) oder [eigenen Funktionen](/AdvancedFunctions/Custom_Functions/) kann von anderen Skripten aus zugegriffen werden.  
Mit der Punkt-Notation kann man auf die Datenfelder/Funktionen anderer Skripte zugreifen.

## Spezifiktationen

- Eine Referenz auf ein anderes Skript beginnt immer mit `scripts.`
- Danach nimmst du den Pfad relativ zum "scripts"-Ordner (z.B. `scripts.meinUnterordner.a`)
- Wenn du willst, kannst du die Punkt-Notation auch in einem [Import-Statement](/AdvancedFunctions/Import/) verwenden
- ZenScript sucht erst nach passenden Ordnern und danach nach passenden Dateien oder Werten

## Beispiel

Angenommen, wir haben zwei Skripte: `a.zs` und `b.zs`.

a.zs

```zenscript
static miVariable as string = "miVariable";
function hacerLinea(){
   print("---------------");
}

```

b.zs

```zenscript
import scripts.a.zs;

a.hacerLinea();
print(scripts.a.miVariable);
print(a.miVariable);
a.hacerLinea();

```