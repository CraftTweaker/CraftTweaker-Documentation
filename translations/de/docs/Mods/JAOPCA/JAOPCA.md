# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Erz Processing Compatibility Attempt) ist eine Modifikation, die darauf abzielt, vielen Mods Erzverarbeitungskompatibilität hinzuzufügen.

## Dieses Paket importieren

Wenn Sie Ihre Methodenanrufe verkürzen möchten, können Sie das Paket importieren.  
Sie können dies mit

```zenscript
importieren mods.jaopca.JAOPCA;
```

## Methoden

Dieses Paket ist Ihr Einstiegspunkt für JAOPCA. Es bietet eine Möglichkeit, um [OreEntry](/Mods/JAOPCA/OreEntry/) Objekte zu überprüfen und zu bekommen. Auf der jeweiligen Seite finden Sie weitere Informationen, aber kurz gesagt, sind es materielle Namen (e. "Gold"), die dann Einträge, wie Stücke, Staub und alle haben können.

- Eintrag: z.B. "nugget", "staub", "molten", ... ( [hier](/Mods/JAOPCA/RegisteredEntries/) für eine Liste von ihnen alle)
- [OreEntry](/Mods/JAOPCA/OreEntry/): z.B. "Diamant", "Kohle", "Redstone", ...
- OreType: z.B. "INGOT", "GEM", "DUST"

### Prüft, ob ein Eintrag existiert

Gibt `true` zurück, wenn ein Eintrag mit dem angegebenen Namen existiert

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### OreEintrag erhalten

Gibt den angegebenen [OreEintrag](/Mods/JAOPCA/OreEntry/) für den angegebenen Namen zurück, oder `null` , wenn er nicht existiert. *Vorsicht: Die meisten Materialien sind groß, und ja, das Gehäuse ist wichtig!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Kohle");
```

### Alle Oretries für einen Eintrag abrufen

Gibt eine Liste aller [OreEntry](/Mods/JAOPCA/OreEntry/) Objekte zurück, die den angegebenen Eintrag registriert haben.

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Alle Oretries für einen Eintrag abrufen

Gibt eine Liste aller [OreEntry](/Mods/JAOPCA/OreEntry/) Objekte des angegebenen OreType zurück.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Alle registrierten Oretries abrufen

Gibt eine Liste aller registrierten [OreEntry](/Mods/JAOPCA/OreEntry/) Objekte zurück.

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```