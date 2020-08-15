# Thingies Powered :: Tweaker Class

Questo è il punto di entrata usato per ottenere le istanze delle singole classi `Tweaker` per ogni macchina.

### Importazione

```zenscript
import mods.poweredthingies.Tweaker;
```

### Ottenere La Macchina Tweakers Specifici

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidoCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompoundProducer = Tweaker. temCompoundProduttoreTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMaker = Tweaker.powderMakerTweaker();
```

### Motivi per cui questa classe esiste anche

Principalmente perché amo usare le classi base e Kotlin ed entrambe queste cose non importano bene in CT. O sono troppo ritardato per farlo funzionare. Così... si è bloccato con l'uso di questo invece di avere accesso diretto a singole classi per ogni macchina.