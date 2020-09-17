# Thingies Powered

Macchine non agricole di Thingies Powered CraftTweaker supporto.

### Mod Info

Curseforge: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Sito web: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### Metodi di integrazione CT

Tutte le macchine integrate con CT supportano questi metodi:

```zenscript
XYZ.clear() // cancellerà l'intero registro delle ricette
XYZ.logKeys() // inserirà tutte le chiavi di quel registro nel log di CT
XYZ. emoveRecipe(key: String)) // rimuoverà la ricetta con quella chiave dal registro
XYZ.addRecipe(...) // aggiunge una nuova ricetta
```

Per recuperare la classe `Tweaker` per ogni macchina è necessario utilizzare la classe statica `mods.poweredthingies.Tweaker`.