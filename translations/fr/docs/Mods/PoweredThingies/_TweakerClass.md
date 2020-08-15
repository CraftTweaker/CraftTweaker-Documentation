# Thingies Powered :: Tweaker Class

C'est le point d'entrée utilisé pour obtenir des instances des classes individuelles `Tweaker` pour chaque machine.

### Importation en cours

```zenscript
Importer mods.poweredthingies.Tweaker;
```

### Obtenir des ajustements spécifiques à la machine

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompoundProducer = Tweaker. temCompoundProducerTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMaker = Tweaker.powderMakerTweaker();
```

### Raisons pour lesquelles cette classe existe même

En gros parce que j'aime utiliser des classes de base et Kotlin et ces deux choses ne sont pas bien importées en CT. Ou je suis trop retardé pour le faire fonctionner. Alors... vous êtes coincé à utiliser ceci au lieu d'avoir un accès direct à des classes individuelles pour chaque machine.