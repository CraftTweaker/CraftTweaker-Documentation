# Artikelbedingungen

Manchmal werden normale Elemente es nicht schneiden:

Manchmal wollen wir in der Lage sein, Rezepte anzugeben, die nur funktionieren, wenn der Eingabewert einige Bedingungen erfüllt.

Manchmal wollen wir in der Lage sein, Rezepte anzugeben, die einen speziellen Gegenstand herstellen, sei es mit NBT-Tag oder Schadenwert oder anderweitig.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.item.IItemCondition;`

## Eingabebedingungen

Diese werden die Gegenstände beeinflussen, die du verwenden kannst, um den resultierenden Gegenstand herzustellen. Denken Sie daran, Sie können Modifikatoren mischen, um Schaden und NBT-Tag zu vermischen, zum Beispiel

```zenscript
<minecraft:iron_pickaxe>.only().withTag({display: {Lore: "Sind wir nicht alle Schmetterlinge?"}});
```

### Schaden

#### anfallender Schaden

Der Schadenwert des Eingabegegenstandes spielt keine Rolle für das Rezept

```zenscript
item.anyDamage()
```

#### nur Beschädigt

Der Eingabewert muss beschädigt werden

```zenscript
item.onlyDamaged();
```

#### Mindestens beschädigt

Der Schadenwert des Gegenstands muss mindestens der angegebene `-Wert sein`  
`Wert` ist eine Int

```zenscript
item.onlyDamageAtLeast(Wert);
```

#### Höchstens Schaden

Der Schadenwert des Gegenstands muss maximal den angegebenen `Wert haben`  
`Wert` ist eine Inte

```zenscript
item.onlyDamageAtMost(Wert);
```

#### Schaden zwischen

Der Schadenswert des Gegenstands muss zwischen dem angegebenen Wert `Wert 1` und `Wert 2`  
`Value1` liegen  
`Value2` ist ein Int </code>

```zenscript
item.onlyDamageBetween(wert1, wert2);
```

### Bekomme Items zurück oder verbiete explizit die Wiederverwendbarkeit eines Items

Manchmal benötigst du ein Rezept, bei dem du einige deiner Eingaben zurückerhältst.  
Durch Anwendung von `transformDamage(int)` können Sie solche Rezepte erstellen.

#### transformationsschaden

Der Eingabewert erhält `Wert` Schadenspunkte und du wirst ihn zurückbekommen, es sei denn, er bricht während des Herstellungsprozesses.  
`Wert` ist ein Int

```zenscript
item.transformSchaden(wert);
```

### NBT-Tags

Manchmal möchten wir, dass deine Zutaten ein bestimmtes NBT-Tag benötigen. The recipe doesn't care if your item has NBT-Tags other than the ones specified, So a pickaxe with a specific lore may also be enchanted!

Wenn Sie `mit Tag` verwenden, wird es von jei korrekt angezeigt, wenn Sie `only WithTag`verwenden, wird jei nur ein tagless Item anzeigen!

Here's how you do it: `NBTTag` is your NBT Data

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: "Pickle the Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}});
```

## Ausgabemodifikatoren

Wenn Sie Eingabebedingungen angeben können, ist es nicht so schwer, auch Ausgabebedingungen zu definieren, oder besser gesagt, Ausgabemodifikatoren.

### Schaden

Ihr Ausgabeartikel hat `Wert` Schadenspunkte.  
`Wert` ist eine Int.

```zenscript
item.withSchaden(wert);
```

### NBT-Tags

Ihr Ausgabeartikel wird `NBTTag` als NBT-Tag haben.  
`NBTTag` ist Ihre NBT-Daten

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Picklebe"}})
```

## Eigene Artikelbedingungen registrieren

Sie können auch Ihre eigenen Artikelbedingungen hinzufügen. Dies sind spezielle Funktionen, die das [Element](/Vanilla/Items/IItemStack/) selbst als einen Parameter akzeptieren.

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

Die Funktion muss einen Bool zurückgeben, der zutrifft, wenn der Gegenstand mit der Bedingung übereinstimmt.