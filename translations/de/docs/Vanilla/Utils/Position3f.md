# Position 3f

Eine Position in Minecraft besteht aus 3 Werten: x, y und z.  
Ein Position3f Objekt speichert eine Position mit diesen drei Werten.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie [das Paket](/AdvancedFunctions/Import/) importieren, wenn Sie irgendwelche Probleme auftreten (wie zum Beispiel ein [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.util.Position3f;`

## Ein Position3f-Objekt wird geladen

Du kannst ein solches Objekt mit folgenden Mitteln bekommen:

- Die `Position` ZenGetter auf einem [IPlayer](/Vanilla/Players/IPlayer/) Objekt
- Der Position3f-Konstruktor unten
- Der [IBlockPos](/Vanilla/World/IBlockPos/) Position3f Caster.

## Position3f Konstruktor

Sie können ein Position3f-Objekt selbst erstellen, indem Sie die folgende Methode verwenden:

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

Die erste Methode erlaubt es Ihnen, eine Position an den angegebenen Koordinaten zu erstellen.

## ZenGetters und ZenSetter

| ZenGetter | ZenSetter | Beschreibung                        |
| --------- | --------- | ----------------------------------- |
| x         | x         | Gibt den x-Wert der Position zurück |
| y         | y         | Gibt den y Wert der Position zurück |
| z         | z         | Gibt den Z-Wert der Position zurück |

## Casting als IBlockPos

You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos/) Object: Remember, for casting you need to [import](/AdvancedFunctions/Import/) the type you want to cast to unless you use the full name.

```zenscript
posThree.asBlockPos();
posThree als IBlockPos;
```