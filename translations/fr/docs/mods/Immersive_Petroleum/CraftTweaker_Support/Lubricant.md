# Inscription du Lubrifiant

## s'inscrire

| Type de texte | Type de données                             |
| ------------- | ------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Préface

La quantité de liquide donnée est utilisée tous les 4 Ticks.

### Exemple de Code :
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubrifiantEntrée );
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## Retirer tout

### Exemple de Code :
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
