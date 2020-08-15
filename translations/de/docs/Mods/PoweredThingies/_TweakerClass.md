# Powered Thingies :: Tweaker Klasse

Dies ist der Einstiegspunkt, um Instanzen der einzelnen `Tweaker` Klassen für jeden Rechner zu erhalten.

### Importieren

```zenscript
importieren mods.poweredthingies.Tweaker;
```

### maschinenspezifische Tweaker bekommen

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompoundProducer = Tweaker. temCompoundProducerTweaker();
var inciner.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMaker = Tweaker.powderMaker();
```

### Gründe dafür, warum diese Klasse überhaupt existiert

Hauptsächlich, weil ich die Benutzung von Basisklassen und Kotlin und beides nicht gut in CT importiere. Oder ich bin zu sehr verärgert, damit es funktioniert. Also... bleiben Sie dabei, dies zu verwenden, anstatt direkten Zugriff auf einzelne Klassen für jede Maschine zu haben.