# MaterialpartColorLieferant

Sie können einen MaterialpartColorSupplier aus einem [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Objekt erstellen, das dann bei Bedarf verwendet wird.

## Diese Klasse importieren

Solltest du die Klasse importieren müssen, hier gehst du:

```zenscript
importieren mods.contenttweaker.MaterialPartColorSupplier;
```

## Statische Methoden

Statische Methoden können auf das Paket aufgerufen werden, nicht auf Instanzen der Klasse.

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart MaterialTeil);
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```