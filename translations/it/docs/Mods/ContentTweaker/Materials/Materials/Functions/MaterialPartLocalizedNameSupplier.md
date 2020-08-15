# MaterialPartLocalizedNameSupplier

È possibile creare un MaterialPartLocalizedNameSupplier forma un oggetto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , che verrà poi utilizzato ogni volta che richiesto.

## Importare la classe

Se avete bisogno di importare la classe di lui, qui vai:

```zenscript
import mods.contenttweaker.MaterialPartLocalizedNameSupplier;
```

## Metodi statici

I metodi statici possono essere richiamati sul pacchetto, non su istanze della classe.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```