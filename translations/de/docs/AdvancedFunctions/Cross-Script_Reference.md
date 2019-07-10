# Referenzen auf andere Skripte

Auf alle Skripte mit [statischen Variablen](/AdvancedFunctions/Global_Static_Variables/) oder [eigenen Funktionen](/AdvancedFunctions/Custom_Functions/) kann von anderen Skripten aus zugegriffen werden.  
Mit der Punkt-Notation kann man auf die Datenfelder/Funktionen anderer Skripte zugreifen.

## Spezifiktationen

- Eine Referenz auf ein anderes Skript beginnt immer mit `scripts.`
- You specify the path relative from the scripts folder (e.g. `scripts.mySubfolder.a.zs`)
- You can use the dot-notation in an [import statement](/AdvancedFunctions/Import/) should you choose to do so.
- ZS first checks for matching directories then for matching files or values.

## Example

Let's say we have two scripts: `a.zs` and `b.zs`.

a.zs:

```kotlin
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```kotlin
print(scripts.a.myVal);
scripts.a.makeLine();
```