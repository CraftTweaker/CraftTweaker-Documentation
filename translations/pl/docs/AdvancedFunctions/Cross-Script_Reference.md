# Odniesienie do Skryptu

Wszystkie skrypty, które mają [zmienne statyczne](/AdvancedFunctions/Global_Static_Variables/) lub [niestandardowe funkcje](/AdvancedFunctions/Custom_Functions/) są zarejestrowane do odwołania międzyskryptowego.  
To pozwala na dostęp do tych pól/funkcji za pomocą notacji kropkowej.

## Specyfikacje

- Odniesienia do skryptów krzyżowych zaczynają się od `skryptów.`
- Określisz ścieżkę względną z folderu skryptów (np. `scripts.mySubfolder.a.zs`
- Możesz użyć notacji kropkowej w [instrukcji importu](/AdvancedFunctions/Import/) , jeśli to zdecydujesz.
- Najpierw sprawdza czy katalogi pasują do plików lub wartości.

## Przykład

Powiedzmy, że mamy dwa skrypty: `a.zs` i `b.zs`.

a.zs:

```zenscript
statyczny myVal jako ciąg znaków = "myVal";

funkcja makeLine() {
    print("---------------");
}
```

b.zs

```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```