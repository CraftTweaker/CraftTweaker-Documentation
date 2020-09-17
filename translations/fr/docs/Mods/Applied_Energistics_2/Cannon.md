# Canon

### Importation en cours

```zenscript
Importer mods.appliedenergistics2.Con ;
```

### Ajout en cours

Ajoute des types de munitions pour le canon en question. Le poids se réfère (grossièrement) au poids atomique du matériau.

```zenscript
Cannon.registerAmmo(IItemStack munitions, poids double);

Cannon.registerAmmo(<minecraft:bone>, 40.07);
```