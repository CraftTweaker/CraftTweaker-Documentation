# IRegisterMaterialPart

La funzione IRegisterMaterialPart è una fucntion utilizzata per registrare [Componenti materiali](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) aggiunti utilizzando un [PartType personalizzato](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importazione del pacchetto

Se hai mai sentito la necessità di importare la classe di questa funzione, qui vai:

```zenscript
import mods.contenttweaker.RegisterMaterialPart;
```

## Sintassi

Abbiamo una funzione vuota, che richiede una [Parte Materiale](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) come input.  
Questo è il materialPart che dovrebbe essere registrato.  
Si potrebbe per esempio chiamare la [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) a questo punto, ma come procedere forma questo punto è davvero a voi.

```zenscript
function(materialPart) {
    //DoStuff
    return;
}
```