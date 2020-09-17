# MaterialePartColorSupplier

È possibile creare un MaterialPartColorSupplier forma un oggetto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) che verrà poi utilizzato ogni volta che richiesto.

## Importare la classe

Se avete bisogno di importare la classe di lui, qui vai:

```zenscript
import mods.contenttweaker.MaterialPartColorSupplier;
```

## Metodi statici

I metodi statici possono essere richiamati sul pacchetto, non su istanze della classe.

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```