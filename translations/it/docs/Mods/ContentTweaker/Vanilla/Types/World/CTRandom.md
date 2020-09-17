# CTRandom

L'oggetto CTRandom è accessibile solo dagli oggetti CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) e consente di accedere al generatore di numeri casuali del mondo.

## Importare la classe

Se mai vuoi importare la classe, qui vai:

```zenscript
import mods.contenttweaker.Random;
```

## ZenMethods

Gli unici metodi disponibili sono per valori casuali, sia booleani che int.  
Per questi ultimi, devi anche fornire un limite superiore (il limite superiore è esclusivo).

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```