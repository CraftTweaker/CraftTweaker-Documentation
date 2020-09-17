# Cosas Energizadas :: Clase Tweaker

Este es el punto de entrada utilizado para obtener instancias de las clases individuales de `Tweaker` para cada máquina.

### Importando

```zenscript
importar mods.poweredthingies.Tweaker;
```

### Obtener Tweakers Específicos de Máquinas

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompounder = Tweaker. temCompoundProducerTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powerderMaker = Tweaker.powerderMakerTweaker(); 
 var powerderMaker();
```

### Razones por las que existe esta clase

Principalmente porque me encanta usar clases base y Kotlin y ambas cosas no importan bien en CT. O estoy demasiado retrasado para que funcione. Así que... usted está atascado con esto en lugar de tener acceso directo a clases individuales para cada máquina.