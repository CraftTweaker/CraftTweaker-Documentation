# Запитанные вещи :: Класс Tweaker

Это исходная точка, используемая для получения экземпляров индивидуальных `Tweaker` классов для каждой машины.

### Импорт

```zenscript
import mods.poweredthingies.Tweaker;
```

### Получение специальных машинных настроек

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
вещи var Compounder = Tweaker. temoundProducerTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemfier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMakerTweaker(); 
 var powderMakerTweaker();
```

### Причины, по которым этот класс даже существует

В основном потому, что я люблю использовать базовые классы и Kotlin и обе эти вещи не очень импортировать в CT. Или я слишком отступил, чтобы заставить его работать. Так... вы застряли использовать это вместо того, чтобы иметь прямой доступ к отдельным классам для каждой машины.