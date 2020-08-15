# Inscription du Lubrifiant

## Inscription Lubrifiant

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick      | Nombre entier                                |

### Exemple de Code :

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, quantité intte);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```