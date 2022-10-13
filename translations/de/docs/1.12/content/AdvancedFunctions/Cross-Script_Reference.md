# Referenzen auf andere Skripte

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## Spezifiktationen

- Eine Referenz auf ein anderes Skript beginnt immer mit `scripts.`
- Danach nimmst du den Pfad relativ zum "scripts"-Ordner (z.B. `scripts.meinUnterordner.a`)
- Wenn du willst, kannst du die Punkt-Notation auch in einem [Import-Statement](/AdvancedFunctions/Import/) verwenden
- ZenScript sucht erst nach passenden Ordnern und danach nach passenden Dateien oder Werten



## Beispiel
Angenommen, wir haben zwei Skripte: `a.zs` und `b.zs`.

a.zs:
```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs
```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```