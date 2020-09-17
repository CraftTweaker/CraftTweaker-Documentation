# Zasilane rzeczy :: Klasa Tweakera

To jest punkt wejścia używany do uzyskania instancji pojedynczych klas `Tweaker` dla każdej maszyny.

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker,
```

### Uzyskiwanie specyficznych dla maszyny Tweakerów

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
fluidCompound = Tweaker.fluidCompoundTweaker();
fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
fluidBurnerCoolant = Tweaker.fluidBurnerCoolant ();
produktów var CompoundProducer = Tweaker. temCompoundProducerTweaker();
spalarnia var = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powerderMaker = Tweaker.powderMakerTweaker();
```

### Powody nawet istnienia tej klasy

Głównie dlatego, że uwielbiam używać klas bazowych i Kotlina, a oba te rzeczy nie importują się dobrze w CT. Albo jestem zbyt opóźniony, aby to zadziałać. Więc... utknęłeś na to zamiast mieć bezpośredni dostęp do poszczególnych klas dla każdej maszyny.