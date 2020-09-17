# CTRandom

El objeto CTRandom solo es accesible desde los objetos [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) de CoT y le permite acceder al generador de números aleatorios del mundo.

## Importar la clase

Si alguna vez quieres importar la clase, aquí vas:

```zenscript
import mods.contenttweaker.Random;
```

## Métodos

Los únicos métodos disponibles son para valores aleatorios, ya sea como booleanos o como int.  
Para este último, también necesitas proporcionar un límite superior (el límite superior es exclusivo).

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```