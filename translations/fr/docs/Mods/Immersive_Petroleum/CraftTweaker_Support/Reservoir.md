# Réservoir

## Inscrire un réservoir

| Type de texte               | Type de données                              |
| --------------------------- | -------------------------------------------- |
| Identifiant du nom          | Chaîne de caractères                         |
| Fluide                      | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Taille minimale             | Nombre entier                                |
| Taille maximale             | Nombre entier                                |
| Taux de réapprovisionnement | Nombre entier                                |
| Poids                       | Nombre entier                                |

### Poids

Le poids est la chance pondérée d'un morceau contenant ce réservoir de fluide spécifique. Le poids est compté comme en X en Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Alors chaque entrée respective aura une chance pondérée de:

    5 en 34
    5 en 34
    6 en 34
    8 en 34
    10 en 34
    

### Exemple de Code :

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```