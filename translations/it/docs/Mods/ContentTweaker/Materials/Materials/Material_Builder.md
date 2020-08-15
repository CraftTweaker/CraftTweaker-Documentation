# Costruttore Di Materiali

Se vuoi costruire un [materiale](/Mods/ContentTweaker/Materials/Materials/Material/), avrai bisogno di un Material Builder!  
Non sembra così difficile, vero?

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.MaterialBuilder;`

## Recupero di un tale oggetto

È possibile recuperare un nuovo costruttore chiaro utilizzando il [Pacchetto MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Imposta le proprietà del materiale

È possibile impostare queste proprietà

| ZenMethod               | Parametro                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| setName(name)           | nome stringa                                                     |
| setColor(color)         | colore int                                                       |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | boolean hasEffect                                                |

Tutti questi metodi fanno 2 cose: in primo luogo, cambiano la proprietà del costruttore, in secondo luogo restituiscono il costruttore modificato.  
Puoi vedere negli script di esempio qui sotto cosa significa.

## Realmente costruisci il Materiale

Prima di poter costruire il vostro materiale, dovete costruirlo:

```zenscript
mBuilder.build();
```

Questo restituisce un oggetto [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/).

## Script Di Esempio

```zenscript
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```