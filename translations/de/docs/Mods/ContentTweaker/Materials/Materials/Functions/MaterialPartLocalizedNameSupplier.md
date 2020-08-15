# MaterialpartLocalizedNameLieferant

Sie können einen MaterialPartLocalizedNameLieferant erstellen aus einem [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Objekt, das dann verwendet wird, wann immer es gefragt wird.

## Diese Klasse importieren

Solltest du die Klasse importieren müssen, hier gehst du:

```zenscript
importieren mods.contenttweaker.MaterialPartLocalizedNameLieferant;
```

## Statische Methoden

Statische Methoden können auf das Paket aufgerufen werden, nicht auf Instanzen der Klasse.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart MaterialTeil);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```