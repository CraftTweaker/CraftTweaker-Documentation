# CTRandom

Das CTRandom-Objekt ist nur innerhalb von CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Objekten erreichbar und erlaubt Ihnen den Zugriff auf den weltweit zufälligen Zahlengenerator.

## Diese Klasse importieren

Wenn Sie jemals die Klasse importieren möchten, gehen Sie hier:

```zenscript
import mods.contenttweaker.Random;
```

## ZenMethoden

Die einzigen verfügbaren Methoden sind für zufällige Werte, entweder als boolesche oder als int.  
Für Letztere musst du auch eine Obergrenze angeben (die Obergrenze ist exklusiv).

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```