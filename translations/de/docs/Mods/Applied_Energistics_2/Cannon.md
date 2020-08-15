# Kanone

### Importieren

```zenscript
importieren mods.appliedenergistics2.Cannon;
```

### Hinzufügen

Fügt Munitionstypen für die Materiekanone hinzu. Gewicht bezieht sich auf (grobe) das Atomgewicht des Materials.

```zenscript
Cannon.registerAmmo(IItemStack Munition, doppeltes Gewicht);

Cannon.registerAmmo(<minecraft:bone>, 40.07);
```