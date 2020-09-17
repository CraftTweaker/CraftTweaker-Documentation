# Refroidissement

Le gestionnaire de refroidissement n'appartient à aucune machine spécifique, mais gère les valeurs de refroidissement pour toutes les autres machines.  
Par exemple la Dynamo Enervation utilise les valeurs de refroidissement, tout comme la Dynamo Magmatique avec l'amélioration du réservoir Ientropic fournie.

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.Coolant;
```

## Ajouter un refroidisseur

Utilisez ceci pour enregistrer un nouveau refroidisseur au gestionnaire.  
Le CoolantRF doit être non négatif et le facteur de refroidissement doit être compris entre 1 et 100 (inclus).  
Si ces plages ne sont pas remplies, le refroidisseur ne sera pas enregistré !

```zenscript
//mods.thermalexpansion.Coolant.addCoolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Ce sont deux des valeurs que TE utilise par défaut :
//mods. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20 );
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60 );
```

## Retirer le Refroidissement

Utilisez ceci pour désenregistrer un refroidisseur existant du gestionnaire.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant.fluide (ILiquidStack );
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```