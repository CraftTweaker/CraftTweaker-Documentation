# Strahlung
**Hinweis: Der doppelte Satz von Klammern `([...])` ist hier nicht erforderlich!**

## Strahlung
Diese Methode erhält die Strahlung eines `IIngredient` in Rads/Tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Blockmutationen
Diese Methode fügt eine Blockmutation hinzu. Der Block wird nicht mutieren, wenn die Strahlung unter `Strahlungsgrenzwert liegt` ist.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, doppelte StrahlungGrenzwert);
```

## Straffreiheit
Diese Methode gibt die Möglichkeit, die Immunität der Spieler je nach Bühne zu kontrollieren. `defaultImmunity` ist eine boolesche Spezifikation, die die Immunität der Spieler ohne die angegebenen Stufen angibt. `stageNames` ist ein Array mit den Namen aller Stufen, die die Immunität von Spielern umschalten können.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Strahlungsgetriebe/-einstellungen

### Füge Strahlung hinzu
`Betrag` ist die Menge an Strahlung, die der `IEntityLivingBase` hinzugefügt wurde. `useImmunity` kontrolliert, ob die Funktion auch die `IEntityLivingBase` Immunität auftritt.
```zenscript
IEntityLivingBase.addRadiation(doppelter Betrag, @Optional boolesche Verwendung);
```

### Setze Strahlung
`Betrag` ist der Strahlenpegel, der auf die `IEntityLivingBase` angewendet wird. `useImmunity` kontrolliert, ob die Funktion auch die `IEntityLivingBase` Immunität auftritt.
```zenscript
IEntityLivingBase.setRadiation(doppelter Betrag, @Optional boolesche Verwendung);
```

### Erhalte Strahlung
Diese Methode gibt den Strahlenpegel der `IEntityLivingBase` zurück.
```zenscript
IEntityLivingBase.getRadiation();
```

## Radaway Puffergetriebe/-einstellungen

### Radway-Puffer hinzufügen
`Betrag` ist der Betrag des Radaway Puffers zur `IEntityLivingBase` hinzugefügt. `slowBuffer` entscheidet, ob der Radaway Puffer ein langsamer Puffer ist.
```zenscript
IEntityLivingBase.addRadiationResistance(doppelter Betrag, @Optional boolean slowBuffer);
```
### Radway-Puffer einrichten
`Betrag` ist der Betrag des Radaway Puffers, der auf die `IEntityLivingBase` angewendet wird. `slowBuffer` entscheidet, ob der Radaway Puffer ein langsamer Puffer ist.
```zenscript
IEntityLivingBase.setRadiationResistance(doppelter Betrag, @Optional boolean slowBuffer);
```

### Radway-Puffer abrufen
Diese Methode gibt den Radaway Puffer der `IEntityLivingBase` zurück. `slowPuffer` bestimmt, ob ein langsamer Puffer im zurückgegebenen Wert enthalten ist.
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## Giftpuffer Getriebe/Setter

### Giftpuffer hinzufügen
`Betrag` ist die Menge an Giftpuffer, der der `IEntityLivingBase` hinzugefügt wurde.
```zenscript
IEntityLivingBase.addPoisonBuffer(doppelter Betrag);
```
### Giftpuffer einstellen
`Betrag` ist die Menge an Giftpuffer, die auf die `IEntityLivingBase` angewendet wird.
```zenscript
IEntityLivingBase.setPoisonBuffer(doppelter Betrag);
```

### Giftpuffer erhalten
Diese Methode gibt den Giftpuffer der `IEntityLivingBase` zurück.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Strahlungsresistenz Getriebe/Setter
### Strahlungswiderstand hinzufügen
`Betrag` ist die Menge an Strahlungswiderstand, die der `IEntityLivingBase` hinzugefügt wurde.
```zenscript
IEntityLivingBase.addRadawayBuffer(doppelter Betrag);
```
## Bestrahlungswiderstand
`Betrag` ist die Menge an Strahlungswiderstand, die auf die `IEntityLivingBase` angewendet wird.
```zenscript
IEntityLivingBase.setRadawayBuffer(doppelter Betrag);
```

## Strahlungswiderstand erhalten
Diese Methode gibt die Strahlungsresistenz der `IEntityLivingBase` zurück.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Strahlungspegel Getter

### Rohe Strahlungsstufe
Diese Methode gibt die Strahlung der `IEntityLivingBase` in Runden zurück.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Strahlungsstufe
Diese Methode gibt die Änderung des Strahlenspiegels von `IEntityLivingBase` in Rads/Tick zurück.
```zenscript
IEntityLivingBase.getRadiationLevel();
```