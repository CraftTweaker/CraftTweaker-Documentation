# CTRandom

Obiekt CTRandom jest dostępny tylko z obiektów CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) i umożliwia dostęp do generatora liczb losowych na świecie.

## Importowanie klasy

Jeśli chcesz kiedykolwiek zaimportować klasę, tutaj:

```zenscript
import mods.contenttweaker.Random;
```

## Metody ZenMethods

Jedynymi dostępnymi metodami są wartości losowe, albo jako wartości logiczne, albo jako int.  
Dla tych ostatnich musisz również podać górną granicę (górna granica jest wyłączna).

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```