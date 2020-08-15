# Zasilane rzeczy

Obsługa maszyn nierolniczych napędzanych rzeczami rzemieślniczymi.

### Mod Info

Curseforge: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Strona internetowa: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### Metody integracji CT

Wszystkie maszyny zintegrowane z komputerowymi urządzeniami wspomagającymi te metody:

```zenscript
XYZ.clear() // wyczyści cały rejestr przepisów
XYZ.logKeys() // wyśle wszystkie klucze w tym rejestrze do dziennika CT
XYZ. emoveRecipe(klucz: String)) // usunie przepis z rejestru
XYZ.addRecipe(...) // dodaje nowy przepis
```

Aby pobrać klasę `Tweaker` dla każdej maszyny, musisz użyć klasy `mods.poweredthingies.Tweaker`.